import React from 'react'
import styles from "../logOut/LogOut.module.css"

const LogOut = ({setIsLogOut, handleSignOut}) => {
    const clickDiv = (e) => {
        let authDiv = e.target.closest("#test");
    
        if (!authDiv) setIsLogOut(false);
    
        if (authDiv.classList.value === styles.auth) {
          return;
        }
      };

    
  return (
    <div  className={styles.overlay} onClick={clickDiv}>
        <div className={styles.auth} id="test">
            <div>
                <h3>Exit</h3>
                <p>Do you want to leave?</p>
            </div>
            <div  className={styles.buttons}>
                <button onClick={()=>setIsLogOut(false)}>Cancellation</button>
                <button onClick={handleSignOut} className={styles.btn2}>Exit</button>
            </div>
        </div>
    </div>
  )
}

export default LogOut