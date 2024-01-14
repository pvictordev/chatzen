import authImg from "../assets/scrolling.gif";
import zenImg from "../assets/meditation.png";
import github from "../assets/github.png";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Auth() {
  return (
    <section className="auth w-full h-screen flex items-center justify-center px-5 relative">
      <a href="https://github.com/pvictordev" target="_blank">
        <img
          className="w-10 h-10 absolute top-3 right-3"
          src={github}
          alt="github"
        />
      </a>
      <div className="header-functionality__light-mode absolute top-3 left-3  text-slate-500 p-1 cursor-pointer">
        <ModeToggle />
      </div>
      <div className="auth-container flex justify-center items-center text-primary max-md:flex-col ">
        <div className="auth-gif">
          <img src={authImg} alt="" />
        </div>
        <div className="auth-text flex flex-col items-start gap-y-5 max-w-lg ">
          <h1 className="text-4xl font-bold leading-tight">
            The best place to enter The Zen{" "}
            <span className="inline-flex items-center">
              <img className="w-12 h-12 inline" src={zenImg} alt="" />
            </span>
          </h1>
          <p className="font-light text-xl ">
            Free, Fast, and Fun — What more could you ask for?
          </p>
          <button>
            <Link to="/chat">
              <Button>
                <div className="flex items-center gap-x-1">
                  Subscribe via Goggle <FaGoogle />
                </div>
              </Button>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
