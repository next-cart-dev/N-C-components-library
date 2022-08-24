import React from "react"

import {
  FormatInputValueFunction,
  NumberFormatValues,
  SourceInfo
} from "react-number-format"

export type Props = {
  /**
   * Add thousand separators on number.
   * @options mixed: single character string or boolean true (true is default to ,)
   * @default none
   */
  thousandSeparator?: boolean | string
  /**
   * Support decimal point on a number.
   * @options single character string
   * @default .
   */
  decimalSeparator?: string
  /**
   * Define the thousand grouping style, It support three types. thousand style (thousand) : 123,456,789, indian style (lakh) : 12,34,56,789, chinese style (wan) : 1,2345,6789.
   * @options One of ['thousand', 'lakh', 'wan']
   * @default thousand
   */
  thousandsGroupStyle?: "thousand" | "lakh" | "wan"
  /**
   * If defined it limits to given decimal scale.
   * @options number
   * @default none
   */
  decimalScale?: number
  /**
   * If true it add 0s to match given decimalScale.
   * @options boolean
   * @default false
   */
  fixedDecimalScale?: boolean
  /**
   * If input it renders a input element where formatting happens as you input characters. If text it renders it as a normal text in a span formatting the given value.
   * @options String: text / input
   * @default input
   */
  displayType?: "input" | "text"
  /**
   * Add a prefix before the number.
   * @options String (ex : $)
   * @default none
   */
  prefix?: string
  /**
   * Add a suffix after the number.
   * @options String (ex : /-)
   * @default none
   */
  suffix?: string
  /**
   * If format given as hash string allow number input inplace of hash. If format given as function, component calls the function with unformatted number and expects formatted number.
   * @options String : Hash based ex (#### #### #### ####) Or Function
   * @default none
   */
  format?: string | FormatInputValueFunction
  /**
   * If you are providing custom format method and it add numbers as format you will need to add custom removeFormatting logic.
   * @options (formattedValue) => numericString
   * @default none
   */
  removeFormatting?: (formattedValue: string) => string
  /**
   * If mask defined, component will show non entered placed with masked value.
   * @options String (ex : _)
   * @default ' '
   */
  mask?: string | string[]
  /**
   * Value to the number format. It can be a float number, or formatted string. If value is string representation of number (unformatted), isNumericString props should be passed as true.
   * @options Number or String
   * @default null
   */
  value?: number | string | null
  /**
   * Value to be used as default value if value is not provided. The format of defaultValue should be similar as defined for the value.
   * @options Number or String
   * @default null
   */
  defaultValue?: number | string
  /**
   * If value is passed as string representation of numbers (unformatted) then this should be passed as true.
   * @options boolean
   * @default false
   */
  isNumericString?: boolean
  /**
   * This allow supporting custom inputs with number format.
   * @options Component Reference
   * @default input
   */
  customInput?: React.ComponentType<any>
  /**
   * allow negative numbers (Only when format option is not provided).
   * @options boolean
   * @default true
   */
  allowNegative?: boolean
  /**
   * Apply formatting to empty inputs.
   * @options boolean
   * @default false
   */
  allowEmptyFormatting?: boolean
  /**
   * Allow leading zeros at beginning of number.
   * @options boolean
   * @default false
   */
  allowLeadingZeros?: boolean
  /**
   * onValueChange handler accepts values object.
   * @options (values, sourceInfo) => {}
   * these are already included in React.HTMLAttributes<HTMLInputElement>
   * onKeyDown: Function;
   * onMouseUp: Function;
   * onChange: Function;
   * onFocus: Function;
   * onBlur: Function;
   * @default none
   */
  onValueChange?: (values: NumberFormatValues, sourceInfo: SourceInfo) => void
  /**
   * Input type attribute.
   * @options One of ['text', 'tel', 'password']
   * @default text
   */
  type?: "text" | "tel" | "password"
  isAllowed?: (values: NumberFormatValues) => boolean
  /**
   * A renderText method useful if you want to render formattedValue in different element other than span. It also returns the custom props that are added to the component which can allow passing down props to the rendered element.
   * @options (formattedValue, customProps) => React Element
   * @default null
   */
  renderText?: (formattedValue: string) => React.ReactNode
  /**
   * Method to get reference of input, span (based on displayType prop) or the customInput's reference.
   * @options (elm) => void
   * @default null
   */
  getInputRef?: ((el: HTMLInputElement) => void) | React.Ref<any>
  /**
   * Characters which when pressed result in a decimal separator. When missing, decimal separator and '.' are used.
   * @options array of char
   * @default none
   */
  allowedDecimalSeparators?: Array<string>
  /**
   * an array of 10 single-character strings with represent numerals in different locales. ranging from 0 - 9. the result will be converted to english numeral and treated as number
   * @options array of string
   * @default none
   */
  customNumerals?: [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ]
  /**
   * Input Label
   * @options string
   * @default empty string
   */
  label?: string
  /**
   * Input Placeholder
   * @options string
   * @default null
   */
  placeholder?: string
  /**
   *
   */
  formatMaskToUse?: "cpf" | "cnpj" | "date" | "currency" | "mobile"
}
