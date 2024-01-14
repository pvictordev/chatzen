import { BsEmojiLaughing, BsReply } from "react-icons/bs";

export default function MessageLeft({
  setShowMessageActionsLeft,
  showMessageActionsLeft,
}: {
  setShowMessageActionsLeft: (show: boolean) => void;
  showMessageActionsLeft: boolean;
}) {
  return (
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
  );
}
