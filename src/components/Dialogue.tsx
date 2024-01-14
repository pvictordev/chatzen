import { IoImagesOutline } from "react-icons/io5";
import { BsEmojiLaughing, BsReply } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { IoIosInformationCircle } from "react-icons/io";
import { ImFilesEmpty } from "react-icons/im";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTheme } from "./ui/theme-provider";

interface DialogueProps {
  showDialog: boolean;
  handleDialog: () => void;
  setShowMessageActionsRight: (value: boolean) => void;
  setShowMessageActionsLeft: (value: boolean) => void;
  setShowImageActionsRight: (value: boolean) => void;
  showImageActionsRight: boolean;
  showMessageActionsRight: boolean;
  showMessageActionsLeft: boolean;
}

export default function Dialogue({
  showDialog,
  handleDialog,
  setShowMessageActionsRight,
  setShowMessageActionsLeft,
  setShowImageActionsRight,
  showImageActionsRight,
  showMessageActionsRight,
  showMessageActionsLeft,
}: DialogueProps) {
  const { theme } = useTheme();

  return (
    <div
      className={
        showDialog
          ? `container-chat flex-1 ${
              theme === "dark" ? "bg-customDarkChat" : "bg-slate-100"
            } flex flex-col h-screen`
          : "container-chat bg-slate-100 h-screen hidden"
      }
    >
      <header className="chat-header flex justify-between items-center p-3 border-b-2">
        <div className="chat-profile flex items-center gap-x-2">
          <div>
            <MdOutlineKeyboardArrowLeft
              className="w-10 h-10 text-appColor cursor-pointer md:hidden"
              onClick={() => handleDialog()}
            />
          </div>

          <img
            src="https://icones.pro/wp-content/uploads/2021/05/symbole-de-l-homme-violet.png"
            alt=""
            className="w-10 h-10 rounded-full cursor-pointer"
          />
          <span className="font-medium">name</span>
        </div>
        <div className="chat-info">
          <Dialog>
            <DialogTrigger className="flex justify-center">
              <IoIosInformationCircle className="w-6 h-6 text-slate-500" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="border-b mb-2 pb-2">
                  Conversation settings
                </DialogTitle>
                <DialogDescription>
                  <div className="flex items-center gap-x-1">
                    <ImFilesEmpty />
                    <span>View Files</span>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <section
        className="chat-section flex flex-col-reverse justify-end"
        style={{ height: "calc(100% - 143px)" }}
      >
        {/* <div className="section-no-messages flex flex-col items-center gap-y-4">
              <img
                src="https://booru.vineshroom.net/_images/ed0495e29c1296c6cb74e1e4bcf770b0/95138%20-%20animated%20artist%3AMagnetismMelodic%20chat%20gif%20goblin%20goblinsauce%20streamer%3Avinny.gif"
                className="w-50 h-48"
                alt=""
              />
              <span className="text-slate-500">
                No message recently, start chatting now
              </span>
            </div> */}
        <div className="section-message overflow-y-scroll no-scrollbar">
          <div
            className="message-left flex flex-row-reverse my-10 items-center justify-end relative round"
            onMouseEnter={() => setShowMessageActionsLeft(true)}
            onMouseLeave={() => setShowMessageActionsLeft(false)}
          >
            <div className="message-left__block flex items-center gap-x-3">
              <div className="message-left__text p-3 max-w-xl ml-8 relative rounded-left bg-white shadow-lg">
                <span className="text-black">message left</span>
              </div>
              <div
                className={
                  showMessageActionsLeft
                    ? "message-left-actions gap-x-3 text-slate-600 flex"
                    : "hidden"
                }
              >
                <div>
                  <BsEmojiLaughing className="cursor-pointer" />
                </div>
                <div>
                  <BsReply className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="message-right flex flex-row-reverse my-10 items-center justify-start relative round"
            onMouseEnter={() => setShowMessageActionsRight(true)}
            onMouseLeave={() => setShowMessageActionsRight(false)}
          >
            <div className="message-right__block flex flex-row-reverse items-center gap-x-3">
              <div className="message-left__text p-3 max-w-xl mr-8 relative rounded-right bg-appColor shadow-lg">
                <span className="text-white">message right</span>
              </div>
              <div
                className={
                  showMessageActionsRight
                    ? "message-left-actions gap-x-3 text-slate-600 flex"
                    : "hidden"
                }
              >
                <div>
                  <BsReply className="cursor-pointer" />
                </div>
                <div>
                  <BsEmojiLaughing className="cursor-pointer" />
                </div>
                <div>
                  <FaRegTrashAlt className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="message-right flex flex-row-reverse my-10 items-center justify-start relative"
            onMouseEnter={() => setShowImageActionsRight(true)}
            onMouseLeave={() => setShowImageActionsRight(false)}
          >
            <div className="message-right__block flex flex-row-reverse items-center gap-x-3">
              <div className="message-left__text max-w-xl mr-8 relative shadow-lg">
                <img
                  src="https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863"
                  alt=""
                  className="w-72 h-72 object-cover"
                />
              </div>
              <div
                className={
                  showImageActionsRight
                    ? "message-left-actions gap-x-3 text-slate-600 flex"
                    : "hidden"
                }
              >
                <div>
                  <BsReply className="cursor-pointer" />
                </div>
                <div>
                  <BsEmojiLaughing className="cursor-pointer" />
                </div>
                <div>
                  <FaRegTrashAlt className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
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
            className={`w-full outline-none text-lg px-3 py-1 rounded-2xl ${
              theme === "dark" ? "bg-slate-500" : "bg-slate-200"
            }`}
            type="text"
            placeholder="Message..."
          />
          <button>
            <FiSend className="w-6 h-6 text-slate-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
