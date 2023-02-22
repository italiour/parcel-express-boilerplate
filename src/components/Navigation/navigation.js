import { App } from "../../index.js"

export class Navigation {

  constructor() {

    this.DOM = document.getElementById('navigation')
    this.DOM.innerHTML = this.getHtml()
    this.DOM.addEventListener('click', this)

    this.DOM.homeLink = this.DOM.querySelector('.home__link')

  }

  handleEvent(e) {
    this.clickEvent(e);
  }

  clickEvent(e) {

    e.preventDefault()

    switch(e.target){
      case this.DOM.homeLink:
        App.onNavigate('/')
        break
      default:
        break
    }

  }

  getHtml() {
    return `<a href="#" class="home__link"></a>`
  }
  
}
