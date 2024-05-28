import { DeleteNote } from './component/delete-note.js';
import './component/loading-spinner.js';
import '../index.js';
import './data/remote/noteApp-api.js';
import { getNotes, createNote, deleteNote } from './data/remote/noteApp-api.js';
const notesListElement = document.querySelector('note-list');
const notesList = notesListElement.shadowRoot.getElementById('notes-list');
const loadingSpinner = document.createElement('loading-spinner');
let allNotes = [];

getNotes().then((data) => {
  notesList.removeChild(loadingSpinner);
  data.forEach((note) => {
    const noteItem = createNoteItem(note);
    notesList.appendChild(noteItem);
    allNotes.push({ id: note.id, title: note.title, body: note.body });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  notesList.appendChild(loadingSpinner);
  document.querySelector('add-note').addEventListener('add-note', (event) => {
    const { title, content } = event.detail;
    addNoteToDOM(title, content);
  });
  const headerBar = document.querySelector('header-bar');
  if (headerBar) {
    headerBar.addEventListener('search', (event) => {
      const { searchTerm } = event.detail;
      performSearch(searchTerm);
    });
  }
});

function addNoteToDOM(title, content) {
  createNote(title, content);
  setTimeout(() => {
    location.reload();
  }, 2000);
}

// Fungsi pencarian
function performSearch(searchTerm) {
  const filteredNotes = allNotes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.body.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  notesList.innerHTML = '';

  filteredNotes.forEach((note) => {
    const noteItem = createNoteItem(note);
    notesList.appendChild(noteItem);
  });
}

function createNoteItem(note) {
  const newNote = document.createElement('li');
  newNote.classList.add('note-item');
  newNote.id = note.id;

  const noteTitle = document.createElement('h3');
  noteTitle.textContent = note.title;

  const noteContent = document.createElement('p');
  noteContent.textContent = note.body;

  const deleteNote = new DeleteNote();
  deleteNote.addEventListener('click', () => {
    const noteId = note.id;
    deleteNoteById(noteId);
  });

  newNote.appendChild(noteTitle);
  newNote.appendChild(noteContent);
  newNote.appendChild(deleteNote);

  return newNote;
}

async function deleteNoteById(noteId) {
  try {
    const response = await deleteNote(noteId);
    alert(response.message);
    location.reload();
  } catch (error) {
    console.log(error);
    alert('Failed to delete note');
  }
}
