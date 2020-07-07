customElements.define(
  "drop-list-subview",
  class extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.innerHTML = `
<style>
  :host {
    display: block;
  }
</style>
<h4>List One</h4>
<drop-list>
  <drop-list-item>One - 1</drop-list-item>
  <drop-list-item>Two - 2</drop-list-item>
  <drop-list-item>Three - 3</drop-list-item>
  <drop-list-item>Four - 4</drop-list-item>
  <drop-list-item>Five - 5</drop-list-item>
  <drop-list-item>Six - 6</drop-list-item>
</drop-list>

<h4>List Two</h4>
<drop-list></drop-list>
      `;
    }
  }
);
