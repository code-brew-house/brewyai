import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import "./index.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CampaignIcon from "@mui/icons-material/Campaign";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";

export const NavigationMenu = () => {
  return (
    <nav className="navigationMenu">
      <List sx={{ width: "100%", fontSize: "16px" }} component="nav">
        <ListItemButton>
          <ListItemIcon sx={{ color: "#f9fafb" }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#f9fafb" }}>
            <CampaignIcon />
          </ListItemIcon>
          <ListItemText primary="Campaigns" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#f9fafb" }}>
            <ContentPasteIcon />
          </ListItemIcon>
          <ListItemText primary="Scripts" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#f9fafb" }}>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Subscribers" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#f9fafb" }}>
            <CallIcon />
          </ListItemIcon>
          <ListItemText primary="Calls" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#f9fafb" }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </nav>
  );
};
