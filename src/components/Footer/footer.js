import { App } from "../../index.js"

export class Footer {

  constructor() {

    this.DOM = document.getElementById('footer')
    this.DOM.innerHTML = this.getHtml()
    this.DOM.addEventListener('click', this)

  }

  handleEvent(e) {
    this.clickEvent(e);
  }

  clickEvent(e) {

    e.preventDefault()

    switch(e.target){
      default:
        break
    }

  }

  getHtml() {
    return `<div>Footer</div>`
  }
}
