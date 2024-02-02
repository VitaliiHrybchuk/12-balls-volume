'use strict';

let result = 0;
const borderX2 = 0.02;
const diameter = 0.5;

for (let n = 0; n < 12; n++){
  let currentDiameter = diameter + borderX2*n;
  let currentVolume = 4 / 3 * Math.PI * ((currentDiameter/2) **3);
result = result + currentVolume;
}
console.log(`Sum of volumes of 12 balls equals ${result} cubic meters`)