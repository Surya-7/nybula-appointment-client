import { Box } from "@mui/material";
import { styled } from "@mui/system";

const BookMeetingWrapper = styled(Box)(({ theme }) => ({
  padding: "3rem 3rem 3rem 3rem",
  backgroundColor: theme.palette.background.alt,
  borderRadius: "0.75rem",
}));

export default BookMeetingWrapper;