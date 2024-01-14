import { BsEmojiLaughing, BsReply } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";

export default function MessageRight({
  setShowMessageActionsRight,
  showMessageActionsRight,
}: {
  setShowMessageActionsRight: (show: boolean) => void;
  showMessageActionsRight: boolean;
}) {
  return (
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
  );
}
