<template>
    <div>
        <h1>Accounts page</h1>
        <h1>{{$store.state.name}}</h1>
        <h1>{{accountGetters}}</h1>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        created() {
            console.log(this.$store)
        },
        computed: {
            ...mapGetters({
                accountGetters: 'accountStore/accountGetters'
            })
        }
    }
</script>
