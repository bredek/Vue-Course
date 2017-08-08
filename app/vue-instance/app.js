var vm1 = new Vue({
  el: '#app',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function () {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      console.log(this.$refs);
      this.$refs.myButton.innerText = 'Test!';
    },
    updateTitle: function (title) {
      this.title = title;
    },
    destroy: function(){
      this.$destroy();
    }
  },
  computed: {
    lowercaseTitle: function () {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function (value) {
      alert('Title changed, new value: ' + value);
    }
  },
  beforeCreate: function(){
    console.log('beforeCreate()');
  },
  created: function(){
    console.log('created()');
  },
  beforeMount: function(){
    console.log('beforeMount()');
  },
  mounted: function(){
    console.log('mounted()');
  },
  beforeUpdate: function(){
    console.log('beforeUpdate()');
  },
  updated: function(){
    console.log('updated()');
  },
  beforeDestroy: function(){
    console.log('beforeDestroy()');
  },
  destroyed: function(){
    console.log('destroyed()');
  },
});


Vue.component('my-component', {
  template: '<div>My first component</div>'
})


setTimeout(function () {
  vm1.title = 'Timer triggered!';
}, 1000);

// manual mounting
// vm1.$mount("#app");
console.log(vm1);
console.log(vm1.$data);
vm1.$refs.heading.innerText = 'Changing heading via refs';


var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'Another instance'
  },
  methods: {
    someAction: function () {
      vm1.title = 'Something is changed!';
    }
  }
});


// var vm3 = new Vue({
//   template: '<h1>Hello from template</h1>'
// });

// vm3.$mount('#app3');
