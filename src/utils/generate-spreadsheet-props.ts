import moment, { Moment } from "moment";
import { CellBase, Matrix } from "react-spreadsheet";
import { IData, IHolidays } from "../data";
import { yearDates } from "./year-dates";
import styles from '../App.module.css'


interface IDateColumn {
  datetime: Moment;
  holiday?: IHolidays;
  weekend?: boolean;
  firstOfMonth?: boolean;
}

export function generateSpreadsheetProps(data?: IData) {
  const matrix: Matrix<CellBase<any>> = []
  const rowLabels: string[] = [];
  const columnLabels: string[] = [];

  if (data) {
    const { holidays, users } = data
    const dates: IDateColumn[] = []

    for(const datetime of yearDates(2022)) {
      const mday = datetime.date()
      const wday = datetime.day()

      dates.push({
        datetime,
        holiday: holidays.find((holiday) => datetime.isSame(holiday.date, "day")),
        weekend: wday === 0 || wday === 6,
        firstOfMonth: mday === 1
      })

      columnLabels.push(datetime.format("DD"))
    }

    // month row
    {
      const line: CellBase[] = []
      rowLabels.push("")
      for(const { firstOfMonth, datetime } of dates) {
        line.push({
          readOnly: true,
          value: firstOfMonth ? datetime.format("MMM") : ''
        })
      }
      matrix.push(line)
    }

    // day row
    {
      const line: CellBase[] = []
      rowLabels.push("")
      for(const { weekend, datetime } of dates) {
        line.push({
          readOnly: true,
          className: weekend && styles.weekend || "",
          value: datetime.format("dd")
        })
      }
      matrix.push(line)
    }

    for (const user of users) {
      const line: CellBase[] = []
      rowLabels.push(user.name)

      for(const date of dates) {
        if (date.holiday) {
          line.push({
            className: styles.holiday,
            readOnly: true,
            value: 'H',
          })
          continue
        }

        if (date.weekend) {
          line.push({
            className: styles.weekend,
            readOnly: true,
            value: '',
          })
          continue
        }

        // isUserApprovedVacation
        if (user.vacations.approved.find((approvedDate) => moment(approvedDate).isSame(date.datetime))) {
          line.push({
            className: styles.approvedVacation,
            readOnly: true,
            value: 'V',
          })
          continue;
        }

        // isUserRequestedVacation
        if (user.vacations.requested.find((requestedDate) => moment(requestedDate).isSame(date.datetime))) {
          line.push({
            className: styles.requestedVacation,
            readOnly: true,
            value: 'R',
          })
          continue;
        }

        line.push({
          className: styles.empty,
          readOnly: true,
          value: ''
        })
      }

      matrix.push(line)
    }
  }

  return {
    columnLabels,
    rowLabels,
    data: matrix,
  };
}
