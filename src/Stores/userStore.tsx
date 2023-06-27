import { create } from "zustand";
import { User as FirebaseUser } from "firebase/auth";

type UserState = {
	isLoggedIn: boolean;
	setIsLoggedIn: (value: boolean) => void;
	currentUserData: FirebaseUser | null;
	setCurrentUserData: (user: FirebaseUser | null) => void;
};

export const useUserStore = create<UserState>()((set) => ({
	isLoggedIn: false,
	setIsLoggedIn: (value) => set({ isLoggedIn: value }),
	currentUserData: null,
	setCurrentUserData: (user) => set({ currentUserData: user }),
}));
