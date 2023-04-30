
import { useNavigate } from "react-router-dom";

  import { Box,  Typography, useTheme } from "@mui/material";
import BookMeetingWrapper from "components/BookMeetingWrapper";
  import FlexBetween from "components/FlexBetween";
import UserImage from "components/UserImage";
  import {  useSelector } from "react-redux";
  
    //These are the arguments passes to post widget component
  
  const BookMeetingWidget = ({
    userId,name,picturePath,occupation
  }) => {
    const loggedInUserId = useSelector((state) => state.user._id);
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const navigate = useNavigate();

    //function to update the no. of likes and sending it as patch method beacuse we are just updating the no. of likes
  
    return (
      <>
        {loggedInUserId!==userId ? (
              <BookMeetingWrapper m="2rem 0" textAlign = "center">
              <FlexBetween>
              <Box textAlign="center">
                  <UserImage image={picturePath}/>
              </Box>
              <Box paddingRight = "30%">
                  <Typography fontSize="17px" paddingBottom="10px" fontWeight="900">{name}</Typography>
                  <Typography>{occupation}</Typography>
                  <Typography
                      color={dark}
                      fontWeight="500"
                      paddingTop="15px"
                      sx={{
                        "&:hover": {
                          color: palette.primary.light,
                          cursor: "pointer",
                        },
                      }}
                      onClick = {()=>navigate(`/bookslot/${userId}`)}
                  >Book Slots</Typography>
              </Box>
              </FlexBetween>
                        
        </BookMeetingWrapper>
        ):(
          <BookMeetingWrapper m="2rem 0" textAlign = "center">
              <FlexBetween>
              {/* <Box textAlign="center">
                  <UserImage image={picturePath}/>
              </Box> */}
              <Box paddingRight = "30%">
                  {/* <Typography fontSize="17px" paddingBottom="10px" fontWeight="900">{name}</Typography> */}
                  {/* <Typography>{occupation}</Typography> */}
                  <Typography
                      variant="h4"
                      color={dark}
                      fontWeight="900"
                      paddingTop="15px"
                      paddingLeft="17px"
                      
                      sx={{
                        "&:hover": {
                          color: palette.primary.light,
                          cursor: "pointer",
                        },
                      }}
                      onClick = {()=>navigate(`/bookslot/${userId}`)}
                  >Mark Off Hours</Typography>
              </Box>
              </FlexBetween>
                        
        </BookMeetingWrapper>
          
        )
        }

          
      </>
    );

      
      
    
  };
  
  export default BookMeetingWidget;
  