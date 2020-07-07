customElements.define(
  "drop-list",
  class extends HTMLElement {
    constructor() {
      super();
      this.addEventListener("drop", this.__dzDropHandler.bind(this));
      this.addEventListener("dragover", this.__dzDragover.bind(this));
      this.addEventListener("dragleave", this.__dzDragLeave.bind(this));
      this.setAttribute("dropzone", "move");

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.innerHTML = `
<style>
  :host {
    display: block;
    border: 2px dotted grey;
    min-height: 100px;
  }
  :host([active]) {
    border: 2px dotted red;
  }
</style>
<slot></slot>
`;
    }

    /**
     * Functionality for the list container once and item has been dropped
     * @param {object} event drop
     */
    __dzDropHandler(event) {
      event.preventDefault();
      this.appendChild(this.__draggingElement);
      this.removeAttribute("active");
      this.__draggingElement = null;
    }

    __dzDragLeave() {
      this.removeAttribute("active");
    }

    /**
     * Functionality for the list container once we are hover on the list
     * @param {object} event drop
     */
    __dzDragover(event) {
      event.preventDefault();
      this.setAttribute("active", "");
      let found;

      if (!this.__draggingElement) {
        // find what we're looking for in the composed path that isn't a slot
        found = event.composedPath().find((i) => {
          if (i.nodeType === 1 && i.nodeName !== "SLOT") {
            return i;
          }
        });

        if (found) {
          // find where we are deep in the change
          const theLowestShadowRoot = found.getRootNode();
          this.__draggingElement = theLowestShadowRoot.querySelector(
            "[dragging]"
          );
        } else {
          this.__draggingElement = document.querySelector("[dragging]");
        }
      }
    }
  }
);
