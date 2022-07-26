import { Router } from './router.js'

const router = new Router()

router.add('/', '/pages/home.html')
router.add('/contact', '/pages/contact.html')
router.add('/about', '/pages/about.html')
router.add(404, '/pages/404.html')

router.handle()

// const routes = {
//   '/': '/pages/home.html',
//  ,
//   '/about': '/pages/about.html',
//   404: '/pages/404.html'
// }

// //Aciona um evento de click para os botões de voltar do navegador
window.onpopstate = () => router.handle()
//Executando e eportando a função route para o html
window.route = () => router.route()
