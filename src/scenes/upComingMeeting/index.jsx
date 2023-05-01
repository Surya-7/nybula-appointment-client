import { Box,  } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";

const UpcomingMeeting = () => {
  const [meetingDetails, setMeetingDetails] = useState(null);
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const getMeetingDetails = async () => {
    const response = await fetch(`https://appointment-app-api.onrender.com/users/${loggedInUserId}/friends`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setMeetingDetails(data);
  };
  useEffect(() => {
    getMeetingDetails();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  if (!meetingDetails) return null;

  console.log(meetingDetails);
  return (
    <Box>
      <Navbar />
      {/* <UpcomingMeetingWidget/> */}
    </Box>
  );
};

export default UpcomingMeeting;
