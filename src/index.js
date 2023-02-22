import { Navigation } from "./components/Navigation/navigation"
import { Home } from "./pages/Home/home"

const rootDiv = document.getElementById('root')

const routes = {
  '/' : new Home(),
}

export class App {

  constructor() {

    this.navigation = new Navigation()
    rootDiv.innerHTML = routes[window.location.pathname].getHtml()
    routes[window.location.pathname].fetchData()

    window.addEventListener('popstate', (e) => {
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
