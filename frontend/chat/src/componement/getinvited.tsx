import { getlinkstore } from "./store";

export default function Getinvited() {

  const linkstore = getlinkstore();

  return (
    <>
      <div
        className={`col-sm-8 conversation ${
          linkstore.visble === true ? "hide" : ""
        }`}
      >
        <div className="row heading">
          <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar mobileflex" onClick={() => {
                linkstore.setvisble(!linkstore.visble);
              }}>
            <i className="fa  fa-2x  fa-angle-left backicon"
              aria-hidden="true"></i>
           
          </div>
          
        </div>
        <div className="row showingLink ">
          <div className="row message-previous ">
            <div className="col-sm-12 previous">
              <a id="ankitjain28">Getting your code</a>

              <div className="clipboard-example align-items-center w-50">
                <div
                  className="input-group mb-3"
                  style={{ marginBottom: "20px" }}
                >
                  <input
                    type="text"
                    className="form-control"
                    defaultValue ="39XMhLRH54kNyYHfiUWC8xrz5HRmZQxL7f"
                  />
                  <button
                    id="btn01"
                    className="btn btn-secondary copybtn"
                    type="button"
                    data-clipboard-demo=""
                    data-clipboard-target="#in01"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Copy to Clipboard"
                    onClick={() => {}}
                  >
                    Copy
                  </button>
                </div>
                <span>
                  The code you specified is an identification code. You need to
                  send this code to the person you want to chat with first.
                  After sending the code to them, you can start chatting with
                  them.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
