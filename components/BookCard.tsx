import Link from "next/link";
import React from "react";
import BookCover from "./BookCover";

const BookCard = ({
  id,
  title,
  genre,
  coverColor,
  coverUrl,
  isLoanedBook = false,
}: Book) => {
  return (
    <li>
      <Link href={`/books/${id}`}>
        <BookCover
          coverColor={coverColor}
          coverImage={coverUrl}
        //   variant="regular"
        //   className="mb-2"
        />
      </Link>
    </li>
  );
};

export default BookCard;
