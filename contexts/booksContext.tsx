import React, { createContext, useEffect, useState } from "react";
import { databases } from "../lib/appwrite";
import { ID, Models, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

interface BookInput {
  title: string;
  description: string;
  author: string;
}

export type Book = Models.Document & BookInput;

interface BooksContenxtProps {
  books: Book[];
  fetchBooks: () => Promise<void>;
  fetchBookById: (id: string) => Promise<void>;
  createBook: (data: BookInput) => Promise<void>;
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
  const [books, setBooks] = useState<Book[]>([]);
  const { user } = useUser();

  async function fetchBooks() {
    try {
      if (!user?.$id) {
        throw new Error("You must be logged in to create a book");
      }

      const response = await databases.listDocuments<Book>(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.equal("userId", user?.$id)],
      );

      setBooks(response.documents);
      console.log(response.documents);
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

  async function createBook(data: BookInput) {
    try {
      if (!user?.$id) {
        throw new Error("You must be logged in to create a book");
      }

      const newBook = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        { ...data, userId: user?.$id },
        [
          Permission.read(Role.user(user?.$id)),
          Permission.update(Role.user(user?.$id)),
          Permission.delete(Role.user(user?.$id)),
        ],
      );
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

  useEffect(() => {

    if (user) {
      fetchBooks();
    } else {
      setBooks([]);
    }
    
  }, [user]);

  return (
    <booksContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </booksContext.Provider>
  );
}
