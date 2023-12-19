import authImg from "../assets/scrolling.gif";
import zenImg from "../assets/meditation.png";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Auth() {
  return (
    <section className="auth w-full h-screen flex items-center">
      <div className="auth-container flex justify-center items-center">
        <div className="auth-gif">
          <img src={authImg} alt="" />
        </div>
        <div className="auth-text">
          <h1 className="text-4xl font-bold">
            The best place to enter The Zen{" "}
            <div className="inline">
              <img className="w-12 h-12" src={zenImg} alt="" />
            </div>
          </h1>
          <p>Free, fast, and fun — What more could you ask for?</p>
          <button>
            <Link to="/chat">
              <Button>
                Subscribe via Goggle <FaGoogle />
              </Button>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
