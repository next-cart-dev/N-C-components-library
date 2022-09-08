import { styled } from "../../stitches.config"

export const PropgressContainer = styled("div", {
  display: "flex",
  alignItems: "center"
})

export const StepsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column"
})

export const Step = styled("span", {
  fontSize: "$space$16",
  fontWeight: "$medium",
  textTransform: "capitalize",
  variants: {
    variant: {
      primary: {
        color: "$text500"
      },
      secondary: {
        color: "$neutral600"
      }
    }
  }
})

export const Icon = styled("div", {
  fontSize: "40px",
  variants: {
    variant: {
      primary: {
        color: "$tertiary500"
      },
      secondary: {
        color: "$neutral600"
      }
    }
  }
})

export const Propgress = styled("div", {
  width: "100px",
  height: "$space$8",
  borderRadius: "$space$4",
  margin: "0 $space$24",
  variants: {
    variant: {
      primary: {
        backgroundColor: "$tertiary500"
      },
      secondary: {
        backgroundColor: "$neutral600"
      }
    }
  }
})
