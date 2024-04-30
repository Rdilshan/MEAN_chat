import { useState } from "react";
import { Joinstore, getlinkstore, useStore, userStore } from "./store.ts";

export default function Side() {
  const [menuview, setMenuView] = useState<boolean>(false);

  const store = useStore();
  const linkstore = getlinkstore();
  const joinstore = Joinstore();
  const user = userStore();

  function viewchat() {
    store.setvisble(false);
    joinstore.setvisble(true);
    linkstore.setvisble(true);
    setMenuView(false);
  }

  return (
    <>
      <div
        className={`col-sm-4 side ${store.visble ? "" : "dontshow"} ${
          linkstore.visble === false ? "dontshow" : ""
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
              <li>Logout</li>
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
            <div
              className="row sideBar-body"
              onClick={() => {
                viewchat();
              }}
            >
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="img/man-2-512.png" />
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">John Doe</span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="img/man-2-512.png" />
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">John Doe</span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="img/man-2-512.png" />
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">John Doe</span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="img/man-2-512.png" />
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">John Doe</span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="img/man-2-512.png" />
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">John Doe</span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="img/man-2-512.png" />
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">John Doe</span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="img/man-2-512.png" />
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">John Doe</span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="img/man-2-512.png" />
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">John Doe</span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="img/man-2-512.png" />
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">John Doe</span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="img/man-2-512.png" />
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">John Doe</span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="img/man-2-512.png" />
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">John Doe</span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="img/man-2-512.png" />
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">John Doe</span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="img/man-2-512.png" />
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">John Doe</span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="img/man-2-512.png" />
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">John Doe</span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sideBar-body">
              <div className="col-sm-3 col-xs-3 sideBar-avatar">
                <div className="avatar-icon">
                  <img src="img/man-2-512.png" />
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 sideBar-main">
                <div className="row">
                  <div className="col-sm-8 col-xs-8 sideBar-name">
                    <span className="name-meta">John Doe</span>
                  </div>
                  <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                    <span className="time-meta pull-right">18:18</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
