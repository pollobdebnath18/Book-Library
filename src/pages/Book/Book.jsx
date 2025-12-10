// import { use} from 'react';
import { FaRegStar } from "react-icons/fa";
const Book = ({ singleBook }) => {
  // const data = use(bookPromise);
   console.log(singleBook)
   const {bookName,author,bookId,image,rating,category}=singleBook;


  return (
    <div className="card bg-base-100 w-96 shadow-sm border p-4">
      <figure className="p-4 bg-slate-300 w-2/4 mx-auto">
        <img className="h-[170px] rounded-lg"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">{rating} <span><FaRegStar /></span></div>
        </div>
      </div>
    </div>
  );
};

export default Book;
