import { createContext, useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import toast from "react-hot-toast";

const BookmarkContext = createContext();
const BASE_URL = "http://localhost:5000/bookmarks";
function BookmarkListProvider({ children }) {
  const [currentBookmark, setCurrentBookmark] = useState(null);
  const [isLoadingCurrentBookmark, setIsLoadingCurrentBookmark] =
    useState(false);
  const { data: bookmarks, isLoading } = useFetch(`${BASE_URL}`);

  async function getSingleBookmarks(id) {
    setIsLoadingCurrentBookmark(true);
    try {
      const { data } = await axios.get(`${BASE_URL}/${id}`);
      setCurrentBookmark(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoadingCurrentBookmark(false);
    }
  }

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        isLoading,
        getSingleBookmarks,
        currentBookmark,
        isLoadingCurrentBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}
export default BookmarkListProvider;

export function useBookmark() {
  return useContext(BookmarkContext);
}
