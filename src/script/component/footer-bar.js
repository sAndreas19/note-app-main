class FooterBar extends HTMLElement {
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
          Note App &copy; 2024
        </div>
      `;
    }
  }
   
  customElements.define('footer-bar', FooterBar);