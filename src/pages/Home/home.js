import { getData } from '../../Utils/transferData.js'

export class Home {

  constructor() {}
  
  getHtml() {
    document.title = 'Page Name'
    return `<div class="home"></div>`
  }

  fetchData = async () => {
    var data = await getData()
    if(data.status) {
      console.log(data)
    }
  }
}
