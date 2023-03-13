import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced'
import Header from "@/components/customHeader"
import StandardMessageForm from "@/components/customMessageForm/StandardMessageForm"
import Ai from '@/components/customMessageForm/Ai'
import AiCode from '@/components/customMessageForm/Ai'
import AiAssist from '@/components/customMessageForm/Ai'

const Chat = () => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "boris",
    "12345",
    
  )

  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={(props) => {
          if (chatProps.chat?.title.startsWith("AiChatBot")) {
            return <Ai props={props} activeChat={chatProps.chat} />;
          }
          if (chatProps.chat?.title.startsWith("AiCodex")) {
            return <AiCode props={props} activeChat={chatProps.chat} />;
          }
          if (chatProps.chat?.title.startsWith("AiAssistant")) {
            return <AiAssist props={props} activeChat={chatProps.chat} />;
          }

          return (
            <StandardMessageForm props={props} activeChat={chatProps.chat} />
          );
        }}
      />
    </div>
  );
};

export default Chat;