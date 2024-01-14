import { BsPerson } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { RxExit } from "react-icons/rx";
import logo from "../assets/chatzen-icon.png";
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
import { useTheme } from "./ui/theme-provider";

interface SidebarProps {
  showDialog: boolean;
  handleDialog: () => void;
}

export default function Sidebar({ showDialog, handleDialog }: SidebarProps) {
  const { theme } = useTheme();

  return (
    <div
      className={
        showDialog
          ? "container-sidebar w-96 h-screen max-md:hidden"
          : "container-sidebar w-full h-screen"
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
            className={`conversation-block flex items-center border-b h-28 p-3 gap-x-2 cursor-pointer ${
              theme === "dark" ? "hover:bg-slate-900" : "hover:bg-slate-200"
            }`}
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
  );
}
