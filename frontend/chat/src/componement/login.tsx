
import "./login.css";

export default function Login() {
  function clicksignup() {
    const container = document.getElementById("container");
    if (container) {
      container.classList.add("right-panel-active");
    } else {
      console.error("Container element not found.");
    }
  }
  function clicksignin() {
    const container = document.getElementById("container");
    if (container) {
      container.classList.remove("right-panel-active");
    } else {
      console.error("Container element not found.");
    }
  }

  return (
    <>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <a
              href="#"
              onClick={() => {
                clicksignin();
              }}
            >
              You have already account
            </a>
            <a href="">
              <div className="google-btn">
                <div className="google-icon-wrapper">
                  <img
                    className="google-icon"
                    src="https://i.ibb.co/ydLySMx/google.png"
                  />
                </div>
                <p className="btn-text">Sign In with Google</p>
              </div>
            </a>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <a
              href="#"
              onClick={() => {
                clicksignup();
              }}
            >
              Create Account
            </a>

            {/* <button>Sign In</button> */}
            <a href="http://localhost:3000/api/user/create" target="_top">
              <div className="google-btn">
                <div className="google-icon-wrapper">
                  <img
                    className="google-icon"
                    src="https://i.ibb.co/ydLySMx/google.png"
                  />
                </div>
                <p className="btn-text">Sign up with Google</p>
              </div>
            </a>
          </form>
        </div>
      </div>
    </>
  );
}
