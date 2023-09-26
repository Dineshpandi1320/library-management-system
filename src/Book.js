import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
export function Book({ book,deletebutton,id,editbutton }) {
const navigate=useNavigate()
  return (
    <Card className="book">
      
      <CardContent>
        <div className='div'><p className="ca">{book.name}</p><IconButton color="primary" onClick={()=>navigate(`/book-details/${id}`)}><InfoIcon/></IconButton></div>
        <p className="ca">BY : {book.author}</p>
        <p className="ca">{book.rating}</p>{deletebutton}{editbutton}
      </CardContent>
    </Card>
  );
}