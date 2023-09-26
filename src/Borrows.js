import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export function Borrows({ borrow }) {

  return (
    <div>
      <Card className="borrows">
       
        <CardContent>
          <p className="ca">{borrow.name}</p>
          <p className="ca">BY : {borrow.author}</p>
          <p className="ca">Borrower : {borrow.borrower}</p>
          <p className="ca">Return : {borrow.return}</p>
          <p className="ca">{borrow.rating}</p>
        </CardContent>
      </Card>
    </div>
  );
}