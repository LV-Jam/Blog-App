'use client';

import { SubmitEvent, useState } from 'react';
import { usePhotoStore } from '@/lib/photoStore';
import { Photo } from '@/types/Photo';

const blankPhoto: Photo = {
  slug: '',
  url: '',
  title: '',
  description: '',
  fileSize: 0,
  category: 'Landscape',
  metadata: {
    iso: 100,
    usedAperture: 2.8,
    shutterSpeed: '1/125',
    time: new Date().toISOString(),
    cameraModel: 'Studio camera',
    bitDepth: 14,
    dpi: 300,
    resolution: { width: 1200, height: 800 },
    lensInfo: { focalLength: 50, aperture: 2.8, lensName: 'Standard lens' },
  },
};

export default function AdminPage() {
  const { photos, role, setRole, addPhoto, updatePhoto, deletePhoto } = usePhotoStore();
  const [editing, setEditing] = useState<string | null>(null);
  const [draft, setDraft] = useState(blankPhoto);
  const [adding, setAdding] = useState(false);
  const canManage = role === 'admin';
  const startEdit = (photo: Photo) => {
    setEditing(photo.slug);
    setDraft(photo);
    setAdding(false);
  };
  const saveEdit = (event: SubmitEvent) => {
    event.preventDefault();
    updatePhoto(draft.slug, {
      title: draft.title,
      description: draft.description,
      category: draft.category,
    });
    setEditing(null);
  };
  const saveNew = (event: SubmitEvent) => {
    event.preventDefault();
    addPhoto({
      ...draft,
      slug:
        draft.slug ||
        draft.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, ''),
    });
    setAdding(false);
    setDraft(blankPhoto);
  };
  const field = (key: 'title' | 'description' | 'category') => (
    <label>
      {key[0].toUpperCase() + key.slice(1)}
      {key === 'category' ? (
        <select
          value={draft[key]}
          onChange={(event) => setDraft({ ...draft, [key]: event.target.value })}
        >
          <option>Landscape</option>
          <option>Street</option>
          <option>Portrait</option>
          <option>Wildlife</option>
          <option>Editorial</option>
        </select>
      ) : key === 'description' ? (
        <textarea
          rows={4}
          value={draft[key]}
          onChange={(event) => setDraft({ ...draft, [key]: event.target.value })}
          required
        />
      ) : (
        <input
          value={draft[key]}
          onChange={(event) => setDraft({ ...draft, [key]: event.target.value })}
          required
        />
      )}
    </label>
  );

  return (
    <main className="page-shell admin-page">
      <div className="admin-heading">
        <div>
          <p className="eyebrow">Studio controls</p>
          <h1>Photo manager</h1>
          <p>
            {canManage
              ? 'You have permission to curate the archive.'
              : 'Sign in as an administrator to manage photos.'}
          </p>
        </div>
        <div className="role-switch" aria-label="Role access">
          <span>Viewing as</span>
          <button className={role === 'guest' ? 'active' : ''} onClick={() => setRole('guest')}>
            Guest
          </button>
          <button className={role === 'admin' ? 'active' : ''} onClick={() => setRole('admin')}>
            Admin
          </button>
        </div>
      </div>
      {!canManage ? (
        <section className="access-message">
          <h2>Admin access required</h2>
          <p>
            This demo uses Zustand to conditionally protect management actions. Switch the role
            above to continue.
          </p>
        </section>
      ) : (
        <>
          <button
            className="button"
            onClick={() => {
              setAdding(true);
              setEditing(null);
              setDraft(blankPhoto);
            }}
          >
            + Add new photo
          </button>
          {adding && (
            <form className="admin-form" onSubmit={saveNew}>
              <h2>Add photo</h2>
              <label>
                Image URL
                <input
                  type="url"
                  value={draft.url}
                  onChange={(event) => setDraft({ ...draft, url: event.target.value })}
                  required
                />
              </label>
              {field('title')}
              {field('description')}
              {field('category')}
              <div className="form-actions">
                <button className="button" type="submit">
                  Publish photo
                </button>
                <button type="button" className="quiet-button" onClick={() => setAdding(false)}>
                  Cancel
                </button>
              </div>
            </form>
          )}
          <div className="admin-list">
            {photos.map((photo) =>
              editing === photo.slug ? (
                <form className="admin-form" key={photo.slug} onSubmit={saveEdit}>
                  <h2>Edit photo</h2>
                  {field('title')}
                  {field('description')}
                  {field('category')}
                  <div className="form-actions">
                    <button className="button" type="submit">
                      Save changes
                    </button>
                    <button type="button" className="quiet-button" onClick={() => setEditing(null)}>
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <article className="admin-row" key={photo.slug}>
                  <div>
                    <p className="eyebrow">{photo.category}</p>
                    <h2>{photo.title}</h2>
                    <p>{photo.description}</p>
                  </div>
                  <div className="row-actions">
                    <button onClick={() => startEdit(photo)}>Edit</button>
                    <button className="danger" onClick={() => deletePhoto(photo.slug)}>
                      Delete
                    </button>
                  </div>
                </article>
              ),
            )}
          </div>
        </>
      )}
    </main>
  );
}
