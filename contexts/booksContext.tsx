import React, { createContext, useState } from "react";

interface BooksProps {
  id: string;
  title: string;
  description: string;
  auther: string;
}

interface BooksContenxtProps {
  books: BooksProps | [];
  fetchBooks: () => Promise<void>;
  fetchBookById: (id: string) => Promise<void>;
  createBook: (data: BooksProps) => Promise<void>;
  deleteBook: (id: string) => Promise<void>;
}

const defaultValues: BooksContenxtProps = {
  books: [],
  fetchBooks: async () => {},
  fetchBookById: async () => {},
  createBook: async () => {},
  deleteBook: async () => {},
};

const DATABASE_ID = "6ac7bd6c0033a5a50c30";
const COLLECTION_ID = "6ac7bd89001a6f3b5c4b";

export const booksContext = createContext(defaultValues);

export function BooksProvider({ children }: { children: React.ReactNode }) {
  const [books, setBooks] = useState<BooksProps | []>([]);

  async function fetchBooks() {
    try {
    } catch (error: any) {
      console.error(error.message);
    }
  }

  async function fetchBookById(id: string) {
    try {
    } catch (error: any) {
      console.error(error.message);
    }
  }

  async function createBook(data: BooksProps) {
    try {
    } catch (error: any) {
      console.error(error.message);
    }
  }

  async function deleteBook(id: string | number) {
    try {
    } catch (error: any) {
      console.error(error.message);
    }
  }

  return (
    <booksContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </booksContext.Provider>
  );
}
