import * as yup from 'yup'
import { Buffer } from 'buffer'

export interface IUserVacations {
    name: string;
    handler: string;
    vacations: {
      approved: Date[];
      requested: Date[];
    }
}

export interface IHolidays {
    name: string;
    date: Date;
}

export type IData = {
    users: Array<IUserVacations>
    holidays: Array<IHolidays>
}

export const dataSchema = yup.object().shape({
    users: yup.array().of(yup.object().shape({
        name: yup.string(),
        vacations: yup.object().shape({
          approved: yup.array().of(yup.date()),
          requested: yup.array().of(yup.date()),
        })
    })),
    holidays:  yup.array().of(yup.object().shape({
        name: yup.string(),
        date: yup.date()
    }))
})

export function convertFromBase64(base64Data: string) {
  const buffer = Buffer.from(base64Data, "base64")
  const data = JSON.parse(buffer.toString())
  return dataSchema.cast(data) as unknown as IData || undefined
}

export function convertToBase64(data: IData) {
  const buffer = Buffer.from(JSON.stringify(data))
  return buffer.toString('base64')
}