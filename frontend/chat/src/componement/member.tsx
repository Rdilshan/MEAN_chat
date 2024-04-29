import Conversation from "./conversation";
import Getinvited from "./getinvited";
import Side from "./side";

export default function Chatsmember() {
  return (
    <div>
      <div className="app">
        <div className="row app-one">

          <Side />

          {/* <Conversation /> */}
          <Getinvited />

        </div>
      </div>
    </div>
  );
}
