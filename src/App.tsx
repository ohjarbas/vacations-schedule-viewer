import Spreadsheet, { CellBase, Matrix } from 'react-spreadsheet'
import { data } from './mock'
import { FC, useMemo } from 'react'
import { generateSpreadsheetProps } from './utils/generate-spreadsheet-props'
import styles from './App.module.css'
import { convertFromBase64, dataSchema, IData } from './data'

export function App() {

  const data = useMemo((): IData | undefined => {
    try {
      const base64Data = location.hash.replace(/^\#/, "")
      return convertFromBase64(base64Data)
    } catch {
      // ignore
    }
  }, [location.hash])

  const props = useMemo(() => generateSpreadsheetProps(data), [data]);

  return (
    <Spreadsheet className={styles.spreadsheet} {...props} />
  )
}
