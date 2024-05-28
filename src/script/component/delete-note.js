export class DeleteNote extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `
        :host {
          display: block;
        }
   
        div {
          padding: 10px;
          font-size: 14px;
          color: #aaa;
          text-align: center;
          background-color: #E1F7F5;
          margin-top: 20px;
        }

        button {
            background-color: #E1F7F5;
            border: none;
        }
        button:hover {
            cursor: pointer;
            background-color: #E1F7F5;
        }
      `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `      
        <div>
          <button>
          <img src="trash-solid.svg" alt="" style="width: 10px; color: white;">
          Hapus catatan</button>
        </div>
      `;
  }
}

customElements.define('delete-note', DeleteNote);
