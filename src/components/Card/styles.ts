import { styled } from "../../stitches.config"

export const Card = styled("div", {
  border: "1px solid $primary200",
  borderRadius: "$space$4",
  backgroundColor: "$neutral400",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  variants: {
    variant: {
      primary: {
        height: "138px",
        width: "158px",
        transition: "0.2s",
        "&:hover": {
          backgroundColor: "$secondary200"
        }
      },
      secondary: {
        height: "120px",
        width: "250px",
        borderColor: "$primary400"
      },
      tertiary: {
        height: "56px",
        minWidth: "370px"
      }
    }
  }
})
