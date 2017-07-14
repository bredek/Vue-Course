new Vue({
  el: "#app",
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      gameIsRunning: false
    }
  },
  methods: {
    startGame: function () {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.gameIsRunning = true;
    },
    attack: function () {
      var vm = this;
      function randomInteger(min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
      }
      // damage calc
      var playerAttackSize = randomInteger(1, 10);
      var monsterAttackSize = randomInteger(3, 10);
      // attack
      this.playerHealth -= monsterAttackSize;
      this.monsterHealth -= playerAttackSize;

      if(this.playerHealth <= 0 || this.monsterHealth <=0){
        this.gameIsRunning = false;
        alert("This is the end for you my friend!");
      }
    },
    specialAttack: function () {

    },
    heal: function () {

    },
    giveUp: function () {

    },
  }
})