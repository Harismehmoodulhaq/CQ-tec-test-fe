import ClearIcon from "@mui/icons-material/Clear";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import SaveIcon from "@mui/icons-material/Save";
import MuiAlert from "@mui/material/Alert";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useActionCreator } from "../../../state/actions/actions";

const bull = (
  <Box
    component="span"
    sx={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(0.8)",
    }}
  >
    •
  </Box>
);

export const StudentForm = () => {
  const [update, setUpdate] = React.useState(false);
  const { student, isLoading, isError } = useSelector(
    ({ studentPage }) => studentPage
  );
  const { patchStudent } = useActionCreator();
  const [newStudent, setStudent] = React.useState({
    ...student,
  });

  const navigate = useNavigate();
  if (student === null) {
    debugger;
    return navigate("/students", { replace: true });
  }

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <>
      <div>
        <Snackbar open={isError} autoHideDuration={1000}>
          <Alert severity="error">Some Thing Went Wrong!</Alert>
        </Snackbar>
      </div>
      <Box
        sx={{
          minWidth: 275,
        }}
      >
        {isLoading ? <LinearProgress /> : <div></div>}
        <Card variant="outlined">
          <React.Fragment>
            <CardContent>
              <Box
                sx={{
                  flexGrow: 1,
                }}
              >
                <AppBar position="static">
                  <Toolbar
                    sx={{
                      backgroundColor: "#dee6f0",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                    variant="dense"
                  >
                    <Stack direction="row" spacing={1}>
                      <IconButton
                        onClick={() => {
                          if (update) {
                            patchStudent(newStudent);
                          } else {
                            setUpdate(!update);
                          }
                        }}
                      >
                        {update ? <SaveIcon /> : <ModeEditIcon />}
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          navigate("/students", {
                            replace: true,
                          });
                        }}
                      >
                        <ClearIcon />
                      </IconButton>
                    </Stack>
                  </Toolbar>
                </AppBar>
              </Box>
              {/* Form */}
              <Toolbar />
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": {
                    m: 1,
                    width: "87ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    label="FirstName"
                    id="standard-size-normal"
                    defaultValue={newStudent.firstName}
                    onChange={(evt) => {
                      setStudent({
                        ...newStudent,
                        firstName: evt.target.value,
                      });
                    }}
                    disabled={!update}
                    variant="standard"
                  />
                  <TextField
                    label="LastName"
                    id="standard-size-normal"
                    defaultValue={newStudent.lastName}
                    onChange={(evt) => {
                      setStudent({ ...newStudent, lastName: evt.target.value });
                    }}
                    disabled={!update}
                    variant="standard"
                  />
                </div>
              </Box>
            </CardContent>
          </React.Fragment>
        </Card>
      </Box>
    </>
  );
};
