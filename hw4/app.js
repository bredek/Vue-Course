new Vue({
  el: '#exercise',
  data: {
    classSwitch: false,
    valueInput: false,
    styles: "color: yellow",
    inputClasses: "",
    anotherClasses: "",
    progress: 1
  },
  computed: {
    effectClass: function () {
      return this.classSwitch ? "highlight" : "shrink";
    },
    trueFalseClass: function () {
      return this.valueInput ? "big" : "";
    }
  },
  methods: {
    startEffect: function () {
      var vm = this;
      setInterval(function () {
        vm.classSwitch = !vm.classSwitch;
      }, 1000);
    },
    getInputClass: function (e) {
      if (e.target.value === "true") {
        this.valueInput = true;
      } else {
        this.valueInput = false;
      }
    },
    startProgress: function () {
      var vm = this,
        interval;
        interval = setInterval(function () {
          vm.progress++;
          if (vm.progress >= 400) {
            clearInterval(interval);
          }
        }, 0.25);

    }
  }
});
