import { Joinstore, getlinkstore, useStore,useConversationStore } from "./store.ts";

export default function Conversation() {
  const store = useStore();
  const linkstore = getlinkstore();
 const joinstore = Joinstore();
 const conversationID = useConversationStore();
  const chatuser = conversationID.user;

  function viewmember() {
    store.setvisble(true);
  }



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

          <div className="row message-body">
            <div className="col-sm-12 message-main-receiver">
              <div className="receiver">
                <div className="message-text">Hyy, Its Awesome..!</div>
                <span className="message-time pull-right">Sun</span>
              </div>
            </div>
          </div>

          <div className="row message-body">
            <div className="col-sm-12 message-main-sender">
              <div className="sender">
                <div className="message-text">
                  Thanks n I know its awesome...!
                </div>
                <span className="message-time pull-right">Sun</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row reply">
          <div className="col-sm-1 col-xs-1 reply-emojis">
            <i className="fa fa-smile-o fa-2x"></i>
          </div>
          <div className="col-sm-9 col-xs-9 reply-main">
            <textarea className="form-control" id="comment"></textarea>
          </div>
          <div className="col-sm-1 col-xs-1 reply-recording">
            <i className="fa fa-microphone fa-2x" aria-hidden="true"></i>
          </div>
          <div className="col-sm-1 col-xs-1 reply-send">
            <i className="fa fa-send fa-2x" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </>
  );
}
