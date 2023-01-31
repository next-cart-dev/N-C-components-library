import { styled } from "../../stitches.config"

export const Tooltip = styled("div", {
  position: "absolute",
  background: "$primary300",
  color: "$primary500",
  letterSpacing: "1.2px",
  height: "30px",
  fontSize: "$14",
  width: "fit-content",
  zIndex: "100000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "2px"
})

export const Container = styled("div", {
  display: "flex",
  position: "relative",
  width: "fit-content",
  variants: {
    variant: {
      top: {
        alignItems: "flex-start",
        justifyContent: "center"
      },
      right: {
        alignItems: "center",
        justifyContent: "right"
      },
      bottom: {
        alignItems: "flex-end",
        justifyContent: "center"
      },
      left: {
        alignItems: "center",
        justifyContent: "left"
      }
    }
  }
})

export const Arrow = styled("div", {
  width: "0",
  height: "0",
  position: "absolute",
  variants: {
    variant: {
      top: {
        borderRight: "6px solid transparent",
        borderLeft: "6px solid transparent",
        borderTop: "6px solid $primary300",
        top: "100%"
      },
      left: {
        borderTop: "6px solid transparent",
        borderBottom: "6px solid transparent",
        borderLeft: "6px solid $primary300",
        left: "100%"
      },
      bottom: {
        borderRight: "6px solid transparent",
        borderLeft: "6px solid transparent",
        borderBottom: "6px solid $primary300",
        bottom: "100%"
      },
      right: {
        borderTop: "6px solid transparent",
        borderBottom: "6px solid transparent",
        borderRight: "6px solid $primary300",
        right: "100%"
      }
    }
  }
})

export const TipContent = styled("div", {
  height: "100%",
  width: "100%",
  position: "relative",
  display: "flex",
  padding: "0 $8",
  justifyContent: "center",
  alignItems: "center"
})
