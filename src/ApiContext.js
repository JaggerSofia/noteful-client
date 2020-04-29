import React from 'react';

const ApiContext = React.createContext({
    notes: [],
    folders: [],
    handleDelete: () => {},
    updateFolderId: () => {},
    updateNoteId: () => {},
    currentFolderId: null,
    currentNoteId: null,
    toggleFolderFormView: () => {},
    toggleNoteFormView: () => {}
});

export default ApiContext;