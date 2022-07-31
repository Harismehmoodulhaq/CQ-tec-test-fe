import ClearIcon from "@mui/icons-material/Clear";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import SaveIcon from "@mui/icons-material/Save";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
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
  const { student } = useSelector(({ studentPage }) => studentPage);
  const { patchStudent } = useActionCreator();
  const [newStudent, setStudent] = React.useState({
    ...student,
  });

  const navigate = useNavigate();
  if (student === null) {
    return navigate("/students", { replace: true });
  }
  return (
    <Box
      sx={{
        minWidth: 275,
      }}
    >
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
                    setStudent({ ...newStudent, firstName: evt.target.value });
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
  );
};
