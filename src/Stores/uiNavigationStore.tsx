import { create } from "zustand";
import { Tierlist } from "../Classes/TierlistClass";
import { devtools } from "zustand/middleware";

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
	displayYourTierlists: boolean;
	setDisplayYourTierlists: (value: boolean) => void;
	displayingTierlist: boolean;
	setDisplayingTierlist: (value: boolean) => void;
	isDragging: boolean;
	setIsDragging: (value: boolean) => void;
};

export const useUiNavigationStore = create<uiNavigationState>()(
	devtools((set) => ({
		selectedGame: null,
		setSelectedGame: (game) => set({ selectedGame: game }, false, "setSelectedGame"),
		displayTemplates: false,
		setDisplayTemplates: (value) =>
			set({ displayTemplates: value }, false, "setDisplayTemplates"),
		displayCardbank: false,
		setDisplayCardbank: (value) => set({ displayCardbank: value }, false, "setDisplayCardbank"),
		createMode: false,
		setCreateMode: (value) => set({ createMode: value }, false, "setCreateMode"),
		displayPremades: false,
		setDisplayPremades: (value) => set({ displayPremades: value }, false, "setDisplayPremades"),
		displayCreateTierlist: false,
		setDisplayCreateTierlist: (value) =>
			set({ displayCreateTierlist: value }, false, "setDisplayCreateTierlist"),
		displayYourTierlists: false,
		setDisplayYourTierlists: (value) =>
			set({ displayYourTierlists: value }, false, "setDisplayYourTierlists"),
		displayingTierlist: false,
		setDisplayingTierlist: (value) =>
			set({ displayingTierlist: value }, false, "setDisplayingTierlist"),
		isDragging: false,
		setIsDragging: (value) => set({ isDragging: value }, false, "setIsDragging"),
	}))
);
