class HeaderBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });


    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          background-color: #E1F7F5;
          color: #1E0342;
          border-radius: 8px;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 10px;
        }

        h1 {
          margin: 0;
          padding: 10px 0;
        }
        
        .search-bar {
          margin: 10px 0;
        }

        #search-input {
          padding: 5px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
          width: 200px;
        }
      </style>
      <div class="header-container">
        <h1>NoteApp</h1>
        <div class="search-bar">
          <input type="text" id="search-input" placeholder="Cari catatan...">
        </div>
      </div>
    `;

    this.shadowRoot.querySelector('#search-input').addEventListener('input', this._onSearch.bind(this));
  }

  _onSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    this.dispatchEvent(new CustomEvent('search', {
      detail: { searchTerm },
      bubbles: true,
      composed: true
    }));
  }
}

customElements.define("header-bar", HeaderBar);
