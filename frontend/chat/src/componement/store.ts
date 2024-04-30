
import create from 'zustand';

interface AppState {
  visble: boolean;
  setvisble: (visble: boolean) => void;
}

interface User {
  _id: string;
  name: string;
  email: string;
  profilepic: string;
  googleid: string;
  createdAt: string;
  __v: number;
}

interface Usercollection{
  user:User;
  setuser:(user:User)=>void
}
export const useStore = create<AppState>((set) => ({
    visble: true,
    setvisble: (visble) => set({ visble }),
}));


export const getlinkstore = create<AppState>((set) => ({
  visble: true,
  setvisble: (visble) => set({ visble }),
}));

export const Joinstore = create<AppState>((set) => ({
  visble: true,
  setvisble: (visble) => set({ visble }),
}));


export const userStore = create<Usercollection>((set) => ({
  user: {
    _id: "",
    name: "",
    email: "",
    profilepic: "",
    googleid: "",
    createdAt: "",
    __v: 0,
  },
  setuser: (user) => set({ user }),
}));