import Vue from 'vue'
import Router from 'vue-router'
import AES from '@/components/AES'
import DES from '@/components/DES'
import SHA from '@/components/SHA'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/aes'
    },
    {
      path: '/aes',
      name: 'AES',
      component: AES
    },
    {
      path: '/des',
      name: 'EDS',
      component: DES
    },
    {
      path: '/sha',
      name: 'SHA',
      component: SHA
    }
  ]
})
