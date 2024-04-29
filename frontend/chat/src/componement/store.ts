
import create from 'zustand';

interface AppState {
  visble: boolean;
  setvisble: (visble: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
    visble: true,
    setvisble: (visble) => set({ visble }),
}));


export const getlinkstore = create<AppState>((set) => ({
  visble: true,
  setvisble: (visble) => set({ visble }),
}));