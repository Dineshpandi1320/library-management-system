import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Book } from "./Book";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
export function Books() {
  const navigate=useNavigate()
  const [booklist, setBooklist] = useState([]);
  const getbook = () => {
    fetch("https://63fc0e146deb8bdb814d8ed9.mockapi.io/book")
      .then((data) => data.json())
      .then((bok) => setBooklist(bok));
  };
  useEffect(() => getbook(), []);
  const deletebook=(id)=>{
    console.log("...deleting",id)
    fetch(`https://63fc0e146deb8bdb814d8ed9.mockapi.io/book/${id}`,{
      method:"DELETE",
    }).then(()=>getbook())
  }
  return (
    <div className="boks">
      {booklist.map((bok) => (<Book 
      key={bok.id} 
      id={bok.id} 
      book={bok} 
      deletebutton={<IconButton color="error" onClick={()=>deletebook(bok.id)}><DeleteIcon/></IconButton>}
      editbutton={<IconButton color="secondary" onClick={()=>navigate(`/book/edit/${bok.id}`)}><CreateIcon/></IconButton>}
       />))}

    </div>
  );
}