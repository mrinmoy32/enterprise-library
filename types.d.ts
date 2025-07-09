interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    cover: string;
    description: string;
    available_copies: number;
    total_copies: number;
    rating: number;
    color: string;
    video: string;
    summary: string;
    isLoanded?: boolean;
}