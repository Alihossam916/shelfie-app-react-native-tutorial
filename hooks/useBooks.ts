import { useContext } from "react";
import { booksContext } from "../contexts/booksContext";

export function useBooks(){
    const context = useContext(booksContext);

    if(!context){
        throw new Error("useBooks must be used within a BooksProvider");
    }

    return context;
}