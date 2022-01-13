import type { App } from 'vue'

import arrow from './src/arrow.vue'

import authSuccess from './src/auth-success.vue'

import auth from './src/auth.vue'

import components from './src/components.vue'

import document from './src/document.vue'

import errorMessage from './src/error-message.vue'

import error from './src/error.vue'

import execute from './src/execute.vue'

import fail from './src/fail.vue'

import infoMessage from './src/info-message.vue'

import load from './src/load.vue'

import loading from './src/loading.vue'

import refresh from './src/refresh.vue'

import restart from './src/restart.vue'

import rocket from './src/rocket.vue'

import search from './src/search.vue'

import sourceCode from './src/source-code.vue'

import star from './src/star.vue'

import successMessage from './src/success-message.vue'

import success from './src/success.vue'

import top from './src/top.vue'

import warningMessage from './src/warning-message.vue'

const componentList = [
  arrow,
  authSuccess,
  auth,
  components,
  document,
  errorMessage,
  error,
  execute,
  fail,
  infoMessage,
  load,
  loading,
  refresh,
  restart,
  rocket,
  search,
  sourceCode,
  star,
  successMessage,
  success,
  top,
  warningMessage,
]

const install: any = (app: App) => {
  componentList.forEach((component: any) => {
    if (component.install) {
      // 执行每个组件的install方法
      app.use(component)
    }
    app.component(component.name, component)
  })
}

export default {
  install,
}

export {
  arrow,
  authSuccess,
  auth,
  components,
  document,
  errorMessage,
  error,
  execute,
  fail,
  infoMessage,
  load,
  loading,
  refresh,
  restart,
  rocket,
  search,
  sourceCode,
  star,
  successMessage,
  success,
  top,
  warningMessage,
}
