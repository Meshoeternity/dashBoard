import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import CssBaseline from "@mui/material/CssBaseline"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import MovieCreationIcon from "@mui/icons-material/MovieCreation"
import AddReactionIcon from "@mui/icons-material/AddReaction"
import RecentActorsIcon from "@mui/icons-material/RecentActors"
import GroupIcon from "@mui/icons-material/Group"
import TheatersIcon from "@mui/icons-material/Theaters"
import { createTheme, ThemeProvider } from "@mui/material"
import { Link } from "react-router-dom"
import LoginIcon from "@mui/icons-material/Login"
import GroupAddIcon from "@mui/icons-material/GroupAdd"
import { useContext } from "react"
import SportsContext from "../utils/SportsContext"

const drawerWidth = 240

export default function PermanentDrawerLeft() {
  const { logout } = useContext(SportsContext)
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: "dark",
          
          primary: { main: "rgb(102, 157, 246)" },
        
          background: { paper: "rgb(5, 30, 52)" },
        },
      })}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        
        anchor="left"
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <TheatersIcon />
            </ListItemIcon>
            <ListItemText primary="My GYM dashboard" />
          </ListItem>
        </List>
        <List>
          <Link to="/sports">
            <ListItem button>
              <ListItemIcon>
                <MovieCreationIcon />
              </ListItemIcon>
              <ListItemText primary="sports" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          <Link to="/coachs">
            <ListItem button>
              <ListItemIcon>
                <AddReactionIcon />
              </ListItemIcon>
              <ListItemText primary="coachs" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          <Link to="/classes">
            <ListItem button>
              <ListItemIcon>
                <RecentActorsIcon />
              </ListItemIcon>
              <ListItemText primary="classes" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
      

        <Link to="/privtclass">
            <ListItem button>
              <ListItemIcon>
                <RecentActorsIcon />
              </ListItemIcon>
              <ListItemText primary="privtclass" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
      
        <Divider />

        <List>
          <Link to="/users">
            <ListItem button>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="users" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <List style={{ marginTop: "auto" }}>
          {localStorage.tokenDashboardSports ? (
            <Link to="/login">
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="logout" sx={{ color: "white", textDecoration: "none" }} onClick={logout} />
              </ListItem>
            </Link>
          ) : (
            <Link to="/login">
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="login" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
          )}
        </List>
      </Drawer>
    </ThemeProvider>
  )
}
