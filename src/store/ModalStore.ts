import { create } from 'zustand'

interface StateActive {
    isActive: boolean
    changeStateActive: () => void
}

const useStateActive = create<StateActive>()((set) => ({
    isActive: false,
    changeStateActive: () => set((state) => ({ isActive: !state.isActive })),
}))

export default useStateActive