const Home = () => System.import(/* webpackChunkName: "home" */'./pages/Home.vue')

export const routes = [
  {path: '/', name: 'home', component: Home, titulo: 'Home', menu: true},
  {path: '*', component: Home, menu:false}
]
