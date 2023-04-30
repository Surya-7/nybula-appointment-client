import { Box } from "@mui/material";
import { styled } from "@mui/system";
//The styled function is a part of MUI's system package, which allows you to create custom styled components by passing a component and style object to it. Here, Box is passed as the component, and an object with display, justifyContent, and alignItems properties is passed as the style.
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
