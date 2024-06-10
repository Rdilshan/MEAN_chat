import { useEffect, useState } from "react";
import { Joinstore, getlinkstore, useStore, useConversationStore } from "./store.ts";
import axios from "axios";
import { format, isToday, isYesterday } from 'date-fns';

interface Chat {
  chatid: string;
  createdAt: string;
  message: string;
  sender: string;
  __v: number;
  _id: string;
}
export default function Conversation() {
  const store = useStore();
  const [chatlist, setChatlist] = useState<Chat[]>([]);
  const linkstore = getlinkstore();
  const joinstore = Joinstore();
  const conversationID = useConversationStore();
  const chatuser = conversationID.user;
  const [textValue, setTextValue] = useState('');

  function viewmember() {
    store.setvisble(true);
  }

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(event.target.value);
  };


  const sendmsg = () => {
    sendmsgbackend()
    console.log(textValue)
    const newMessage: Chat = {
      chatid: "some-chat-id",
      createdAt: new Date().toISOString(),
      message: textValue,
      sender: "sadfsdfsdf",
      __v: 0,
      _id: "some-id"
    };
    setChatlist(prevChatlist => [...prevChatlist, newMessage]);
    setTextValue("");
}

const handleEnterKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
  if (event.key === 'Enter') {
    sendmsg();
  }
};

const sendmsgbackend = async()=>{
  const response = await axios.post(
    'https://mean-chat-backend.vercel.app/api/msg/create',
    { msg: textValue,who:chatuser._id },
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );
  console.log(response)
}


const Getmsg = async (id: string) => {
  try {
    const response = await axios.post(
      'https://mean-chat-backend.vercel.app/api/msg/get',
      { refid: id },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    const data = response.data;
    setChatlist(data.messages);

  } catch (error) {
    console.error('Error sending data:', error);
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  if (isToday(date)) {
    return 'Today';
  } else if (isYesterday(date)) {
    return 'Yesterday';
  } else {
    return format(date, 'yyyy-MM-dd HH:mm');
  }
};


useEffect(() => {
  setChatlist([])
  const intervalId = setInterval(() => {
    Getmsg(chatuser._id);
  }, 100);

  // Cleanup function to clear the interval on component unmount
  return () => {
    clearInterval(intervalId);
  };
}, [chatuser._id,]);

return (
  <>
    <div
      className={`col-sm-8 conversation 
        ${linkstore.visble === false ? "hide" : ""}
        ${joinstore.visble === false ? "hide" : ""}`
      }
    >
      <div className="row heading">
        <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar mobileflex">
          <i
            className="fa  fa-2x  fa-angle-left backicon"
            aria-hidden="true"
            onClick={() => {
              viewmember();
            }}
          ></i>
          <div className="heading-avatar-icon">
            <img src={chatuser.profilepic} />
          </div>
        </div>
        <div className="col-sm-8 col-xs-7 heading-name">
          <a className="heading-name-meta">{chatuser.name}</a>
          <span>Online</span>
        </div>
        <div className="col-sm-1 col-xs-1  heading-dot pull-right">
          <i
            className="fa fa-ellipsis-v fa-2x  pull-right"
            aria-hidden="true"
          ></i>
        </div>
      </div>

      <div className="row message" id="conversation">
        <div className="row message-previous">
          <div className="col-sm-12 previous">
            <a id="ankitjain28">Show Previous Message!</a>
          </div>
        </div>
        {chatlist.map(chat => (
          chat.sender == chatuser._id ? (
            <div className="row message-body" key={chat._id}>
              <div className="col-sm-12 message-main-receiver">
                <div className="receiver">
                  <div className="message-text">{chat.message}</div>
                  <span className="message-time pull-right">{formatDate(chat.createdAt)}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="row message-body" key={chat._id}>
              <div className="col-sm-12 message-main-sender">
                <div className="sender">
                  <div className="message-text">{chat.message}</div>
                  <span className="message-time pull-right">{formatDate(chat.createdAt)}</span>
                </div>
              </div>
            </div>
          )
        ))}

      </div>

      <div className="row reply" >
        <div className="col-sm-1 col-xs-1 reply-emojis">
          <i className="fa fa-smile-o fa-2x"></i>
        </div>
        <div className="col-sm-9 col-xs-9 reply-main">
          <textarea className="form-control" value={textValue}
            onChange={handleTextareaChange} onKeyDown={handleEnterKeyPress} ></textarea>
        </div>
        <div className="col-sm-1 col-xs-1 reply-recording">
          <i className="fa fa-microphone fa-2x" aria-hidden="true"></i>
        </div>
        <div className="col-sm-1 col-xs-1 reply-send">
          <i className="fa fa-send fa-2x" aria-hidden="true" onClick={sendmsg}></i>
        </div>
      </div>
    </div>
  </>
);
}
