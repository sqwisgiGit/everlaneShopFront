// src/stores/counter-store.ts
import { createStore } from 'zustand/vanilla'

export type CounterState = {
  section: string
}

export type CounterActions = {
  changeSection: (value: string) => void
}

export type CounterStore = CounterState & CounterActions

export const initCounterStore = (): CounterState => {
  return { section: '' }
}

export const defaultInitState: CounterState = {
  section: '',
}

export const createCounterStore = (
  initState: CounterState = defaultInitState,
) => {
  return createStore<CounterStore>()((set) => ({
    ...initState,
    changeSection: (value) => set((state) => ({ section: state.section = value })),
  }))
}
