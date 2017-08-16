<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-header></app-header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <servers-list></servers-list>
            </div>
            <div class="col-xs-12 col-sm-6">
                <server-details></server-details>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
               <app-footer></app-footer>
            </div>
        </div>
    </div>
</template>

<script>

    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    import ServerDetails from './components/ServerDetails.vue'
    import Servers from './components/Servers.vue'

    export default{
        // registering components LOCALLY
        components: {
            'app-header': Header,
            'app-footer': Footer,
            'server-details': ServerDetails,
            'servers-list': Servers
        }
    }
</script>

<style>

</style>
