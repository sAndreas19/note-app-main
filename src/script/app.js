import notesData from './data/data.js';
import './component/index.js'
const notesListElement = document.querySelector('note-list');
const notesList = notesListElement.shadowRoot.getElementById('notes-list')

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('add-note').addEventListener('add-note', event => {
        const { title, content } = event.detail;
        addNoteToDOM(title, content);
    });
    const headerBar = document.querySelector('header-bar');
    if (headerBar) {
        headerBar.addEventListener('search', event => {
            const { searchTerm } = event.detail;
            performSearch(searchTerm);
        });
    }
});

function addNoteToDOM(title, content) {
    const noteElement = document.createElement('li');
    noteElement.innerHTML = `<strong>${title}</strong><br> ${content}`;
    notesList.appendChild(noteElement);
}

// Fungsi pencarian
function performSearch(searchTerm) {
  const filteredNotes = notesData.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    note.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  notesList.innerHTML = '';

  filteredNotes.forEach(note => {
    const noteItem = createNoteItem(note);
    notesList.appendChild(noteItem);
  });
}

function createNoteItem(note) {
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

notesData.forEach(note => {
  const noteItem = createNoteItem(note);
  notesList.appendChild(noteItem);
});