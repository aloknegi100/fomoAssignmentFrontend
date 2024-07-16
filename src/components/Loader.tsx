import "./Loader.css";
import loaderIcon from "../assets/Loaders.svg";
const Loader = () => {
  return (
    <div className="loader">
      <img src={loaderIcon} alt="Loading..." className="loader-icon" />
      <p className="loader-text">Loading...</p>
    </div>
  );
};
 
export default Loader;