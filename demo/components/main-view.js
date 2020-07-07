customElements.define(
  "main-view",
  class extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.innerHTML = `
              <drop-list-subview></drop-list-subview>
            `;
    }
  }
);
