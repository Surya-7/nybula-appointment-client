import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import HomeBox from "scenes/widgets/HomeBox";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id } = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="10rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined} 
          onClick={() => navigate(`/meetings/${_id}`)}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <HomeBox content = "Book New Appointments" userId = {_id}/>
        </Box>
        <Box m="2rem 0" />
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}
          onClick={() => navigate(`/upcomingmeeting/${_id}`)}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <HomeBox   content = "Upcoming Appointments"/>
        </Box>
        <Box m="2rem 0" />
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined} 
          onClick={() => navigate(`/profile/${_id}`)}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <HomeBox content = "View Profile" />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
