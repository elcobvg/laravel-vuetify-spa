import Vue from 'vue'
import Icon from './Icon'
import EmailInput from './form/EmailInput'
import FormFeedback from './form/FormFeedback'
import FormProgress from './form/FormProgress'
import PasswordInput from './form/PasswordInput'
import TextInput from './form/TextInput'
import { HasError, AlertError, AlertSuccess } from 'vform'

Vue.component(Icon.name, Icon)
Vue.component(EmailInput.name, EmailInput)
Vue.component(FormFeedback.name, FormFeedback)
Vue.component(FormProgress.name, FormProgress)
Vue.component(PasswordInput.name, PasswordInput)
Vue.component(TextInput.name, TextInput)
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component(AlertSuccess.name, AlertSuccess)
