import React from "react";
import Image from "next/image";

const BookOverview = ({
  title,
  author,
  cover,
  description,
  available_copies,
  total_copies,
  rating,
  color,
  video,
  summary,
  id,
  genre,
}: Book) => {
  return (
    <section className="book-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1>{title}</h1>
        <div className="book-info">
          <p>
            By <span className="font-semibold text-light-200">{author}</span>
          </p>
          <p>
            Category <span className="font-semibold text-light-200">{genre}</span>
          </p>
          <div className="flex flex-row gap-1">
            <Image src="/icons/star.svg" alt="star" height={22} width={22}/>
            <p>{rating}</p>
          </div>
        </div>
        <div className="book-copies">
          <p>
            Total Books:{" "} <span>{total_copies}</span>
          </p>
          <p>
            Available Books:{" "} <span>{available_copies}</span>
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default BookOverview;
