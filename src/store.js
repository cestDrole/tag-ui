import { create } from 'zustand';

export const usePageSizeStore = create((set) => ({
  pageSize: '',
  page: 0,
  setPageSize: (state) => set({ pageSize: state }),
  setPage: (state) => set({page: state}),
}));
