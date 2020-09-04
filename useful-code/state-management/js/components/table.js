import Component from '../lib/component.js';
import store from '../store/index.js';

export default class Table extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector('section[id="content"]'),
    });
  }

  render() {
    this.element.innerHTML = `
      ${store.state.items
        .map((item) => {
          return `
        <table>
          <tbody>
            <tr>
              <th>Count</th>
              <td>${item}</td>
            </tr>
            <tr>
              <th>Time</th>
              <td>${item}</td>
            </tr>
          </tbody>
        </table>`;
        })
        .join('  ')}
    `;
  }
}
