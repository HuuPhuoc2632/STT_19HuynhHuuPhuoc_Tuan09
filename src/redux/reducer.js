
const initialState = {
    users: [
        {
            id: 1,
            username: "admin",
            password: "admin"
        }
    ],
    notes: [
        {
            id: 1,
            userId: 1,
            content: 'Làm bài tập',
            status: 'easy',
            time: '30-09-2021'
        },
        {
            id: 2,
            userId: 1,
            content: 'Đi đá bóng',
            status: 'medium',
            time: '30-09-2021'
        },


    ],
    currentUser: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            const { username, password } = action.payload;
            const user = state.users.find(
                (u) => u.username == username && u.password === password);

            if (user) {
                return {
                    ...state,
                    currentUser: user,
                    
                }
            } else {
                return {
                    ...state,
                    currentUser: null,
                }
            }

        case 'REGISTER':
            const newUser = {
                id: state.users.length + 1,
                ...action.payload,
            }
            console.log(newUser);
            return {
                ...state,
                users: [...state.users, newUser]
            }
        case 'NOTES':
            const noteList = state.notes;
            const userId1 = action.payload;
            const newList = noteList.filter((u) => u.userId == userId1)
            return {
                ...state,
                notes: newList,
            }

        case 'ADD':
            const { userId, noteData } = action.payload;
            const newNote = {
                id: state.notes.length + 1,
                userId,
                ...noteData,
            }
            console.log(newNote);
            return {
                ...state,
                notes: [...state.notes, newNote]
            }
        case 'DELETE':
            const noteId = action.payload;
            console.log(noteId.noteId);
            const updateNotes = state.notes.filter((note) => note.id !== noteId.noteId)
            return {
                ...state,
                notes: updateNotes,
            }
        case 'UPDATE':
            const updateNote = action.payload;
            console.log(updateNote);
            const updatedNoteArray = state.notes.map((note) => note.id === updateNote.noteId ? { ...note, ...updateNote.updatedNote } : note)
            console.log(updatedNoteArray);
            return {
                ...state,
                notes: updatedNoteArray,
            }

        default:
            return state;
    }
};

export default userReducer;
