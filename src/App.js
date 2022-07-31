import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import RouterOutlet from "./components/router-outlet/router-outlet";
import SideBar from "./components/sidebar/sidebar";
import React from "react";
import { store } from "./state/store";
import Students from "./components/students/students";
import Books from "./components/books/books";
import BookDetail from "./components/books/bookDetail/bookDetail";
import StudentDetail from "./components/students/studentDetail/studentDetail";

function App() {
  return (
    <>
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <CssBaseline />
              <Navbar />
              <SideBar />
              <RouterOutlet>
                <Routes>
                  <Route path="/students" element={<Students />} />
                  <Route path="/books" element={<Books />} />
                  <Route path="/books/:id" element={<BookDetail />} />
                  <Route path="/students/:id" element={<StudentDetail />} />
                  <Route
                    path="/"
                    element={<Navigate replace to="/students" />}
                  />
                </Routes>
              </RouterOutlet>
            </Box>
          </Router>
        </Provider>
      </React.StrictMode>
    </>
  );
}

export default App;
