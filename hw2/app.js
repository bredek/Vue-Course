new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert:function(){
                alert('Alert!');
            },
            getValue:function(e){
                this.value = e.target.value;
            }
        }
    });