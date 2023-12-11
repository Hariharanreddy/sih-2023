"use client";

import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import HttpsIcon from "@mui/icons-material/Https";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme/theme"; // Import the created theme

const drawerWidth = 280;

const iconStyle = {
  color: "white",
  marginRight: "10px",
};

function ResponsiveDrawer(props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ backgroundColor: "#1c2536", height: "100vh", color: "white" }}>
      <Toolbar />
      <Divider />
      <List style={{ padding: "24px 16px" }}>
        {["Manage Initiatives", "Users", "Settings", "Login", "Register", "Logout"].map((text, index) => (
          <ListItem style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "5px", marginBottom: "5px" }} key={text} disablePadding>
            <ListItemButton>
              {index === 0 && <ManageSearchIcon style={iconStyle} />}
              {index === 1 && <PeopleAltIcon style={iconStyle} />}
              {index === 2 && <SettingsIcon style={iconStyle} />}
              {index === 3 && <HttpsIcon style={iconStyle} />}
              {index === 4 && <PersonAddIcon style={iconStyle} />}
              {index === 5 && <LogoutIcon style={iconStyle} />}
              <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>{text}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider style={{ backgroundColor: "white" }} />
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            backgroundColor: "white",
            color: "grey",
          }}
        >
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
