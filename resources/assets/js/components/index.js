import Vue from 'vue'
import Icon from './Icon'
import EmailInput from './form/EmailInput'
import ProgressBar from './ProgressBar'
import PasswordInput from './form/PasswordInput'
import SubmitButton from './form/SubmitButton'
import TextInput from './form/TextInput'
import { HasError, AlertError, AlertSuccess } from 'vform'

Vue.component(Icon.name, Icon)
Vue.component(EmailInput.name, EmailInput)
Vue.component(ProgressBar.name, ProgressBar)
Vue.component(PasswordInput.name, PasswordInput)
Vue.component(SubmitButton.name, SubmitButton)
Vue.component(TextInput.name, TextInput)
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component(AlertSuccess.name, AlertSuccess)
