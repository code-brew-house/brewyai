import "./index.css";
import { Avatar } from "@mui/material";
import useAuth from "../../contexts/auth/useAuth";

export const Header = () => {
  const {
    state: { user },
  } = useAuth();

  // Default to 'NR' if no user details exist
  const initials = user?.email
    ? user.email.split("@")[0].slice(0, 2).toUpperCase()
    : "NR";

  return (
    <header className="header">
      <div className="header-right">
        <Avatar className="user-avatar">{initials}</Avatar>
      </div>
    </header>
  );
};
