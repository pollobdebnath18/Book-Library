// import { use} from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";
const Book = ({ singleBook }) => {
  // const data = use(bookPromise);
  console.log(singleBook);
  const {
    bookName,

    bookId,
    image,
    rating,
    category,
    tags,
    totalPages,
    publisher,
  } = singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm border p-4">
        <figure className="p-4 bg-slate-300 w-2/4 mx-auto">
          <img className="h-[170px] rounded-lg" src={image} alt="img" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-12">
            {tags.map((tag) => (
              <button key={tag}>{tag}</button>
            ))}
          </div>
          <div className="flex justify-around">
            <h2 className="card-title">{bookName}</h2>
            <div className="badge badge-secondary">{totalPages}</div>
          </div>
          <p className="pl-6">Book By : {publisher}</p>
          <p>A card component has a figure, a body part,</p>
          <div className="border-t-1 border-dashed"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating} <FaRegStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
