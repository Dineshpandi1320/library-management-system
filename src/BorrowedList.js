import { Borrows } from "./Borrows";
import SouthIcon from '@mui/icons-material/South';
import IconButton from '@mui/material/IconButton';
export function BorrowedList() {
  const borrowlist = [{
    "image": "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/194/9781612680194.jpg",
    "name": "Rich Dad Poor Dad",
    "author": "Robert T Kiyosaki ",
    "rating": "⭐⭐⭐⭐⭐",
    "borrower": "ruby",
    "return": "12/20/2022"
  },
  {
    "image": "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/368/9781501110368.jpg",
    "name": "It Ends with Us",
    "author": " Colleen Hoover",

    "rating": "⭐⭐⭐⭐",
    "borrower": "maby",
    "return": "21/20/2022"
  },
  {
    "image": "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/895/9781786330895.jpg",
    "name": "Ikigai",
    "author": " Francesc Miralles",

    "rating": "⭐⭐⭐⭐⭐",
    "borrower": "john",
    "return": "12/09/2023"
  },
  {
    "image": "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/126/9780143452126.jpg",
    "name": "Do It Today",
    "author": "Foroux, Darius ",

    "rating": "⭐⭐⭐",
    "borrower": "mohan",
    "return": "12/20/2023"
  },
  {
    "image": "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/268/9789390166268.jpg",
    "name": "The Psychology of Money",
    "author": "Morgan Housel ",

    "rating": "⭐⭐⭐⭐⭐",
    "borrower": "maha",
    "return": "12/2/2022"
  },
  {
    "image": "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/831/9781847941831.jpg",
    "name": "Atomic Habits",
    "author": "James Clear",

    "rating": "⭐⭐⭐",
    "borrower": "raj",
    "return": "9/20/2022"
  }];
  return (
    <div>
     <div className="sp"> <h1 className="h">Borrowed Books</h1><IconButton color="primary"><SouthIcon/></IconButton></div>
      <div className="boks">
     
     {borrowlist.map((list) => <Borrows borrow={list} />)}

   </div>
    </div>
    
  );
}