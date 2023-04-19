import { create } from "zustand";
import { Giff, Images } from "../GlobalInterfaces";

interface CallStore {
    search: [] | (Giff[] & Images[]);
    setSearch: (newSearch: (Giff[] & Images[])) => void;
    trending: [] | (Giff[] & Images[]);
    setTrending: (newTrending: (Giff[] & Images[])) => void;
}

export const useCallStore = create<CallStore>((set) => ({    
    search: [],
    setSearch: (newSearch) => set({ search: newSearch}),
    trending: [],
    setTrending: (newTrending) => set({ trending: newTrending})
  }))

