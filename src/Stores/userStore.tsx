import { create } from "zustand";
import { User as FirebaseUser } from "firebase/auth";
import { devtools } from "zustand/middleware";

type UserState = {
	isLoggedIn: boolean;
	setIsLoggedIn: (value: boolean) => void;
	currentUserData: FirebaseUser | null;
	setCurrentUserData: (user: FirebaseUser | null) => void;
};

export const useUserStore = create<UserState>()(
	devtools((set) => ({
		isLoggedIn: false,
		setIsLoggedIn: (value) => set({ isLoggedIn: value }, false, "setIsLoggedIn"),
		currentUserData: null,
		setCurrentUserData: (user) => set({ currentUserData: user }, false, "setCurrentUserData"),
	}))
);
