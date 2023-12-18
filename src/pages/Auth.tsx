import authImg from "../assets/scrolling.gif";
import zenImg from "../assets/meditation.png";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

export default function Auth() {
  return (
    <section className="auth">
      <div className="auth-container">
        <div className="auth-gif">
          <img src={authImg} alt="" />
        </div>
        <div className="auth-text">
          <h1>
            The best place to enter The Zen{" "}
            <div>
              <img src={zenImg} alt="" />
            </div>
          </h1>
          <p>Free, fast, and fun — What more could you ask for?</p>
          <button>
            <Link to="/chat">
              Subscribe via Google <FaGoogle />{" "}
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
