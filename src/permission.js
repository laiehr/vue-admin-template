import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

import getPageTitle from '@/utils/get-page-title'
import store from './store'
// import { Message } from 'element-ui'
// import { getToken } from '@/utils/auth' // get token from cookie
NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  //  const hasToken = getToken()
  /*
  if (hasToken) {

  } else {
    /* has no token*/


  if (to.path !== '/login') {
     const hasGetUserInfo = store.getters.name
     console.log(hasGetUserInfo)
     if (hasGetUserInfo) {
        next()
      } else {
        try {
          // get user info
          // await store.dispatch('user/getInfo',store.getters.id)

          next()
        } catch (error) {
          // remove token and go to login page to re-login
          // await store.dispatch('user/resetToken')
          console.log("error")
          Message.error(error || 'Has Error')
          // next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }

    }


  if (whiteList.indexOf(to.path) !== -1) {
    // in the free login whitelist, go directly
    next()
  } else {
    // other pages that do not have permission to access are redirected to the login page.
    next(`/login?redirect=${to.path}`)
    NProgress.done()
  }
  // }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
