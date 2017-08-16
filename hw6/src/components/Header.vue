<template>
    <div>
        <header>
            <h1>{{ title }}</h1>
        </header>
    </div>
</template>

<script> 
    export default { 
        data: function(){ 
            return { 
                title: "Server Status" 
            } 
        }
    } 
</script> 

<style lang="sass" scoped>
    header{
        h1{
            color: red;
        }
    }
</style> 

