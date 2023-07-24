import { IMessage } from "../interface/chat";
type messageType = {
  message: IMessage;
};
const Message = ({ message }: messageType) => {
  return (
    <div
      className={`w-full h-fit ${
        message.user === "bot" ? "justify-start" : "justify-end"
      } text-neutral-200  flex`}
    >
      {message.user}: {message.prompt}
    </div>
  );
};

export default Message;
