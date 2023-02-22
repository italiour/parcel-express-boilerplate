import { lenis } from './Utils/lenis'
import { Navigation } from './Components/Navigation/navigation'
import { Router } from './Utils/router'
import { Footer } from './Components/Footer/footer'

export class App {

  constructor() {
		
		this.lenis = lenis

		this.root = new Router()
    this.navigation = new Navigation(this.root)
		this.footer = new Footer()

  }
 
}

new App()
