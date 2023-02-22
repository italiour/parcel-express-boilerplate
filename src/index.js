import { Footer } from './Components/Footer/footer'
import { Navigation } from './Components/Navigation/navigation'
import { Home } from './Pages/Home/home'

const rootDiv = document.getElementById('root')

const routes = {
  '/' : new Home(),
}

export class App {

  constructor() {

    this.navigation = new Navigation()
		this.footer = new Footer()
    rootDiv.innerHTML = routes[window.location.pathname].getHtml()

    routes[window.location.pathname].fetchData()

    window.addEventListener('popstate', () => {
      rootDiv.innerHTML = routes[window.location.pathname].getHtml()
    })

  }

  static onNavigate (pathName) {

    window.history.pushState(
      {},
      pathName,
      window.location.origin + pathName
    )

    rootDiv.innerHTML = routes[pathName].getHtml()

  }
 
}

new App()
