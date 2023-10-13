import {create} from 'zustand';

type State = {
  angkaKali: number;
  angkaTambah: number;
};

type Action = {
  perkalian: () => void;
  pertambahan: () => void;
};

export const useCalcStore = create<State & Action>()((set, get) => ({
  angkaKali: 1,
  angkaTambah: 1,
  perkalian: () => set({angkaKali: get().angkaKali * 3}), // with `get`
  pertambahan: () => set(state => ({angkaTambah: state.angkaTambah + 3})), // with `state`
}));
