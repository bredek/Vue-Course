<template> 
    <div> 
        <p>Server sttus: {{ status }}</p> 
        <button v-on:click="changeStatus">Change status</button> 
    </div> 
</template> 
 
<script> 
    export default { 
        data: function(){ 
            return { 
                status: "Ok!" 
            } 
        }, 
        methods: { 
            changeStatus() { 
                this.status = 'Status switched' 
            } 
        } 
    } 
</script> 