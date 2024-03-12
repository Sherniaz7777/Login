import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFromLS, signOut } from "../../store/slice/signUpSlices";
import LogOut from "../logOut/LogOut";

const Header = ({ submitSign }) => {
  const { userData, loading, err } = useSelector((state) => state.signUp);
  const dispatch = useDispatch();
  const  [isLogOut, setIsLogOut] = React.useState(false);

  useEffect(() => {
    dispatch(getFromLS());
  }, [dispatch]);

  console.log(userData);

  const handleSignOut = () => {
    dispatch(signOut());
    setIsLogOut(false)
  };
  const LogOutt = () =>{
    setIsLogOut(true);
  }

  return (
    <div style={{marginTop:20}}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: 20 }}>
          <a href="">Main</a>
          <a href="">About</a>
          <a href="">Contacts</a>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div>
            <button>
              {typeof userData === "object" &&
              Object.keys(userData).length > 0 ? (
                <span onClick={LogOutt}>Log Out</span>
              ) : (
                <span onClick={submitSign}>Sign Up</span>
              )}
            </button>

            <button>Sign In</button>
            <button>Delete</button>
          </div>
          <div>
            <img
              width={30}
              src={userData.img}
              alt=""
              style={{ marginLeft: 15 }}
            />
            <br />
            <span style={{ textAlign: "center" }}>{userData.name}</span>
          </div>
        </div>
      </div>
      {isLogOut && <LogOut handleSignOut={handleSignOut} setIsLogOut={setIsLogOut}/>}
      
    </div>
  );
};

export default Header;
