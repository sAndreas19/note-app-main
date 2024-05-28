class NoteItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static createNoteItem(note) {
        const newNote = document.createElement('li');
        newNote.classList.add('note-item');

        const noteTitle = document.createElement('h3');
        noteTitle.textContent = note.title;

        const noteContent = document.createElement('p');
        noteContent.textContent = note.body;

        newNote.appendChild(noteTitle);
        newNote.appendChild(noteContent);

        return newNote;
    }

    static addNewNoteToList(note) {
        const noteList = document.querySelector('note-list');
        const noteItem = NoteItem.createNoteItem(note);
        noteList.appendChild(noteItem);
    }

    set note(note) {
        this.render(note);
    }

    render(note) {
        this.shadowRoot.innerHTML = `
            
        `;
    }
}

customElements.define('note-item', NoteItem);
