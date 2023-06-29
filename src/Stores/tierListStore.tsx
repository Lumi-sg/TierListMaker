import { create } from "zustand";
import { Character, Tierlist } from "../Classes/TierlistClass";

type tierListStoreState = {
	currentTierlist: Tierlist | null;
	setCurrentTierlist: (tierlist: Tierlist) => void;
    tierlistCharacterBank: Character[];
    setTierlistCharacterBank: (characters: Character[]) => void;
};

export const useTierListStore = create<tierListStoreState>()((set) => ({
	currentTierlist: null,
	setCurrentTierlist: (tierlist) => set({ currentTierlist: tierlist }),
    tierlistCharacterBank: [],
    setTierlistCharacterBank: (characters) => set({ tierlistCharacterBank: characters }),
}));
