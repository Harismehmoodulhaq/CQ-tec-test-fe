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

export const BookForm = () => {
  const [update, setUpdate] = React.useState(false);
  const { book, isLoading, isError } = useSelector(({ bookPage }) => bookPage);
  const { patchBook } = useActionCreator();
  const [newBook, setBook] = React.useState({
    ...book,
    dateOfBorrow: book ? new Date(book.dateOfBorrow) : "",
    expectedDateOfReturn: book ? new Date(book.expectedDateOfReturn) : "",
  });

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const navigate = useNavigate();
  if (book === null) {
    return navigate("/books", { replace: true });
  }
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
                            patchBook(newBook);
                          } else {
                            setUpdate(!update);
                          }
                        }}
                      >
                        {update ? <SaveIcon /> : <ModeEditIcon />}
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          navigate("/books", {
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
              {/* Form */} <Toolbar />
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": {
                    m: 1,
                    width: "55ch",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    label="Book Name"
                    id="standard-size-normal"
                    defaultValue={newBook.bookName}
                    onChange={(evt) => {
                      setBook({
                        ...newBook,
                        bookName: evt.target.value,
                      });
                    }}
                    disabled={!update}
                    variant="standard"
                  />
                  <TextField
                    label="Author Name"
                    id="standard-size-normal"
                    defaultValue={newBook.authorName}
                    onChange={(evt) => {
                      setBook({
                        ...newBook,
                        authorName: evt.target.value,
                      });
                    }}
                    disabled={!update}
                    variant="standard"
                  />
                  <TextField
                    label="Borrowed BY"
                    id="standard-size-normal"
                    defaultValue={newBook.borrowedBy}
                    onChange={(evt) => {
                      setBook({
                        ...newBook,
                        borrowedBy: evt.target.value,
                      });
                    }}
                    disabled
                    variant="standard"
                  />
                </div>
                <div>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      label="BorrowAt"
                      value={newBook.dateOfBorrow}
                      disabled={!update}
                      onChange={(value) => {
                        setBook({
                          ...newBook,
                          dateOfBorrow: value,
                        });
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      label="ReturnAt"
                      value={newBook.expectedDateOfReturn}
                      disabled={!update}
                      onChange={(value) => {
                        setBook({
                          ...newBook,
                          expectedDateOfReturn: value,
                        });
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
              </Box>
            </CardContent>
          </React.Fragment>
        </Card>
      </Box>
    </>
  );
};
