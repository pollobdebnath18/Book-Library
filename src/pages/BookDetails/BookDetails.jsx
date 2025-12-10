import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from '../../Utility/AddToDB'
const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);

  if (!singleBook) return <h2>Book Not Found</h2>;

  const { bookName, image, author, review } = singleBook;

  const handleMarkAsRead=(id)=>{
     addToStoredDB(id);
  }

  return (
    <div>
      <h1>{bookName}</h1>
      <img className="w-48" src={image} alt={bookName} />
      <h3>By: {author}</h3>
      <p>{review}</p>
      <button onClick={()=>handleMarkAsRead(id)} className="btn btn-outline mr-10">Mark as Read</button>
      <button className="btn btn-accent">Add to WishList</button>
    </div>
  );
};

export default BookDetails;
