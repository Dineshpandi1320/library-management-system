import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  title: yup.string().required(),
  author: yup.string().required(),
  ISBN: yup
    .string()
    .required()
    .matches(/^[0-9]{3}-[0-9]{10}$/, "Invalid ISBN format"),
  publicationDate: yup.date().required("MM/DD/YYYY"),
  edition: yup.string().required(),
  publisher: yup.string().required(),
  genre: yup.string().required(),
});

export const EditBook = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data))
      .catch((error) => console.log(error));
  }, [id]);
  return book ? <EditBookForm data={book} /> : <h1>loading...</h1>;
};

const EditBookForm = ({ data }) => {
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        title: data.title,
        author: data.author,
        ISBN: data.ISBN,
        publicationDate: data.publicationDate,
        edition: data.edition,
        publisher: data.publisher,
        genre: data.genre,
      },
      validationSchema: formValidationSchema,
      onSubmit: (updatebook) => {
        updateBook(updatebook);
      },
    });
  const updateBook = async (updatebook) => {
    await fetch(`https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(updatebook),
      headers: { "Content-Type": "application/json" },
    });

    navigate("/books");
  };
  return (
    <div>
      <form className="book-submit" onSubmit={handleSubmit}>
        <h3>Update Book Carefully !!</h3>
        <TextField
          name="title"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.title}
          label="Name"
          variant="outlined"
          error={touched.title && errors.title}
          helperText={touched.title && errors.title ? errors.title : null}
        />

        <TextField
          name="author"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.author}
          label="Author"
          variant="outlined"
          error={touched.author && errors.author}
          helperText={touched.author && errors.author ? errors.author : null}
        />
        <TextField
          name="ISBN"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.ISBN}
          label="ISBN"
          variant="outlined"
          error={touched.ISBN && errors.ISBN}
          helperText={touched.ISBN && errors.ISBN ? errors.ISBN : null}
        />
        <TextField
          name="publicationDate"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.publicationDate}
          label="Publication Date"
          variant="outlined"
          error={touched.publicationDate && errors.publicationDate}
          helperText={
            touched.publicationDate && errors.publicationDate
              ? errors.publicationDate
              : null
          }
        />
        <TextField
          name="edition"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.edition}
          label="Edition"
          variant="outlined"
          error={touched.edition && errors.edition}
          helperText={touched.edition && errors.edition ? errors.edition : null}
        />
        <TextField
          name="publisher"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.publisher}
          label="Publisher"
          variant="outlined"
          error={touched.publisher && errors.publisher}
          helperText={
            touched.publisher && errors.publisher ? errors.publisher : null
          }
        />
        <TextField
          name="genre"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.genre}
          label="Genre"
          variant="outlined"
          error={touched.genre && errors.genre}
          helperText={touched.genre && errors.genre ? errors.genre : null}
        />
        <Button color="success" variant="contained" type="submit">
          Update Book
        </Button>
      </form>
    </div>
  );
};