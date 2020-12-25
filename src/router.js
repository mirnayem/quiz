import {createRouter , createWebHistory} from 'vue-router'

import Question from './components/Question'
import Home from './components/Home'
const routes = [
   { path: '/' , component: Home},
   { path: '/questions' , component: Question, name:'questions'}
 

  ]
  
  const router = createRouter({
    routes, 
    history: createWebHistory(),
    
  })


  export default router