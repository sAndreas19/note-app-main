import './note-item.js';

class NoteList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
                :host {
                    font-family: 'Roboto', sans-serif;
                }
                #notes-list {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    list-style: none;
                    gap: 10px;
                }
                #notes-list li {
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    padding: 10px;
                    margin-bottom: 10px;
                }
                  
                #notes-list li:hover {
                    background-color: #f7f7f7;
                }
            </style>
            <ul id="notes-list"></ul>
        `;
    }

    set notes(notes) {
        const container = this.shadowRoot.querySelector('#notes-container');
        container.innerHTML = '';
        notes.forEach(note => {
            const noteItemElement = document.createElement('note-item');
            noteItemElement.note = note;
            container.appendChild(noteItemElement);
        });
    }
}

customElements.define('note-list', NoteList);