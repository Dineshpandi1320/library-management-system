import "./App.css";
import { Home } from "./Dash";
import { Routes, Route, useNavigate } from "react-router-dom"
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import { Books } from "./Books";
import { BorrowedList } from "./BorrowedList";
import { AddBook } from "./AddBook";
import { EditBook } from "./EditBook";
import { BookDetails } from "./BookDetails";

export default function App(){
  const navigate=useNavigate()
  return(
    <div>
       <AppBar position="static">
       <Toolbar>
       <Button onClick={()=>navigate("/")} color="inherit">HOME</Button>
       <Button onClick={()=>navigate("/books")}  color="inherit">BOOKS</Button>
       <Button onClick={()=>navigate("/addbook")}  color="inherit">ADD BOOK</Button>
       </Toolbar>
       </AppBar>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/books" element={ <Books/> } />
        <Route path="/borrowedlist" element={ < BorrowedList/> } />
        <Route path="/addbook" element={ < AddBook/> } />
        <Route path="/book/edit/:id" element={ < EditBook/> } />
        <Route path="/book-details/:id" element={ <BookDetails/> } />
      </Routes>
     
    </div>
  );
}