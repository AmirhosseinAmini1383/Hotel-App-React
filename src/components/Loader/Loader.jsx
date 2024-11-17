import { LoaderIcon } from "react-hot-toast";

function Loader() {
  return (
    <div className="loading-message">
      <p>Loading Data ...</p>
      <LoaderIcon
        style={{ width: "1.3rem", height: "1.3rem", color: "--primary-700" }}
      />
    </div>
  );
}

export default Loader;
