
  import { Box, Typography, Divider, useTheme ,Button} from "@mui/material";
  import UserImage from "components/UserImage";
  import FlexBetween from "components/FlexBetween";
  import WidgetWrapper from "components/WidgetWrapper";
  import { useSelector,useDispatch } from "react-redux";
  import { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  const UpcomingMeetingWidget = ({ userId, picturePath }) => {
        //Create a useState hook 
    const [user, setUser] = useState(null);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const { palette } = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loggedInUserId = useSelector((state) => state.user._id);
    //The useSelector hook is part of the React-Redux library and is used to extract data from the Redux store. In this code, it is used to select the token state from the Redux store
    const token = useSelector((state) => state.token);
  
        //All these colors are coming from theme.js
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;
    return (

        <>
         
        </>
      
    );
  };
  
  export default UpcomingMeetingWidget;
  