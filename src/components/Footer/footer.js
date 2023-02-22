export class Footer {

  constructor() {

    this.DOM = document.getElementById('footer')
    this.DOM.innerHTML = this.getHtml()

  }

  getHtml() {
    return `<div></div>`
  }
}
