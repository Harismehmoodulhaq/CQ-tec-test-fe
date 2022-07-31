import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Menus } from "../../constants/menus/Menus";
import { useActionCreator } from "../../state/actions/actions";

const drawerWidth = 240;

function SideBar(props) {
  const { window } = props;

  const isMobile = useSelector(({ common: { isMobile } }) => isMobile);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const { toggleIsMobile } = useActionCreator();

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {Menus.map((menu) => (
          <ListItem key={menu.name} disablePadding>
            <Link to={menu.route}>
              <ListItemButton>
                <ListItemIcon>
                  <menu.Icon />
                </ListItemIcon>
                <ListItemText primary={menu.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={isMobile}
        onClose={() => toggleIsMobile()}
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
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default SideBar;
