import { IoImagesOutline } from "react-icons/io5";
import { BsEmojiLaughing } from "react-icons/bs"; //hover for emoji also
import { FiSend } from "react-icons/fi";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosInformationCircle } from "react-icons/io";
import { BsReply } from "react-icons/bs"; // hover for reply
import { ImFilesEmpty } from "react-icons/im"; // hover for files popup
import { FaRegUser } from "react-icons/fa6"; // for header-profile popup profile
import { RxExit } from "react-icons/rx"; //for header-profile popup signout

export default function Chat() {
  return (
    <div className="chat">
      <div className="chat-container">
        <div className="container-sidebar">
          <header className="siderbar-header">
            <div className="header-logo">Chatzen</div>
            <div className="header-add">
              <CiCirclePlus />
            </div>
            <div className="header-profile">your profile img</div>
          </header>
          <div className="siderbar-conversations">
            <div className="conversation-container">
              <div className="conversation">
                <div className="conversation-profile">image</div>
                <div className="conversation-info">
                  <div>name</div>
                  <span>message</span> <span>12:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-chat">
          <header className="chat-header">
            <div className="chat-profile">your profile img + nickName</div>
            <div className="chat-info">
              <IoIosInformationCircle />
            </div>
          </header>

          <section className="chat-section">
            <div className="section__message">
              <div>message 1</div>
              <div>message 2</div>
            </div>
          </section>

          <div className="chat-message">
            <div className="chat-message__container">
              <div className="message-functionality">
                <div className="message-functionality__emoji">
                  <BsEmojiLaughing />
                </div>
                <div className="message-functionality__attach">
                  <IoImagesOutline />
                </div>
              </div>
              <input type="text" placeholder="Type a message" />
              <button>
                <FiSend />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
