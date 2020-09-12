import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import accountStore from '../../Modules/Accounts/Resources/assets/js/store'
export default new Vuex.Store({
    modules: {
        accountStore
    },
    state: {
        name: 'Ovi'
    }
})
