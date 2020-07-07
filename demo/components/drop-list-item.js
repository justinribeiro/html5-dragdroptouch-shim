customElements.define(
  "drop-list-item",
  class extends HTMLElement {
    constructor() {
      super();
      this.addEventListener("dragstart", this.__dragStart.bind(this));
      this.addEventListener("dragend", this.__dragEnd.bind(this));
      this.addEventListener("drop", this.__dragEnd.bind(this));
      this.addEventListener("dragover", this.__dragOver.bind(this));
      this.addEventListener("dragleave", this.__dragLeave.bind(this));

      // You _cannot_ just set draggable without the string "true"; it will not
      // work
      this.setAttribute("draggable", "true");

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.innerHTML = `
<style>
  :host {
    display: block;
    padding: 0.5rem;
    background-color: #f1f1f1;
    margin: 0.25rem;
  }
  :host([dragging]) {
    background-color: hotpink;
    color: #fff;
  }
</style>
<slot></slot>
`;
    }

    __dragStart(event) {
      event.dataTransfer.setData("text/html", "test");
      this.setAttribute("dragging", "");
    }

    __dragEnd() {
      this.removeAttribute("over");
      this.removeAttribute("dragging");
    }

    __dragOver() {
      if (this.hasAttribute("dragging")) {
        this.removeAttribute("over");
      } else {
        this.setAttribute("over", "");
      }
    }

    __dragLeave() {
      this.removeAttribute("over");
    }
  }
);
