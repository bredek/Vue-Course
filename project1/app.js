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
      // attack
      this.playerHealth -= this.randomDamage(1, 10);
      this.monsterHealth -= this.randomDamage(3, 10);
      this.checkWin();
    },
    specialAttack: function () {
      // special attack
      this.playerHealth -= this.randomDamage(10, 20);
      this.monsterHealth -= this.randomDamage(3, 10);
      this.checkWin();
    },
    heal: function () {

    },
    giveUp: function () {

    },
    randomDamage: function (min, max) {
      var rand = min + Math.random() * (max + 1 - min);
      rand = Math.floor(rand);
      return rand;
    },
    checkWin: function () {
      if (this.monsterHealth <= 0) {
        if (confirm("You won! New Game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You lost( New Game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
})