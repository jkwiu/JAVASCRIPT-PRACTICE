import Component from '../lib/component.js';

export default class Table extends Component {
  constructor(params) {
    super({
      divId: params.divId,
      element: document.querySelector('.' + params.class),
    });
  }

  render() {
    console.log(super.divId);
    console.log(this.divId);
    this.element.innerHTML = `
    <table id=${this.divId}>
      <caption>테이블1</caption>
      <tbody>
        <tr>
          <td>그림</td>
          <td><strong>WTG01</strong></td>
        </tr>
        <tr>
          <td><strong>${this.divId}</strong></td>
          <td>m/s</td>
        </tr>
        <tr>
          <td><strong>100</strong></td>
          <td>rpm</td>
        </tr>
        <tr>
          <td><strong>${this.divId}</strong></td>
          <td>kW</td>
        </tr>
        <tr>
          <td><strong>100</strong></td>
          <td>deg</td>
        </tr>
      </tbody>
    </table>
    `;
  }
}
