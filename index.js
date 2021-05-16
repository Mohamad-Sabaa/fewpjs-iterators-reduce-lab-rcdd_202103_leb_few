const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

<<<<<<< HEAD
let totalBatteries = batteryBatches.reduce(function(total, batteries)  {
  return total +batteries;
})
=======
function reducer(batteries) {
  let totalBatteries = 0;
  batteries.reduce(totalBatteries, batteryBatches) {
    return totalBatteries + batteryBatches;
  }
}
>>>>>>> 07744a3ae2c6094f06de5d7e67025a18bf911bce
