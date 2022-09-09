import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { styled } from "../../stitches.config"

export const Avatar = styled(AvatarPrimitive.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  width: "40px",
  height: "40px",
  borderRadius: "100%",
  backgroundColor: "$primary500"
})

export const Image = styled(AvatarPrimitive.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit"
})

export const Fallback = styled(AvatarPrimitive.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$text200",
  backgroundColor: "$secondary500",
  fontSize: "$18",
  lineHeight: "1",
  fontWeight: "700"
})
