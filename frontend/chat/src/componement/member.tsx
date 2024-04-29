import Conversation from "./conversation";
import Getinvited from "./getinvited";
import Joinmember from "./joinmember";
import Side from "./side";

export default function Chatsmember() {
  return (
    <div>
      <div className="app">
        <div className="row app-one">

          <Side />

          {/* <Conversation /> */}
          {/* <Getinvited /> */}
          <Joinmember />


        </div>
      </div>
    </div>
  );
}
