export default class Component {
  constructor(params) {
    this.render = this.render || function () {};
    this.divId = params.divId;

    if (params.hasOwnProperty('element')) {
      this.element = params.element;
    }
  }
}
