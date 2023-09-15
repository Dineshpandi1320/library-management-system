import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

export const BookDetails = ({ data, editIcon, deleteIcon }) => {
  return (
    <div>
      <Card className="book-details">
        <CardHeader id="card-header" title={data.title} />
        <CardContent id="card-content">
          <p>Author : {data.author}</p>
          <p>ISBN : {data.ISBN}</p>
          <p>publicationDate : {data.publicationDate}</p>
          <p>edition : {data.edition}</p>
          <p>publisher : {data.publisher}</p>
          <p>genre : {data.genre}</p>
        </CardContent>
        <CardActions className="edit-delete">
          {editIcon} {deleteIcon}
        </CardActions>
      </Card>
    </div>
  );
};