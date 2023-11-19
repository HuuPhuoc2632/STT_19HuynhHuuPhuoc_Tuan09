
export const loginUser = (username, password) => ({
    type: 'LOGIN',
    payload: { username, password },
});

export const registerUser = (userData) => ({
    type: 'REGISTER',
    payload: userData,
});

export const noteList = (userId) => ({
    type: 'NOTES',
    payload: userId,
});

export const add = (userId, noteData) => ({
    type: 'ADD',
    payload: { userId, noteData },
});

export const deleteNote = (userId, noteId) => ({
    type: 'DELETE',
    payload: { userId, noteId },
});

export const updateNote = (userId, noteId, updatedNote) => ({
    type: 'UPDATE',
    payload: { userId, noteId, updatedNote },
});
