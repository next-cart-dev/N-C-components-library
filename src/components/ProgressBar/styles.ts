import { styled } from "../../stitches.config"

export const ProgressContainer = styled("div", {
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
    },
    size: {
      small: {
        fontSize: "$14"
      },
      normal: {
        fontSize: "$space$16"
      }
    }
  }
})

export const Icon = styled("div", {
  variants: {
    variant: {
      primary: {
        color: "$tertiary500"
      },
      secondary: {
        color: "$neutral600"
      }
    },
    size: {
      small: {
        fontSize: "30px"
      },
      normal: {
        fontSize: "40px"
      }
    }
  }
})

export const Progress = styled("div", {
  height: "$space$8",
  borderRadius: "$space$4",
  margin: "0 $space$8",
  variants: {
    variant: {
      primary: {
        backgroundColor: "$tertiary500"
      },
      secondary: {
        backgroundColor: "$neutral600"
      }
    },
    size: {
      small: {
        width: "38px"
      },
      normal: {
        width: "100px"
      }
    }
  }
})
