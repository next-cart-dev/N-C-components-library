import { CommonProps, GroupBase, Props as SelectProps } from "react-select"
import { StateManagerProps } from "react-select/dist/declarations/src/useStateManager"

type Option = {
  value: string
  label: string
}

type isMulti = boolean

export type Props = Partial<
  CommonProps<Option, isMulti, GroupBase<Option>> &
    SelectProps &
    StateManagerProps
> & {
  /**
   * Select Options
   * @options An array of object with value and label. ex [{value: 'red', label: 'Red'}]
   * @default ''
   */
  options: Array<Option>
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
  /**
   * Set whether the select can be cleared
   * @options true or false
   * @default true
   */
  isClearable?: boolean
  /**
   * Select Label
   */
  label?: string
}
