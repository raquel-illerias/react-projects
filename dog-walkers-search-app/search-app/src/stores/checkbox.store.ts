import { create } from 'zustand';

interface CheckboxStore {
    currentPage: number;
    setCurrentPage: (arg: number) => void;
}

export const useCheckboxStore = create<CheckboxStore>()((set) => ({
    currentPage: 1,
    setCurrentPage: (arg) => set(() => ({ currentPage: arg }))
}))