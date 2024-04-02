import { create } from 'zustand';

export const usePageSizeStore = create((set) => ({
  pageSize: '',
  setPageSize: (state) => set({ pageSize: state }),
}));
