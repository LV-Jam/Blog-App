'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import data from '@/mockData.json';
import { backEndPhotoToPhoto } from '@/lib/utils';
import { Photo } from '@/types/Photo';

type Role = 'guest' | 'admin';

type PhotoStore = {
  photos: Photo[];
  role: Role;
  setRole: (role: Role) => void;
  addPhoto: (photo: Photo) => void;
  updatePhoto: (slug: string, changes: Pick<Photo, 'title' | 'description' | 'category'>) => void;
  deletePhoto: (slug: string) => void;
};

export const usePhotoStore = create<PhotoStore>()(
  persist(
    (set) => ({
      photos: data.map(backEndPhotoToPhoto),
      role: 'guest',
      setRole: (role) => set({ role }),
      addPhoto: (photo) => set((state) => ({ photos: [photo, ...state.photos] })),
      updatePhoto: (slug, changes) =>
        set((state) => ({
          photos: state.photos.map((photo) =>
            photo.slug === slug ? { ...photo, ...changes } : photo,
          ),
        })),
      deletePhoto: (slug) =>
        set((state) => ({ photos: state.photos.filter((photo) => photo.slug !== slug) })),
    }),
    { name: 'lens-and-light-gallery' },
  ),
);