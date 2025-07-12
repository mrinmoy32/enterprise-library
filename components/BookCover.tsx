import React from "react";
import { cn } from "@/lib/utils";

type BookCoverVarient = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<BookCoverVarient, string> = {
  extraSmall: "book-cover-extra-small",
  small: "book-cover-small",
  medium: "book-cover-medium",
  regular: "book-cover-regular",
  wide: "book-cover-wide",
};

interface Props {
  className?: string;
  variant?: BookCoverVarient;
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
        variantStyles[variant]
      )}
    ></div>
  );
};

export default BookCover;
