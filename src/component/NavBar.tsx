import { AppBar, Toolbar, Typography, Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar className="flex justify-between">
        <Box>
          <Typography variant="h4">Logo</Typography>
        </Box>
        <Box className="flex justify-between gap-5">
          <Typography>
            <Link to="/">Catagory</Link>
          </Typography>
          <Divider orientation="vertical" className="bg-white" />
          <Typography>
            <Link to="/signup">Signup</Link>
          </Typography>
          <Typography>
            <Link to="/login">Login</Link>
          </Typography>
          <Typography>Logout</Typography>
          <Divider orientation="vertical" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
