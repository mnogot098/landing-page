import player from "../assests/bg.png";
import "./Main.css";
const Main = () => {
  return (
    <div className="main">
      <div className="left">
        <h1 className="first">RUNNING SPORT</h1>
        <h1>LANDING PAGE</h1>
        <p>
          Welcome to E_Sports your ultimate destination for sports excellence!
          We're committed to elevating your athletic journey with innovative
          solutions and a passion for performance. Join us in redefining the
          game!
        </p>
        <button>
          Explore
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="right">
        <img src={player} alt="Shoes" />
      </div>
    </div>
  );
};

export default Main;
