import { useUserStore } from "../../../Stores/userStore";
import { auth, provider, signInWithPopup } from "../../../main";

const LOGIN = () => {
	const { isLoggedIn, setIsLoggedIn, currentUserData, setCurrentUserData } = useUserStore();

	const handleLogin = async () => {
		if (!isLoggedIn) {
			try {
				const result = await signInWithPopup(auth, provider);
				if (result) {
					setIsLoggedIn(true);
					setCurrentUserData(result.user);
					return;
				}
			} catch (error) {
				console.log(error);
				return;
			}
		}
		setIsLoggedIn(false);
	};
	return (
		<div className="loginContainer">
			{isLoggedIn && (
				<img
					className="loginIcon"
					src={currentUserData?.photoURL || ""}
					alt="login"
				/>
			)}

			<button
				className={isLoggedIn ? "loginButton" : "loginButtonOUT"}
				onClick={handleLogin}
			>
				{isLoggedIn ? "Logout" : "Login"}
			</button>
		</div>
	);
};

export default LOGIN;
