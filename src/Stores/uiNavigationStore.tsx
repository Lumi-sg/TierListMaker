import { create } from "zustand";
import { Tierlist } from "../Classes/TierlistClass";

type uiNavigationState = {
	displayTemplates: boolean;
	setDisplayTemplates: (value: boolean) => void;
	displayCardbank: boolean;
	setDisplayCardbank: (value: boolean) => void;
	selectedGame: Tierlist | null;
	setSelectedGame: (game: Tierlist) => void;
	createMode: boolean;
	setCreateMode: (value: boolean) => void;
	displayPremades: boolean;
	setDisplayPremades: (value: boolean) => void;
	displayCreateTierlist: boolean;
	setDisplayCreateTierlist: (value: boolean) => void;
};

export const useUiNavigationStore = create<uiNavigationState>()((set) => ({
	selectedGame: null,
	setSelectedGame: (game) => set({ selectedGame: game }),
	displayTemplates: false,
	setDisplayTemplates: (value) => set({ displayTemplates: value }),
	displayCardbank: false,
	setDisplayCardbank: (value) => set({ displayCardbank: value }),
	createMode: false,
	setCreateMode: (value) => set({ createMode: value }),
	displayPremades: false,
	setDisplayPremades: (value) => set({ displayPremades: value }),
	displayCreateTierlist: false,
	setDisplayCreateTierlist: (value) => set({ displayCreateTierlist: value }),
}));
