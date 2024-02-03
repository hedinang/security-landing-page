import create from 'zustand'

export const useSideBarStore = create((set) => ({
    collapse: false,
    breadCrumbItem: 'Danh sách ứng viên',
    switchCollapse: () => set((state) => ({ collapse: !state.collapse })),
    switchBreadCrumbItem: (breadCrumbItem) => set((state) => ({ breadCrumbItem: breadCrumbItem })),
}))
