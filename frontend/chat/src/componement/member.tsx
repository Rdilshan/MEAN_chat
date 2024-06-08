import { useEffect } from "react";
import Conversation from "./conversation";
import Getinvited from "./getinvited";
import Joinmember from "./joinmember";
import Side from "./side";
import axios from "axios";
import { userStore } from "./store";


export default function Chatsmember() {

  const user = userStore();


  useEffect(() => {
    checkinglogin();
  },[]);
  const checkinglogin = () => {
    try {
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
          user.setuser(res.data.data);
        }

      });
    } catch (error) {
      window.location.href = '/signIn';
      console.log("error")
    }
   
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
