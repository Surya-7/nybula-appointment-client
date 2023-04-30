import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import BookMeeting from "scenes/bookMeeting";
import ConfirmMeeting from "scenes/confirmMeeting";
import UpcomingMeeting from "scenes/upComingMeeting";

function App() {
    //Used to retrieve the state of mode stored in react-redux store

  const mode = useSelector((state) => state.mode);
  //useMemo is a React hook that is used for optimizing performance by caching the result of a function that may be expensive to compute
  //The themeSettings function takes in the mode and returns a theme object with specific values for the color palette and typography based on the selected mode.
  //The useMemo hook then caches the result of the createTheme function, and only recomputes it if the mode changes. This way, if mode remains the same, the cached value can be used to avoid unnecessary re-renders and improve performance.
  
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  //If token exists then make isAuth true else false and use it to authenticate the user
 
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
            <Route
              path="/meetings/:userId"
              element={isAuth ? <BookMeeting /> : <Navigate to="/" />}
            />
            <Route
              path="/bookslot/:userId"
              element={isAuth ? <ConfirmMeeting /> : <Navigate to="/" />}
            />
            <Route
              path="/upcomingmeeting/:userId"
              element={isAuth ? <UpcomingMeeting /> : <Navigate to="/" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
