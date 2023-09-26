import {useFormik } from "formik";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
export function AddBook() {
  const navigate=useNavigate()
  const formValidationSchema=yup.object({
    image:yup.string().required().url(),
    name:yup.string().required(),
    author:yup.string().required(),
    rate:yup.string().required(),
    rating:yup.string().required(),
    discription:yup.string().required().min(50),
    available:yup.string().required(),
  })
  const {handleBlur,handleChange,handleSubmit,touched,errors,values}=useFormik({
initialValues:{
image:"",
name:"",
author:"",
rate:"",
rating:"",
discription:"",
available:""

},
validationSchema:formValidationSchema,
onSubmit:(newbook)=>{
  AddBook(newbook)
}})
const AddBook=async(newbook)=>{
  await fetch("https://63fc0e146deb8bdb814d8ed9.mockapi.io/book",{
    method:"POST",
    body:JSON.stringify(newbook),
  headers:{"Content-Type": "application/json",},
  })
  navigate("/books")
    }
  
  return (
    <form onSubmit={handleSubmit} className="add">
      <TextField
      id="outlined-basic" 
      label="image" 
      variant="outlined" 
      name="image"
      value={values.image}
       type="text" 
       onChange={handleChange} 
       onBlur={handleBlur}
       error={touched.image && errors.image}
      helperText={touched.image && errors.image?errors.image:null}
       />
       
      <TextField
      id="outlined-basic" 
      label="name" 
      variant="outlined" 
      name="name"
      value={values.name}
       type="text" 
      onChange={handleChange} 
       onBlur={handleBlur}
       error={touched.name && errors.name}
      helperText=   {touched.name && errors.name ? errors.name : null}
       />
      
      <TextField
      id="outlined-basic" 
      label="author" 
      variant="outlined" 
      name="author"
      value={values.author}
       type="text" 
        onChange={handleChange} 
       onBlur={handleBlur}
       error={touched.author && errors.author}
       helperText= {touched.author && errors.author ? errors.author : null}
       />
        
      <TextField
      id="outlined-basic" 
      label="rate" 
      variant="outlined" 
      name="rate"
      value={values.rate}
      onChange={handleChange} 
      onBlur={handleBlur}
      error={touched.rate && errors.rate}
      helperText=  {touched.rate && errors.rate ? errors.rate : null}
      />
      
      <TextField
      id="outlined-basic" 
      label="rating" 
      variant="outlined" 
      name="rating"
      value={values.rating}
       type="text" 
      onChange={handleChange} 
       onBlur={handleBlur}
       error={touched.rating && errors.rating}
      helperText={touched.rating && errors.rating ? errors.rating : null}
       />
         
      <TextField
      id="outlined-basic" 
      label="discription" 
      variant="outlined" 
      name="discription"
      value={values.discription}
       type="text" 
       
       onChange={handleChange} 
       onBlur={handleBlur}
       error={touched.discription && errors.discription }
       helperText=    {touched.discription && errors.discription ? errors.discription : null}
       />
     
      <TextField
      id="outlined-basic" 
      label="available" 
      variant="outlined" 
      name="available"
      value={values.available}
       type="text" 
             onChange={handleChange} 
       onBlur={handleBlur}
       error={touched.available && errors.available}
      helperText={touched.available && errors.available ? errors.available : null}
      />
      
      <Button variant="contained" color="primary" type="submit">Add Book</Button>
    </form>
  );
}