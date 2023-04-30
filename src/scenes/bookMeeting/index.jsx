import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import BookMeetingWidget from "scenes/widgets/BookMeetingWidget";
const BookMeeting = () => {
  const [user, setUser] = useState(null);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const token = useSelector((state) => state.token);

  const getUser = async () => {
    const response = await fetch("http://localhost:3001/users", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}`
    },
    });
    const data = await response.json();
    // console.log(data);
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps 

  if (!user) return null;

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="5rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined} >
        {user.map(
        ({
          _id,
          firstName,
          lastName,
          picturePath,
          occupation,
        }) => (     

          <BookMeetingWidget
                userId={_id}
                name={`${firstName} ${lastName}`}
                picturePath={picturePath}
                occupation={occupation}
            />
            
        )
      )}            
        </Box>
      </Box>
    </Box>
  );
};

export default BookMeeting;
