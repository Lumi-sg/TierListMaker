import { create } from "zustand";
import { Character, Tierlist } from "../Classes/TierlistClass";
import { devtools } from "zustand/middleware";

type tierListStoreState = {
	currentTierlist: Tierlist | null;
	setCurrentTierlist: (tierlist: Tierlist) => void;
	tierlistCharacterBank: Character[];
	setTierlistCharacterBank: (characters: Character[]) => void;
	bugFixCharacterBank: Character[];
	setBugFixCharacterBank: (characters: Character[]) => void;
};

export const useTierListStore = create<tierListStoreState>()(
	devtools((set) => ({
		currentTierlist: null,
		setCurrentTierlist: (tierlist) =>
			set({ currentTierlist: tierlist }, false, "setCurrentTierlist"),
		tierlistCharacterBank: [],
		setTierlistCharacterBank: (characters) =>
			set({ tierlistCharacterBank: characters }, false, "setTierlistCharacterBank"),
		bugFixCharacterBank: [],
		setBugFixCharacterBank: (characters) =>
			set({ bugFixCharacterBank: characters }, false, "setBugFixCharacterBank"),
	}))
);
