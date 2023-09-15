import "./App.css";
import { BooksList } from "./BooksList";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { AddBook } from "./AddBook";
import { Button } from "@mui/material";
import { EditBook } from "./EditBook";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="secondary" position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
                id="instituite-name"
              >
                <ImportContactsIcon /> Library Management
              </div>
            </Typography>

            <Button onClick={() => navigate("/Books")} color="inherit">
              Books
            </Button>
            <Button onClick={() => navigate("/addbook")} color="inherit">
              Addbook
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BooksList />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/addbook" element={<AddBook />} />
      </Routes>
    </div>
  );
}
export default App;
