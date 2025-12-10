import { Suspense, useState } from "react";
import Book from "./../Book/Book";

const Books = ({ data }) => {
  const [books, setBooks] = useState([]);

  //data load system-1 using useEffect
  // useEffect(()=>{
  //     fetch("BookData.json")
  //     .then(res=>res.json())
  //     .then(data=>console.log(data))

  // },[])

  //data load system-2 using suspense
  // const bookPromise = fetch("./BookData.json").then((res) => res.json());

  // data load system-3 [ Routes.jsx ---> loader]
  return (
    <div>
      <h2 className="text-3xl p-6 text-center">Books</h2>
      <Suspense fallback={<span>Loading ...</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11">
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
