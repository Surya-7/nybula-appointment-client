import { Box } from "@mui/material";
import { styled } from "@mui/system";

const HomeBoxWrapper = styled(Box)(({ theme }) => ({
  padding: "7rem",
  backgroundColor: theme.palette.background.alt,
  
  borderRadius: "0.75rem",
}));

export default HomeBoxWrapper;
