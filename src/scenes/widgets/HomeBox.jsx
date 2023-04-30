
  import { Box, Typography, useTheme } from "@mui/material";
  import FlexBetween from "components/FlexBetween";
import HomeBoxWrapper from "components/HomeBoxWrapper";
  
  const HomeBox = ({ content,userId }) => {
        //Create a useState hook 
    const { palette } = useTheme();
    
    //The useSelector hook is part of the React-Redux library and is used to extract data from the Redux store. In this code, it is used to select the token state from the Redux store.
  
  
        //All these colors are coming from theme.js
    const dark = palette.neutral.dark;
    
    return (
      <HomeBoxWrapper>
        {/* FIRST ROW */}
        <FlexBetween
          gap="0.5rem"
          pb="1.1rem"
          //TO navigate to the profile page 
          
        >
          <FlexBetween gap="1rem">
            {/**PROFILE PICTURE */}
            {/* <UserImage image={picturePath} /> */}
            <Box>
              <Typography
                variant="h4"
                color={dark}
                fontWeight="900"
                fontSize="30px"
                textAlign="center"
                sx={{
                  "&:hover": {
                    color: palette.primary.light,
                    cursor:"pointer"
                  },
                }}
              >
                {content} {/**DISPLAYS THE FULL NAME */}
              </Typography>
            </Box>
          </FlexBetween>
        </FlexBetween>  
      </HomeBoxWrapper>
    );
  };
  
  export default HomeBox;
  