// export let hippo = {
//   foodLevel: 10,
//   setHunger: function() {
//     const hungerInterval = setInterval(() => {
//       this.foodLevel--;
//       if (this.didYouGetEaten() === true) {
//         clearInterval(hungerInterval);
//         return "You got eaten!";
//       }
//     }, 1000);
//   },
//   didYouGetEaten() {
//     if (this.foodLevel > 0) {
//       return false;
//     } else {
//       return true;
//     }
//   },
//   feed: function(amount) {
//     let that = this;
//     return function(food) {
//       that.foodLevel += amount;
//       return `The hippo ate the ${food}! Food level goes up ${amount}!`;
//     };
//   }
// };
// hippo.eatSmall = hippo.feed(5);
// hippo.eatMedium = hippo.feed(10);
// hippo.eatLarge = hippo.feed(15);
// hippo.eatLaxative = hippo.feed(-10);
