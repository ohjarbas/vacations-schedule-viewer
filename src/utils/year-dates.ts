import moment, { Moment } from "moment";

export  function *yearDates(year: number = moment().year()) {
  let lastDate: Moment = moment("2000/01/01 00:00:00").utc().set('year', year)
  yield lastDate;

  while(1) {
    const nextDate = lastDate.clone().add(1, 'day')
    if (nextDate.year() !== year) return
    lastDate = nextDate
    yield lastDate
  }
}