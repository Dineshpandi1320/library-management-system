import { useNavigate, useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useEffect} from "react";
import {useState} from "react";


export function BookDetails() {
  const navigate=useNavigate()
  const { id } = useParams();
  //const data = obj[id];
  const [Book, setBook] = useState({});
  
 
  const getbook=()=>{
    fetch(`https://63fc0e146deb8bdb814d8ed9.mockapi.io/book/${id}`)
    .then((data)=>data.json())
    .then((use)=>setBook(use))
   }
  useEffect(()=>getbook())
  
  
  return (
    <div>
      <Card className="fl">
      
    <div className="detail">
   
      <p>{Book.name}</p>
      <p>BY : {Book.author}</p>
      <p>Rate : 💲{Book.rate}</p></div>
      <div>
        <h2>About The Book</h2>
      <p>{Book.discription}</p>
      <div  className="sp">
      <p>rating: </p>
      <p>{Book.rating}</p>
      </div>
      <div   className="sp">
      <p>Available Books : </p>
      <p>{Book.available}</p>
      </div>
     </div></Card>
     <Button startIcon={<ArrowBackIcon />} color="primary" variant="contained" onClick={()=>navigate(-1)}>back</Button>
    </div>
  );
}