import { create } from "zustand";
import { Tierlist } from "../Classes/TierlistClass";

type uiNavigationState = {
	displayTemplates: boolean;
	setDisplayTemplates: (value: boolean) => void;
	displayCardbank: boolean;
	setDisplayCardbank: (value: boolean) => void;
	selectedGame: Tierlist | null;
	setSelectedGame: (game: Tierlist) => void;
};

export const useUiNavigationStore = create<uiNavigationState>()((set) => ({
	selectedGame: null,
	setSelectedGame: (game) => set({ selectedGame: game }),
	displayTemplates: false,
	setDisplayTemplates: (value) => set({ displayTemplates: value }),
	displayCardbank: false,
	setDisplayCardbank: (value) => set({ displayCardbank: value }),
}));
