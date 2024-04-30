import { useEffect } from "react";
import Conversation from "./conversation";
import Getinvited from "./getinvited";
import Joinmember from "./joinmember";
import Side from "./side";
import axios from "axios";

export default function Chatsmember() {
  useEffect(() => {
    checkinglogin();
  });
  const checkinglogin = () => {
    axios
      .get("http://localhost:3000/api/user/home", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        if(res.data.data == "not login"){
          window.location.href = '/signIn';
        }else{
          console.log(res.data.data);
        }

      });
  };
  return (
    <div>
      <div className="app">
        <div className="row app-one">
          <Side />

          <Conversation />
          <Getinvited />
          <Joinmember />
        </div>
      </div>
    </div>
  );
}
