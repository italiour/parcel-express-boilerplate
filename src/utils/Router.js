import { Home } from '../Pages/Home/home'

export class Router {

	constructor() {

		this.routes = {
			'/' : new Home(),
		}

		this.DOM = document.getElementById('root')
		this.DOM.innerHTML = this.routes[window.location.pathname].getHtml()
    this.routes[window.location.pathname].fetchData()

		window.addEventListener('popstate', () => {
      this.DOM.innerHTML = this.routes[window.location.pathname].getHtml()
    })

	}
 
	onNavigate (pathName) {

    window.history.pushState({}, pathName, window.location.origin + pathName)

		this.DOM.innerHTML = this.routes[pathName].getHtml()
    this.routes[pathName].fetchData()

  }

}