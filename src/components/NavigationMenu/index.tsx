import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Box,
  useTheme,
} from "@mui/material";
import "./index.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CampaignIcon from "@mui/icons-material/Campaign";
import DescriptionIcon from "@mui/icons-material/Description";
import PeopleIcon from "@mui/icons-material/People";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import SettingsIcon from "@mui/icons-material/Settings";
import brewyLogo from "../../assets/brewy-ai-text-logo.png";

const NavigationContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#1a1c1e",
  width: "240px",
  maxWidth: "240px",
  overflow: "hidden",
}));

const LogoContainer = styled(Box)({
  padding: "1rem",
  height: "70px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  "& img": {
    maxWidth: "100%",
    height: "auto",
  },
});

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  minHeight: 48,
  borderRadius: "8px",
  marginBottom: "4px",
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "light"
        ? "rgba(103, 58, 183, 0.08)"
        : "rgba(145, 85, 253, 0.1)",
  },
}));

const StyledListItemText = styled(ListItemText)({
  whiteSpace: "nowrap",
  marginLeft: "8px",
  ".MuiTypography-root": {
    fontSize: "0.875rem",
  },
});

export const NavigationMenu = () => {
  const theme = useTheme();

  const menuItems = [
    { id: "dashboard", icon: <DashboardIcon />, text: "Dashboard" },
    { id: "campaigns", icon: <CampaignIcon />, text: "Campaigns" },
    { id: "scripts", icon: <DescriptionIcon />, text: "Scripts" },
    { id: "subscribers", icon: <PeopleIcon />, text: "Subscribers" },
    { id: "calls", icon: <PhoneInTalkIcon />, text: "Calls" },
    { id: "settings", icon: <SettingsIcon />, text: "Settings" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "1600px",
        margin: "0 auto",
        minHeight: "100vh",
      }}
    >
      <NavigationContainer className="layoutSidebar">
        <LogoContainer>
          <img src={brewyLogo} alt="brewy.ai" />
        </LogoContainer>
        <List sx={{ width: "100%", fontSize: "16px", p: 2 }} component="nav">
          {menuItems.map((item) => (
            <StyledListItemButton key={item.id}>
              <ListItemIcon
                sx={{ color: theme.palette.primary.main, minWidth: 40 }}
              >
                {item.icon}
              </ListItemIcon>
              <StyledListItemText primary={item.text} />
            </StyledListItemButton>
          ))}
        </List>
      </NavigationContainer>
    </Box>
  );
};
