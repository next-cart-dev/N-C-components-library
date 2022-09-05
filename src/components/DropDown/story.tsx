import React, { useState } from "react"

import { BsCheck } from "react-icons/bs"
import { GoPrimitiveDot } from "react-icons/go"

import { Button } from "../Button"

import { DropDown, DropDownElements } from "."

export const DropDownStory = ({
  align = "center",
  buttonValue
}: {
  align?: "start" | "center" | "end"
  buttonValue: string
}) => {
  const [checkedIcon, setCheckedIcon] = useState(true)
  const [checkedIconTwo, setCheckedIconTwo] = useState(false)
  const [color, setColor] = useState("blue")

  return (
    <DropDown TriggerElementRef={<Button>{buttonValue}</Button>} align={align}>
      <DropDownElements.Label>Label</DropDownElements.Label>
      <DropDownElements.Group>
        <DropDownElements.Item
          onClick={() => alert("Here you can receive an event!")}
        >
          Item 1
        </DropDownElements.Item>
        <DropDownElements.Item
          onClick={() => alert("Here you can receive an event!")}
        >
          Item 2
        </DropDownElements.Item>
        <DropDownElements.Item
          onClick={() => alert("Here you can receive an event!")}
        >
          Item 3
        </DropDownElements.Item>
        <DropDownElements.Item
          onClick={() => alert("Here you can receive an event!")}
        >
          Item 4
        </DropDownElements.Item>
        <DropDownElements.Item disabled>Disabled Item</DropDownElements.Item>
      </DropDownElements.Group>
      <DropDownElements.Sub>
        <DropDownElements.SubTrigger>Sub Menu</DropDownElements.SubTrigger>
        <DropDownElements.SubContent sideOffset={2} alignOffset={-5}>
          <DropDownElements.Item
            onClick={() => alert("Here you can receive an event!")}
          >
            Sub Item 1
          </DropDownElements.Item>
          <DropDownElements.Item
            onClick={() => alert("Here you can receive an event!")}
          >
            Sub Item 2
          </DropDownElements.Item>
          <DropDownElements.Item
            onClick={() => alert("Here you can receive an event!")}
          >
            Sub Item 3
          </DropDownElements.Item>
          <DropDownElements.Separator />
          <DropDownElements.Item
            onClick={() => alert("Here you can receive an event!")}
          >
            Sub Item 4
          </DropDownElements.Item>
        </DropDownElements.SubContent>
      </DropDownElements.Sub>
      <DropDownElements.Separator />
      <DropDownElements.CheckboxItem
        checked={checkedIcon}
        onCheckedChange={setCheckedIcon}
      >
        <DropDownElements.ItemIndicator>
          <BsCheck />
        </DropDownElements.ItemIndicator>
        Checkbox Item 1
      </DropDownElements.CheckboxItem>
      <DropDownElements.CheckboxItem
        checked={checkedIconTwo}
        onCheckedChange={setCheckedIconTwo}
      >
        <DropDownElements.ItemIndicator>
          <BsCheck />
        </DropDownElements.ItemIndicator>
        Checkbox Item 2
      </DropDownElements.CheckboxItem>
      <DropDownElements.Separator />
      <DropDownElements.RadioGroup value={color} onValueChange={setColor}>
        <DropDownElements.RadioItem value="blue">
          <DropDownElements.ItemIndicator>
            <GoPrimitiveDot />
          </DropDownElements.ItemIndicator>
          blue
        </DropDownElements.RadioItem>
        <DropDownElements.RadioItem value="red">
          <DropDownElements.ItemIndicator>
            <GoPrimitiveDot />
          </DropDownElements.ItemIndicator>
          red
        </DropDownElements.RadioItem>
      </DropDownElements.RadioGroup>
    </DropDown>
  )
}
