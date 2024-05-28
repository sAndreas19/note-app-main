const BASE_URL = 'https://notes-api.dicoding.dev/v2';

const getNotes = () => {
  return fetch(`${BASE_URL}/notes`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch notes');
      }
      return response.json();
    })
    .then((responseJson) => {
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
        return []; // Return empty array in case of error
      } else {
        const notes = responseJson.data.map((data) => ({
          id: data.id,
          title: data.title,
          body: data.body,
        }));
        return notes;
      }
    })
    .catch((error) => {
      showResponseMessage(error.message);
      return []; // Return empty array in case of error
    });
};

const createNote = (title, body) => {
  const newNote = {
    title: title,
    body: body,
  };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newNote),
  };

  // Kirim data ke API
  fetch(`${BASE_URL}/notes`, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to create note');
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error);
      alert('Failed to create note');
    });
};

const deleteNote = (noteId) => {
  const requestOptions = {
    method: 'DELETE',
  };

  // Kirim permintaan DELETE ke API
  return fetch(`${BASE_URL}/notes/${noteId}`, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to delete note');
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error);
      alert('Failed to delete note');
    });
};

const showResponseMessage = (message = 'Error connection') => {
  console.log(message);
  alert(message);
};

export { getNotes, createNote, deleteNote };
