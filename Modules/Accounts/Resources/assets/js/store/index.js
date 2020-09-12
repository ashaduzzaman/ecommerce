export default {
    namespaced: true,
    state: {
        accountModule: ' this is account module sotre'
    },
    getters: {
        accountGetters(state){
            return state.accountModule
        }
    }
}
