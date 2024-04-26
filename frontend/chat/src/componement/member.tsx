import Conversation from "./conversation";
import Side from "./side";

export default function Chatsmember() {
  return (
    <div>
      <div className="app">
        <div className="row app-one">

          <Side />

          <Conversation />

        </div>
      </div>
    </div>
  );
}
