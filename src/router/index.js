import { createRouter, createWebHashHistory } from 'vue-router'
import CommonNav from '../components/CommonNav.vue'
import HappyNav from '../components/HappyNav.vue'
import ToolNav from '../components/ToolNav.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path:'/',component:CommonNav},
    { path: '/comnav', component: CommonNav },
    { path: '/hapnav', component: HappyNav },
    {path: '/toolnav', component: ToolNav}
    
  ]
})
export default router