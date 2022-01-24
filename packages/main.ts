import type { App } from 'vue'

import Arrow from './src/arrow.vue'

import AuthSuccess from './src/auth-success.vue'

import Auth from './src/auth.vue'

import Close from './src/close.vue'

import Components from './src/components.vue'

import Document from './src/document.vue'

import ErrorMessage from './src/error-message.vue'

import Error from './src/error.vue'

import Execute from './src/execute.vue'

import Fail from './src/fail.vue'

import InfoMessage from './src/info-message.vue'

import Load from './src/load.vue'

import Loading from './src/loading.vue'

import Refresh from './src/refresh.vue'

import Restart from './src/restart.vue'

import Rocket from './src/rocket.vue'

import Search from './src/search.vue'

import SourceCode from './src/source-code.vue'

import Star from './src/star.vue'

import SuccessMessage from './src/success-message.vue'

import Success from './src/success.vue'

import Top from './src/top.vue'

import WarningMessage from './src/warning-message.vue'

const componentList = [
  Arrow,
  AuthSuccess,
  Auth,
  Close,
  Components,
  Document,
  ErrorMessage,
  Error,
  Execute,
  Fail,
  InfoMessage,
  Load,
  Loading,
  Refresh,
  Restart,
  Rocket,
  Search,
  SourceCode,
  Star,
  SuccessMessage,
  Success,
  Top,
  WarningMessage,
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
  Arrow,
  AuthSuccess,
  Auth,
  Close,
  Components,
  Document,
  ErrorMessage,
  Error,
  Execute,
  Fail,
  InfoMessage,
  Load,
  Loading,
  Refresh,
  Restart,
  Rocket,
  Search,
  SourceCode,
  Star,
  SuccessMessage,
  Success,
  Top,
  WarningMessage,
}
