import { IoImagesOutline } from "react-icons/io5";
import { BsEmojiLaughing } from "react-icons/bs"; //hover for emoji also
import { FiSend } from "react-icons/fi";
import { IoIosInformationCircle } from "react-icons/io";
// import { BsReply } from "react-icons/bs"; // hover for reply
// import { ImFilesEmpty } from "react-icons/im"; // hover for files popup
import { FaRegUser } from "react-icons/fa6"; // for header-profile popup profile
// import { RxExit } from "react-icons/rx"; //for header-profile popup signout
// import { IoMdClose } from "react-icons/io"; //for new conversation popup close
import logo from "../assets/chatzen-icon.png";

export default function Chat() {
  return (
    <div className="chat w-full h-screen justify-center">
      <div className="chat-container flex">
        <div className="container-sidebar w-96 h-screen">
          <header className="siderbar-header flex justify-between p-3 border-b-2">
            <div className="header-logo flex items-center gap-x-2">
              <img className="w-8 h-8" src={logo} alt="" />
              <span className="font-medium text-2xl">Chatzen</span>
            </div>
            <div className="header-functionality flex items-center gap-x-3">
              <span className="w-10 h-10 rounded-full flex items-center justify-center border-2 bg-slate-200 text-slate-900">
                +
              </span>
              <div className="header-profile">
                {" "}
                <FaRegUser className="w-10 h-10 rounded-full border-2 border-slate-900" />
              </div>
            </div>
          </header>
          <div className="siderbar-conversations">
            <div className="conversation-container">
              <div className="conversation-block flex items-center border-b-2 h-28 p-3 gap-x-2">
                <div className="conversation-profile">
                  <FaRegUser className="w-16 h-16 rounded-full border-2 border-slate-900" />
                </div>
                <div className="conversation-info flex flex-col">
                  <div>name</div>
                  <div className="flex gap-x-1 text-slate-500">
                    <span>message</span>
                    <span>•</span>
                    <span>12:30</span>
                  </div>
                </div>
              </div>
              <div className="conversation-block flex items-center border-b-2 h-28 p-3 gap-x-2">
                <div className="conversation-profile">
                  <FaRegUser className="w-16 h-16 rounded-full border-2 border-slate-900" />
                </div>
                <div className="conversation-info flex flex-col">
                  <div>name</div>
                  <div className="flex gap-x-1 text-slate-500">
                    <span>message</span>
                    <span>•</span>
                    <span>12:30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-chat flex-1 bg-slate-100 flex flex-col min-h-screen">
          <header className="chat-header flex justify-between items-center p-3 border-b-2">
            <div className="chat-profile flex items-center gap-x-2">
              <FaRegUser className="w-10 h-10 rounded-full border-2 border-slate-900" />
              <span className="font-medium">name</span>
            </div>
            <div className="chat-info">
              <IoIosInformationCircle className="w-6 h-6 text-slate-500" />
            </div>
          </header>

          <section className="chat-section">
            <div className="section-no-messages absolute top-1/2 right-1/3">
              No messages
              {/* <img src="" alt="" /> */}
            </div>
            {/* <div className="section__message">
              <div>message 1</div>
              <div>message 2</div>
            </div> */}
          </section>

          <div className="chat-message mt-auto w-full border-t-2">
            <div className="chat-message__container flex items-center gap-x-3 p-5">
              <div className="message-functionality flex gap-x-3 ">
                <div className="message-functionality__emoji">
                  <BsEmojiLaughing className="w-6 h-6 text-slate-500" />
                </div>
                <div className="message-functionality__attach">
                  <IoImagesOutline className="w-6 h-6 text-slate-500" />
                </div>
              </div>
              <input
                className="w-full outline-none text-lg px-3 py-1 rounded-2xl bg-slate-200"
                type="text"
                placeholder="Message..."
              />
              <button>
                <FiSend className="w-6 h-6 text-slate-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
