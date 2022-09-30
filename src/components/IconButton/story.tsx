import React from "react"

import { BsPersonFill } from "react-icons/bs"

import { Box } from "../Box"

import { IconButton } from "."

export const StoryDefault = () => {
  return (
    <>
      <Box
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "$8",
          width: "150px",
          alignItems: "center"
        }}
      >
        <IconButton size="small" icon={<BsPersonFill />} />
        <IconButton size="medium" icon={<BsPersonFill />} />
        <IconButton size="large" icon={<BsPersonFill />} />
      </Box>
      <Box
        css={{
          marginTop: "$16",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "$8",
          width: "150px",
          alignItems: "center"
        }}
      >
        <IconButton size="small" variant="secondary" icon={<BsPersonFill />} />
        <IconButton size="medium" variant="secondary" icon={<BsPersonFill />} />
        <IconButton size="large" variant="secondary" icon={<BsPersonFill />} />
      </Box>
    </>
  )
}
