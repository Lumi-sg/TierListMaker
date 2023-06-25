import { useState } from "react";
import {auth, provider, signInWithPopup} from "../../../main"


const LOGIN = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = async () => {
        if (!isLoggedIn) {
            try {
                const result = await signInWithPopup(auth, provider);
                if (result){
                    const user = result.user;
                    setIsLoggedIn(true);
                    return;
                }
                
            }
            catch (error) {
                console.log(error);
                return;
            }
    }
    setIsLoggedIn(false);

}
  return (
    <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
  )
}

export default LOGIN