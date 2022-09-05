import { CommonProps, GroupBase } from "react-select"
type Option = string
type isMulti = boolean

export type Props = Partial<CommonProps<Option, isMulti, GroupBase<Option>>> & {
  /**
   * Select Options
   * @options An array of object with value and label. ex [{value: 'red', label: 'Red'}]
   * @default ''
   */
  options: Array<string>
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
