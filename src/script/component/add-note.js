class AddNote extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                /* Style untuk form */
                form {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                input, textarea {
                    padding: 8px;
                    border: 1px solid #000;
                    border-radius: 4px;
                }
                button {
                    padding: 10px;
                    background-color: #E1F7F5;
                    color: #1E0342;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 16px;
                }
                button:hover {
                    background-color: #9AC8CD;
                }
                img {
                    padding:
                    margin: 0 auto;
                }
            </style>
            <form id="add-note-form">
                <input type="text" id="note-title" placeholder="Judul Catatan" required>
                <textarea id="note-content" rows="4" placeholder="Isi Catatan" required></textarea>
                <button type="submit">
                <img src="src/assets/plus-solid.svg" alt="" style="width: 12px; color: white;">
                Tambah Catatan</button>
            </form>
        `;

        this.shadowRoot.querySelector('form').addEventListener('submit', this._handleSubmit.bind(this));
    }

    _handleSubmit(event) {
        event.preventDefault();
        const title = this.shadowRoot.querySelector('#note-title').value.trim();
        const content = this.shadowRoot.querySelector('#note-content').value.trim();

        if (title && content) {
            this.dispatchEvent(new CustomEvent('add-note', {
                detail: { title, content },
                bubbles: true,
                composed: true
            }));

            this.shadowRoot.querySelector('#note-title').value = '';
            this.shadowRoot.querySelector('#note-content').value = '';
        }
    }
}

customElements.define('add-note', AddNote);
