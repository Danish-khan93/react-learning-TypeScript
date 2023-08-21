import { AppBar, Toolbar, Typography, Box, Divider } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar className="flex justify-between">
        <Box>
          <Typography variant="h4">Logo</Typography>
        </Box>
        <Box className="flex justify-between gap-5">
          <Typography>Catagory</Typography>
          <Divider orientation="vertical" />
          <Typography>Signup</Typography>
          <Typography>Login</Typography>
          <Typography>Logout</Typography>
          <Divider orientation="vertical" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
