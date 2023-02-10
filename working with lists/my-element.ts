import {map} from 'lit/directives/map.js';
import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
// TODO: import map directive.

@customElement('my-element')
class MyElement extends LitElement {
  @state()
  items = new Set(['Apple', 'Banana', 'Grape', 'Orange', 'Lime'])

  render() {
    return html`
      <p>My unique fruits</p>
      <ol>
        ${map(this.items, (item) => html`<li>${item}</li>`)}
        <!-- TODO: Utilize map directive to render items. -->
      </ol>
    `;
  }
}
