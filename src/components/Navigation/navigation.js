export class Navigation {

  constructor(router) {

		this.router = router
    this.DOM = document.getElementById('navigation')
    this.DOM.innerHTML = this.getHtml()
    this.DOM.addEventListener('click', this)

    this.DOM.homeLink = this.DOM.querySelector('.home__link')

  }

  handleEvent(e) {
    this.clickEvent(e)
  }

  clickEvent(e) {

    e.preventDefault()

    switch(e.target){
      case this.DOM.homeLink:
        this.router.onNavigate('/')
        break
      default:
        break
    }

  }

  getHtml() {
    return `<a href="#" class="home__link"></a>`
  }
  
}
