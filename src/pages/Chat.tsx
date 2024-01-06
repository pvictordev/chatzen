import { useState } from "react";
import { IoImagesOutline } from "react-icons/io5";
import { BsEmojiLaughing, BsPerson, BsReply } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { IoIosInformationCircle } from "react-icons/io";
import { ImFilesEmpty } from "react-icons/im";
import { FaRegUser } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import logo from "../assets/chatzen-icon.png";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Chat() {
  //switch between chat and sidebar
  const [showDialog, setShowDialog] = useState<boolean>(true);
  const handleDialog = (): void => {
    setShowDialog(!showDialog);
  };

  // show message actions
  const [showMessageActionsLeft, setShowMessageActionsLeft] =
    useState<boolean>(false);
  const [showMessageActionsRight, setShowMessageActionsRight] =
    useState<boolean>(false);

  return (
    <div className="chat w-full h-screen justify-center">
      <div className="chat-container flex">
        <div
          className={
            showDialog
              ? "container-sidebar w-96 h-screen max-md:hidden"
              : "container-sidebar w-full h-screen "
          }
        >
          <header className="siderbar-header flex justify-between p-3 border-y">
            <div className="header-logo flex items-center gap-x-2">
              <img className="w-8 h-8" src={logo} alt="" />
              <span className="font-medium text-2xl">Chatzen</span>
            </div>
            <div className="header-functionality flex items-center gap-x-5">
              <div className="header-functionality__light-mode">
                <ModeToggle />
              </div>
              <Dialog>
                <DialogTrigger className="flex justify-center">
                  <span className="w-10 h-10 text-2xl rounded-full flex items-center justify-center border-2 bg-slate-200 text-slate-900">
                    +
                  </span>
                </DialogTrigger>
                <DialogContent className="max-h-full">
                  <DialogHeader>
                    <DialogTitle className="border-b pb-2">
                      New Conversation
                    </DialogTitle>
                    <DialogDescription className="flex flex-col">
                      <div className="conversation-list h-80 overflow-y-scroll">
                        <div className="chat-item flex items-center gap-x-2 h-20 border-b">
                          <input type="checkbox" className="w-5 h-5" />
                          <div className="chat-item__profile">
                            <FaRegUser className="w-10 h-10 rounded-full border-2 border-black" />
                          </div>
                          <span className="text-xl">name</span>
                        </div>
                        <div className="chat-item flex items-center gap-x-2 h-20 border-b">
                          <input type="checkbox" className="w-5 h-5" />
                          <div className="chat-item__profile">
                            <FaRegUser className="w-10 h-10 rounded-full border-2 border-black" />
                          </div>
                          <span className="text-xl">name</span>
                        </div>
                      </div>
                      <Button className="mt-5">Start Conversation</Button>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              <Popover>
                <PopoverTrigger>
                  {" "}
                  <div className="header-profile">
                    {" "}
                    <img
                      src="https://icones.pro/wp-content/uploads/2021/05/symbole-de-l-homme-violet.png"
                      alt=""
                      className="w-10 h-10 rounded-full cursor-pointer"
                    />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="flex flex-col gap-y-3 text-lg">
                  <div className="flex items-center gap-x-1 ">
                    <BsPerson />
                    <span>Profile</span>
                  </div>
                  <div className="flex items-center gap-x-1 text-red-500">
                    <RxExit />
                    <span>Log out</span>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </header>
          <div
            className="siderbar-conversations overflow-y-scroll no-scrollbar"
            style={{ height: "calc(100% - 65.6px)" }}
          >
            <div className="conversation-container">
              <div
                className="conversation-block flex items-center border-b h-28 p-3 gap-x-2 hover:bg-slate-200 cursor-pointer"
                onClick={() => handleDialog()}
              >
                <div className="conversation-profile">
                  <img
                    src="https://icones.pro/wp-content/uploads/2021/05/symbole-de-l-homme-violet.png"
                    alt=""
                    className="w-16 h-16 rounded-full cursor-pointer"
                  />
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

        <div
          className={
            showDialog
              ? "container-chat flex-1 bg-slate-100 flex flex-col h-screen"
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
              {/* <FaRegUser className="w-10 h-10 rounded-full border-2 border-slate-900" /> */}
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
              <div className="message-left flex flex-row-reverse my-10 items-center justify-end relative round">
                <div
                  className="message-left__block flex items-center gap-x-3"
                  onMouseEnter={() => setShowMessageActionsLeft(true)}
                  onMouseLeave={() => setShowMessageActionsLeft(false)}
                >
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
                      <BsEmojiLaughing />
                    </div>
                    <div>
                      <BsReply />
                    </div>
                  </div>
                </div>
              </div>
              <div className="message-right flex flex-row-reverse my-10 items-center justify-start relative round">
                <div
                  className="message-right__block flex flex-row-reverse items-center gap-x-3"
                  onMouseEnter={() => setShowMessageActionsRight(true)}
                  onMouseLeave={() => setShowMessageActionsRight(false)}
                >
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
                      <BsReply />
                    </div>
                    <div>
                      <BsEmojiLaughing />
                    </div>
                    <div>
                      <FaRegTrashAlt />
                    </div>
                  </div>
                </div>
              </div>
              <div className="message-right flex flex-row-reverse my-10 items-center justify-start relative">
                <div className="message-right__block flex flex-row-reverse items-center gap-x-3">
                  <div className="message-left__text max-w-xl mr-8 relative shadow-lg">
                    <img
                      src="https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863"
                      alt=""
                      className="w-72 h-72 object-cover"
                    />
                  </div>
                  <div className="message-left-actions flex gap-x-3 text-slate-600">
                    <div>
                      <BsReply />
                    </div>
                    <div>
                      <BsEmojiLaughing />
                    </div>
                    <div>
                      <FaRegTrashAlt />
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
