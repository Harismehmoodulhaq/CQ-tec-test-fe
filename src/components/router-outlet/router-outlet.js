import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Config } from "../../constants/menus/Menus";

const { drawerWidth } = Config;

function RouterOutlet(props) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: {
          sm: `calc(100% - ${drawerWidth}px)`,
        },
      }}
    >
      <Toolbar />
      <Paper> {props.children} </Paper>{" "}
    </Box>
  );
}

export default RouterOutlet;
