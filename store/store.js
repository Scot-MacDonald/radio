// store.js
import create from "zustand";

export const useTagStore = create((set) => ({
  selectedTags: [],
  setSelectedTags: (tags) => set({ selectedTags: tags }),
}));
