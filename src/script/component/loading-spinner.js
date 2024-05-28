class LoadingSpinner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    const template = `
            <style>
                :host {
                    display: inline-block;
                    position: relative;
                    width: 28px;
                    height: 28px;
                }
                
                .spinner {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    border: 5px solid rgba(0, 0, 0, 0.1);
                    border-top-color: #E1F7F5;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }

                @media (min-width: )
            </style>
            <div class="spinner"></div>
        `;

    this.shadowRoot.innerHTML = template;
  }
}

customElements.define('loading-spinner', LoadingSpinner);
