import { useEffect, useState } from "react";
import { Joinstore, getlinkstore, useStore, userStore,useConversationStore } from "./store.ts";
import axios from "axios";


export default function Side() {

  interface User {
    _id: string;
    name: string;
    email: string;
    profilepic: string;
    googleid: string;
    createdAt: Date;
    __v: number;
  }
  const [menuview, setMenuView] = useState<boolean>(false);
  const [chats, setChats] = useState<User[]>([]);

  const store = useStore();
  const linkstore = getlinkstore();
  const joinstore = Joinstore();
  const user = userStore();
  const conversationID = useConversationStore();


  function viewchat(id: string) {
    conversationID.setValue(id)
    store.setvisble(false);
    joinstore.setvisble(true);
    linkstore.setvisble(true);
    setMenuView(false);
  }
  function logout() {
    axios
      .get("http://localhost:3000/api/user/logout", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {

        console.log(res.data)


      });
  }

  const chatsetload = () => {
    axios
      .get("http://localhost:3000/api/chat/getchat", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        setChats(res.data);
      });
  }

  useEffect(() => {
    chatsetload();
  }, []);

  return (
    <>
      <div
        className={`col-sm-4 side ${store.visble ? "" : "dontshow"} ${linkstore.visble === false ? "dontshow" : ""
          } ${joinstore.visble === false ? "dontshow" : ""}`}
      >
        <div className="side-one">
          <div className="row heading">
            <div className="col-sm-3 col-xs-3 heading-avatar">
              <div className="heading-avatar-icon">
                <img src={`${user.user.profilepic}`} />
              </div>
            </div>

            <div
              className="col-sm-1 col-xs-1  heading-dot  pull-right"
              onClick={() => {
                setMenuView(!menuview);
              }}
            >
              <i
                className="fa fa-ellipsis-v fa-2x  pull-right"
                aria-hidden="true"
              ></i>
            </div>

            <ul className={`menuset ${menuview ? "" : "hide"}`}>
              <li
                onClick={() => {
                  joinstore.setvisble(!joinstore.visble);
                }}
              >
                Join member
              </li>
              <li
                onClick={() => {
                  linkstore.setvisble(!linkstore.visble);
                }}
              >
                Your link
              </li>
              <li onClick={logout}>Logout</li>
            </ul>
          </div>

          <div className="row searchBox">
            <div className="col-sm-12 searchBox-inner">
              <div className="form-group has-feedback">
                <input
                  id="searchText"
                  type="text"
                  className="form-control"
                  name="searchText"
                  placeholder="Search"
                />
                <span className="glyphicon glyphicon-search form-control-feedback"></span>
              </div>
            </div>
          </div>

          <div className="row sideBar">
          {chats.length > 0 ? (
            chats.map((chat, index) => (
              <div
                className="row sideBar-body" key={index}
                onClick={() => {
                  viewchat(chat._id);
                }}
              >
                <div className="col-sm-3 col-xs-3 sideBar-avatar">
                  <div className="avatar-icon">
                    <img src={chat.profilepic} />
                  </div>
                </div>
                <div className="col-sm-9 col-xs-9 sideBar-main">
                  <div className="row">
                    <div className="col-sm-8 col-xs-8 sideBar-name">
                      <span className="name-meta">{chat.name}</span>
                    </div>
                    <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                      <span className="time-meta pull-right">18:18</span>
                    </div>
                  </div>
                </div>
              </div>
            ))): (
              <div className="no-chats">
                <p>You have not chat yet</p>
              </div>
            )}




          </div>
        </div>
      </div>
    </>
  );
}
