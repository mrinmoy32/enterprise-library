import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import BookCoverSvg from "./BookCoverSvg";

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
  extraSmall: "book-cover-extra-small",
  small: "book-cover-small",
  medium: "book-cover-medium",
  regular: "book-cover-regular",
  wide: "book-cover-wide",
};

interface Props {
  className?: string;
  variant?: BookCoverVariant;
  coverColor: string;
  coverImage: string;
}

const BookCover = ({
  className,
  variant = "regular",
  coverColor = "#012B48",
  coverImage = "https://placehold.co/400x600.png",
}: Props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        className
      )}
    >
      <BookCoverSvg coverColor={coverColor} />Book
      <div
        className="absolute z-10"
        style={{ left: "12%", width: "87.5%", height: "88%" }}
      >
        <Image
          src={coverImage}
          alt="Book Cover"
          fill
          className="rounded-sm object-fill"
        />
      </div>
    </div>
  );
};

export default BookCover;
