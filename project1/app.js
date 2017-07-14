new Vue({
  el: "#app",
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      gameIsRunning: false,
      battleLog: []
    }
  },
  methods: {
    startGame: function () {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.gameIsRunning = true;
      this.battleLog = [];
    },
    attack: function () {
      // attack
      var monsterAttack = this.randomDamage(3, 10),
        playerAttack = this.randomDamage(1, 10);

      this.playerHealth -= monsterAttack;
      this.monsterHealth -= playerAttack;

      this.battleLog.unshift({
        isPlayer: true,
        text: "Player attacks with " + playerAttack
      })
      this.battleLog.unshift({
        isPlayer: false,
        text: "Monster attacks with " + monsterAttack
      })

      this.checkWin();
    },
    specialAttack: function () {
      var monsterAttack = this.randomDamage(3, 10),
        playerAttack = this.randomDamage(10, 10);
      // special attack
      this.monsterHealth -= playerAttack;
      this.playerHealth -= monsterAttack;

      this.battleLog.unshift({
        isPlayer: true,
        text: "Player attacks with " + playerAttack
      })
      this.battleLog.unshift({
        isPlayer: false,
        text: "Monster attacks with " + monsterAttack
      })
      this.checkWin();
    },
    heal: function () {
      // special attack
      var healSize = 10,
        monsterAttack = this.randomDamage(3, 10);

      if (this.playerHealth <= 100 - healSize) {
        this.playerHealth += healSize;
      } else {
        this.playerHealth = 100;
      }
      this.playerHealth -= monsterAttack;

      this.battleLog.unshift({
        isPlayer: true,
        text: "Player heals " + healSize
      })
      this.battleLog.unshift({
        isPlayer: false,
        text: "Monster attacks with " + monsterAttack
      })
      this.checkWin();
    },
    giveUp: function () {
      this.gameIsRunning = false;
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
          this.battleLog = [];
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You lost( New Game?")) {
          this.startGame();
        } else {
          this.battleLog = [];
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
})