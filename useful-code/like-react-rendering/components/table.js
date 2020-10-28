import Component from "../lib/component.js";

export default class Table extends Component {
  constructor(params) {
    super({
      divId: params.divId,
      element: document.querySelector(".contents"),
    });
  }

  render() {
    const table = document.createElement("table");
    const cap = document.createElement("caption");
    const tbody = document.createElement("tbody");

    const tr1 = document.createElement("tr");
    const tr2 = document.createElement("tr");
    const tr3 = document.createElement("tr");
    const tr4 = document.createElement("tr");
    const tr5 = document.createElement("tr");

    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");

    const strong1 = document.createElement("strong");
    const strong2 = document.createElement("strong");
    const strong3 = document.createElement("strong");
    const strong4 = document.createElement("strong");
    const strong5 = document.createElement("strong");
    strong1.textContent = 1;
    strong2.textContent = 2;
    strong3.textContent = 3;
    strong4.textContent = 4;
    strong5.textContent = 5;

    td1.append(strong1);
    td2.append(strong2);
    td3.append(strong3);
    td4.append(strong4);
    td5.append(strong5);

    tr1.append(td1);
    tr2.append(td2);
    tr3.append(td3);
    tr4.append(td4);
    tr5.append(td5);

    tbody.append(tr1, tr2, tr3, tr4, tr5);

    table.append(tbody, cap);

    table.setAttribute("id", this.divId);

    this.element.append(table);

    console.log(table);

    //   let tableComponent = `
    //   <table id=${this.divId}>
    //     <caption>테이블1</caption>
    //     <tbody>
    //       <tr>
    //         <td>그림</td>
    //         <td><strong>WTG01</strong></td>
    //       </tr>
    //       <tr>
    //         <td><strong>${this.divId}</strong></td>
    //         <td>m/s</td>
    //       </tr>
    //       <tr>
    //         <td><strong>100</strong></td>
    //         <td>rpm</td>
    //       </tr>
    //       <tr>
    //         <td><strong>${this.divId}</strong></td>
    //         <td>kW</td>
    //       </tr>
    //       <tr>
    //         <td><strong>100</strong></td>
    //         <td>deg</td>
    //       </tr>
    //     </tbody>
    //   </table>
    //   `;
    //   console.log(super.divId);
    //   console.log(this.divId);
    //   this.element.append = tableComponent;
  }
}
