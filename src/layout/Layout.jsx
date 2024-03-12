import React, { useState } from "react";
import Header from "../components/header/Header";
import SignUp from "../components/signUp/SignUp";

const Layout = () => {
  const [isVisible, setisVisible] = useState(false);

  const submitSign = () =>{
      setisVisible(true)
  }


  return (
    <div>
      <Header submitSign={submitSign}/>
      {isVisible && <SignUp setisVisible={setisVisible} />}
      
    </div>
  );
};

export default Layout;
