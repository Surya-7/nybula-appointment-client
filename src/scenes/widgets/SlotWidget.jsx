
  import { Box, Typography, Divider, useTheme ,Button} from "@mui/material";
  import FlexBetween from "components/FlexBetween";
  import WidgetWrapper from "components/WidgetWrapper";
  import { useSelector } from "react-redux";
  import { useEffect, useState } from "react";
    import { useNavigate } from "react-router-dom";

  const SlotWidget = ({ userId, picturePath }) => {
        //Create a useState hook 
    const [user, setUser] = useState(null);
        const navigate = useNavigate();

    const [loggedInUser, setLoggedInUser] = useState(null);
    const { palette } = useTheme();
    const loggedInUserId = useSelector((state) => state.user._id);
    //The useSelector hook is part of the React-Redux library and is used to extract data from the Redux store. In this code, it is used to select the token state from the Redux store
    const token = useSelector((state) => state.token);
  
        //All these colors are coming from theme.js
    const dark = palette.neutral.dark;
  
      //Fetch the details of the friendId using an API call
  
    const getUser = async () => {
      const response = await fetch(`https://appointment-app-api.onrender.com/users/${userId}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setUser(data);
    };

    //fetch details of the user id: 
    const getLoggedInUser = async () => {
        const response = await fetch(`https://appointment-app-api.onrender.com/users/${loggedInUserId}`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setLoggedInUser(data);
      };


  
    //useEffect is used to call the getUser function once when the component mounts, since an empty array [] is passed as the second argument. 
    useEffect(() => {
      getUser();
      getLoggedInUser();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
    if (!user || !loggedInUser) {
      return null;
    }
  
        //Destructuring or getting the details from the user
  
    // const {
    //   firstName,
    //   lastName,
    //   location,
    //   occupation,
    //   viewedProfile,
    //   impressions,
    //   friends,
    //   availability,
    // } = user;

    //finding the availability of the user.

    const updateAvailability = async(data) =>{
        const response = await fetch(`https://appointment-app-api.onrender.com/users/${loggedInUserId}/${userId}`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: loggedInUserId, friendId: userId, itemNo:data}),
        });
        const updatedAvail = await response.json();
        alert("slot booked");
        navigate(0);
        console.log(updatedAvail);
    }
    return (

        <>
         {/**Checking slot1 */}
            {(user.availability[0] === 0 && loggedInUser.availability[0] === 0 ) ? (
                <WidgetWrapper>
                {/* FIRST ROW */}
                <FlexBetween
                gap="0.5rem"
                pb="1.1rem"
                //TO navigate to the profile page 
                >
                <FlexBetween gap="1rem">
                    <Box>
                    <Typography
                        variant="h4"
                        color={dark}
                        fontWeight="500"
                        textAlign="center"
                    >
                         Slot 1
                        {/**DISPLAYS THE FULL NAME */}
                    </Typography>
                    </Box>
                </FlexBetween>
                </FlexBetween>
                <Divider />
                <FlexBetween
                gap="0.5rem"
                pb="1.1rem"
                //TO navigate to the profile page 
                >
                <FlexBetween gap="1rem">
                    <Box>
                    <Typography
                        variant="h5"
                        color={dark}
                        fontWeight=""
                        textAlign="center"
                        paddingTop="15px"
                    >
                        Timings: 9 AM - 10 AM
                    </Typography>
                    </Box>
                </FlexBetween>
                </FlexBetween>
                <Button
                    onClick={()=>{updateAvailability(0)}}
                    sx={{
                        color: palette.background.alt,
                        backgroundColor: palette.primary.main,
                        borderRadius: "3rem",
                    }}
                    >
                    BOOK
                </Button>
            </WidgetWrapper>

            ):(
                undefined
            )} 
            
            <Box m="2rem 0"/>

            {(user.availability[1] === 0 && loggedInUser.availability[1] === 0 )? (
                <WidgetWrapper>
                {/* FIRST ROW */}
                <FlexBetween
                gap="0.5rem"
                pb="1.1rem"
                //TO navigate to the profile page 
                >
                <FlexBetween gap="1rem">
                    <Box>
                    <Typography
                        variant="h4"
                        color={dark}
                        fontWeight="500"
                        textAlign="center"
                    >
                         Slot 2
                        {/**DISPLAYS THE FULL NAME */}
                    </Typography>
                    </Box>
                </FlexBetween>
                </FlexBetween>
                <Divider />
                <FlexBetween
                gap="0.5rem"
                pb="1.1rem"
                //TO navigate to the profile page 
                >
                <FlexBetween gap="1rem">
                    <Box>
                    <Typography
                        variant="h5"
                        color={dark}
                        fontWeight=""
                        textAlign="center"
                        paddingTop="15px"
                    >
                        Timings: 10 AM - 11 AM
                    </Typography>
                    </Box>
                </FlexBetween>
                </FlexBetween>
                <Button
                    onClick={()=>{updateAvailability(1)}}
                    sx={{
                        color: palette.background.alt,
                        backgroundColor: palette.primary.main,
                        borderRadius: "3rem",
                    }}
                    >
                    BOOK
                </Button>
            </WidgetWrapper>

            ):(
                undefined
            )} 

            <Box m="2rem 0"/>
            {(user.availability[2] === 0 && loggedInUser.availability[2] === 0) ? (
                <WidgetWrapper>
                {/* FIRST ROW */}
                <FlexBetween
                gap="0.5rem"
                pb="1.1rem"
                //TO navigate to the profile page 
                >
                <FlexBetween gap="1rem">
                    <Box>
                    <Typography
                        variant="h4"
                        color={dark}
                        fontWeight="500"
                        textAlign="center"
                    >
                         Slot 3
                        {/**DISPLAYS THE FULL NAME */}
                    </Typography>
                    </Box>
                </FlexBetween>
                </FlexBetween>
                <Divider />
                <FlexBetween
                gap="0.5rem"
                pb="1.1rem"
                //TO navigate to the profile page 
                >
                <FlexBetween gap="1rem">
                    <Box>
                    <Typography
                        variant="h5"
                        color={dark}
                        fontWeight=""
                        textAlign="center"
                        paddingTop="15px"
                    >
                        Timings: 11 AM - 12 PM
                    </Typography>
                    </Box>
                </FlexBetween>
                </FlexBetween>
                <Button
                    sx={{
                        color: palette.background.alt,
                        backgroundColor: palette.primary.main,
                        borderRadius: "3rem",
                    }}
                    onClick={()=>{updateAvailability(2)}}
                    >
                    BOOK
                </Button>
            </WidgetWrapper>

            ):(
                undefined
            )} 
            <Box m="2rem 0"/>

            {(user.availability[3] === 0 && loggedInUser.availability[3] === 0) ? (
                <WidgetWrapper>
                {/* FIRST ROW */}
                <FlexBetween
                gap="0.5rem"
                pb="1.1rem"
                //TO navigate to the profile page 
                >
                <FlexBetween gap="1rem">
                    <Box>
                    <Typography
                        variant="h4"
                        color={dark}
                        fontWeight="500"
                        textAlign="center"
                    >
                         Slot 4
                        {/**DISPLAYS THE FULL NAME */}
                    </Typography>
                    </Box>
                </FlexBetween>
                </FlexBetween>
                <Divider />
                <FlexBetween
                gap="0.5rem"
                pb="1.1rem"
                //TO navigate to the profile page 
                >
                <FlexBetween gap="1rem">
                    <Box>
                    <Typography
                        variant="h5"
                        color={dark}
                        fontWeight=""
                        textAlign="center"
                        paddingTop="15px"
                    >
                        Timings: 1 PM - 2 PM
                    </Typography>
                    </Box>
                </FlexBetween>
                </FlexBetween>
                <Button
                    onClick={()=>{updateAvailability(3)}}
                    sx={{
                        color: palette.background.alt,
                        backgroundColor: palette.primary.main,
                        borderRadius: "3rem",
                    }}
                    >
                    BOOK
                </Button>
            </WidgetWrapper>

            ):(
                undefined
            )} 

            <Box m="2rem 0"/>

            {(user.availability[4] === 0 && loggedInUser.availability[4] === 0 )? (
                <WidgetWrapper>
                {/* FIRST ROW */}
                <FlexBetween
                gap="0.5rem"
                pb="1.1rem"
                //TO navigate to the profile page 
                >
                <FlexBetween gap="1rem">
                    <Box>
                    <Typography
                        variant="h4"
                        color={dark}
                        fontWeight="500"
                        textAlign="center"
                    >
                         Slot 5
                        {/**DISPLAYS THE FULL NAME */}
                    </Typography>
                    </Box>
                </FlexBetween>
                </FlexBetween>
                <Divider />
                <FlexBetween
                gap="0.5rem"
                pb="1.1rem"
                //TO navigate to the profile page 
                >
                <FlexBetween gap="1rem">
                    <Box>
                    <Typography
                        variant="h5"
                        color={dark}
                        fontWeight=""
                        textAlign="center"
                        paddingTop="15px"
                    >
                        Timings: 2 PM - 3 PM
                    </Typography>
                    </Box>
                </FlexBetween>
                </FlexBetween>
                <Button
                    onClick={()=>{updateAvailability(4)}}
                    sx={{
                        color: palette.background.alt,
                        backgroundColor: palette.primary.main,
                        borderRadius: "3rem",
                    }}
                    >
                    BOOK
                </Button>
            </WidgetWrapper>

            ):(
                undefined
            )} 

            <Box m="2rem 0"/>

            {(user.availability[5] === 0 && loggedInUser.availability[5] === 0 )? (
                <WidgetWrapper>
                {/* FIRST ROW */}
                <FlexBetween
                gap="0.5rem"
                pb="1.1rem"
                //TO navigate to the profile page 
                >
                <FlexBetween gap="1rem">
                    <Box>
                    <Typography
                        variant="h4"
                        color={dark}
                        fontWeight="500"
                        textAlign="center"
                    >
                         Slot 6
                        {/**DISPLAYS THE FULL NAME */}
                    </Typography>
                    </Box>
                </FlexBetween>
                </FlexBetween>
                <Divider />
                <FlexBetween
                gap="0.5rem"
                pb="1.1rem"
                //TO navigate to the profile page 
                >
                <FlexBetween gap="1rem">
                    <Box>
                    <Typography
                        variant="h5"
                        color={dark}
                        fontWeight=""
                        textAlign="center"
                        paddingTop="15px"
                       
                    >
                        Timings: 4 PM - 5 PM
                    </Typography>
                    </Box>
                </FlexBetween>
                </FlexBetween>
                <Button
                    onClick={()=>{updateAvailability(5)}}
                    sx={{
                        color: palette.background.alt,
                        backgroundColor: palette.primary.main,
                        borderRadius: "3rem",
                    }}
                    >
                    BOOK
                </Button>
            </WidgetWrapper>

            ):(
                undefined
            )} 
            <Box m="2rem 0"/>
            {(user.availability[6] === 0 && loggedInUser.availability[6] === 0)? (
                <WidgetWrapper>
                {/* FIRST ROW */}
                <FlexBetween
                gap="0.5rem"
                pb="1.1rem"
                //TO navigate to the profile page 
                >
                <FlexBetween gap="1rem">
                    <Box>
                    <Typography
                        variant="h4"
                        color={dark}
                        fontWeight="500"
                        textAlign="center"
                    >
                         Slot 7
                        {/**DISPLAYS THE FULL NAME */}
                    </Typography>
                    </Box>
                </FlexBetween>
                </FlexBetween>
                <Divider />
                <FlexBetween
                gap="0.5rem"
                pb="1.1rem"
                //TO navigate to the profile page 
                >
                <FlexBetween gap="1rem">
                    <Box>
                    <Typography
                        variant="h5"
                        color={dark}
                        fontWeight=""
                        textAlign="center"
                        paddingTop="15px"
                    >
                        Timings: 5 PM - 6PM
                    </Typography>
                    </Box>
                </FlexBetween>
                </FlexBetween>
                <Button
                    onClick={()=>{updateAvailability(6)}}
                    sx={{
                        color: palette.background.alt,
                        backgroundColor: palette.primary.main,
                        borderRadius: "3rem",
                    }}
                    >
                    BOOK
                </Button>
            </WidgetWrapper>

            ):(
                undefined
            )} 
        </>
      
    );
  };
  
  export default SlotWidget;
  
