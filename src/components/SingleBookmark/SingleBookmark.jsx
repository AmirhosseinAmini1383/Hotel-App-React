import { useParams } from "react-router-dom";
import { useBookmark } from "../context/BookmarkListContext";
import { useEffect } from "react";
import Loader from "../Loader/Loader";

function SingleBookmark() {
  const { id } = useParams();
  const { getSingleBookmarks, currentBookmark, isLoadingCurrentBookmark } =
    useBookmark();
  useEffect(() => {
    getSingleBookmarks(id);
  }, [id]);
  if (isLoadingCurrentBookmark || !currentBookmark) return <Loader />;
  return <div>SingleBookmark</div>;
}

export default SingleBookmark;
