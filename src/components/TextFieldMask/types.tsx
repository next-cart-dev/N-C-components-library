import { ComponentPropsWithoutRef } from "react"

import { NumberFormatValues, SourceInfo } from "react-number-format"

import { Props as PatternProps } from "./StaticMask/types"

import { Props as TextFieldProps } from "../TextField/types"

export type MaskType = "cpf" | "cnpj" | "date" | "currency" | "mobile"

export type MaskFormat = {
  mask: string
  placeholder: string
}

export type Props = TextFieldProps &
  ComponentPropsWithoutRef<"input"> &
  PatternProps & {
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
    format?: string
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
    onValueChange?: (values: NumberFormatValues, sourceInfo: SourceInfo) => void
    /**
     * Input type attribute.
     * @options One of ['text', 'tel', 'password']
     * @default text
     */
    type?: "text" | "tel" | "password"
    getInputRef?: ((el: HTMLInputElement) => void) | React.Ref<any>
    /**
     * Characters which when pressed result in a decimal separator. When missing, decimal separator and '.' are used.
     * @options array of char
     * @default none
     */
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
    formatMaskToUse?: MaskType
    /**
     *
     */
    placeholderToUse?: MaskType
  }
