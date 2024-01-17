import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Dialogue from "@/components/Dialogue";

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
  const [showImageActionsRight, setShowImageActionsRight] =
    useState<boolean>(false);

  return (
    <div className="chat w-full h-screen justify-center">
      <div className="chat-container flex">
        <Sidebar
          showDialog={showDialog}
          setShowDialog={setShowDialog}
          handleDialog={handleDialog}
        />

        <Dialogue
          showDialog={showDialog}
          handleDialog={handleDialog}
          setShowMessageActionsRight={setShowMessageActionsRight}
          setShowImageActionsRight={setShowImageActionsRight}
          setShowMessageActionsLeft={setShowMessageActionsLeft}
          showMessageActionsLeft={showMessageActionsLeft}
          showMessageActionsRight={showMessageActionsRight}
          showImageActionsRight={showImageActionsRight}
        />
      </div>
    </div>
  );
}
