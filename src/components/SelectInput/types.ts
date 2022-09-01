import { Options } from "react-select"

type Option = {
  value: string
  label: string
}

export type Props = {
  /**
   * Select Options
   * @options An array of object with value and label. ex [{value: 'red', label: 'Red'}]
   * @default ''
   */
  options: Options<Option>
  /**
   * Set if the select will be multi
   * @options true or false
   * @default false
   */
  isMulti?: boolean
  /**
   * Select Placeholder
   * @options string
   * @default ''
   */
  placeholder?: string
}
