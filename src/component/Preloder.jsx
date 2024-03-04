import "./Preloader.css";
import Loder from "../images/loder.png";

const Preloader = () => {
  return (
    <div className="preloader-container">
      <img src={Loder} alt="Loder" className="loder-img" />
    </div>
  );
};

export default Preloader;
