import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserWidget = ({ userId, picturePath }) => {
      //Create a useState hook 
  const [user, setUser] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();
  
  //The useSelector hook is part of the React-Redux library and is used to extract data from the Redux store. In this code, it is used to select the token state from the Redux store.

  const token = useSelector((state) => state.token);

      //All these colors are coming from theme.js
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

    //Fetch the details of the user using an API call

  const getUser = async () => {
    const response = await fetch(`https://appointment-app-api.onrender.com/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  //useEffect is used to call the getUser function once when the component mounts, since an empty array [] is passed as the second argument. 
  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return null;
  }

      //Destructuring or getting the details from the user

  const {
    firstName,
    lastName,
    location,
    occupation,
  } = user;

  return (
    <WidgetWrapper>
      {/* FIRST ROW */}
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        //TO navigate to the profile page 
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween gap="1rem">
          {/**PROFILE PICTURE */}
          <UserImage image={picturePath} />
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              {firstName} {lastName} {/**DISPLAYS THE FULL NAME */}
            </Typography>
          </Box>
        </FlexBetween>
        <ManageAccountsOutlined />{/**MANAGE ACCOUNT ICON */}
      </FlexBetween>
      <Divider />

      {/* SECOND ROW */}
      <Box p="1rem 0">
        {/*Defining the location in user widget */}
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined fontSize="large" sx={{ color: main }} /> {/**Displays the location icon */}
          <Typography color={medium}>{location}</Typography>{/**Displays the location  */}
        </Box>
        {/*Defining the occupation in user widget */}
        <Box display="flex" alignItems="center" gap="1rem">
          <WorkOutlineOutlined fontSize="large" sx={{ color: main }} /> {/**Displays the occupation icon */}
          <Typography color={medium}>{occupation}</Typography> {/**Displays the occupation */}
        </Box>
      </Box>

      <Divider />

      {/* FOURTH ROW */}
      <Box p="1rem 0">
        {/**Displaying the social profiles */}
        <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
          Social Profiles
        </Typography>

        <FlexBetween gap="1rem" mb="0.5rem">
          <FlexBetween gap="1rem">
            <img src="../assets/twitter.png" alt="twitter" />
            <Box>
              <Typography color={main} fontWeight="500">
                Twitter
              </Typography>
              <Typography color={medium}>Social Network</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>

        <FlexBetween gap="1rem">
          <FlexBetween gap="1rem">
            <img src="../assets/linkedin.png" alt="linkedin" />
            <Box>
              <Typography color={main} fontWeight="500">
                Linkedin
              </Typography>
              <Typography color={medium}>Network Platform</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>
      </Box>
          <Divider/>
      <Box p="1rem 0">
        {/*Displaying the impressions and views of the profile */}
          <Typography textAlign="center" color={main} fontWeight="500" sx={{
                  "&:hover": {
                    color: palette.primary.light,
                    cursor: "pointer",
                  },
                }}>
            Update password
          </Typography>
      </Box>
    </WidgetWrapper>
  );
};

export default UserWidget;
