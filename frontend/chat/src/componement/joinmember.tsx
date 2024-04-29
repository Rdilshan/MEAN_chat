import { Joinstore } from "./store";


export default function Joinmember() {
  const joinstore = Joinstore();
  return (
    <>
      <>
      <div
        className={`col-sm-8 conversation ${
          joinstore.visble === true ? "hide" : ""
        }`}
      >
          <div className="row heading">
          <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar mobileflex" onClick={() => {
                joinstore.setvisble(!joinstore.visble);
              }}>
              <i
                className="fa  fa-2x  fa-angle-left backicon"
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div className="row showingLink ">
            <div className="row message-previous ">
              <div className="col-sm-12 previous">
                <a id="ankitjain28">Chat with your Member</a>

                <div className="clipboard-example align-items-center w-50">
                  <div
                    className="input-group mb-3"
                    style={{ marginBottom: "20px" }}
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="your friend Code.."
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
                      Submit
                    </button>
                  </div>
                  <span>
                  Please paste your code here to start chatting with them.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
