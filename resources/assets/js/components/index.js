import Vue from 'vue'
import Icon from './Icon'
import { HasError, AlertError, AlertSuccess } from 'vform'

Vue.component(Icon.name, Icon)
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component(AlertSuccess.name, AlertSuccess)
