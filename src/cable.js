/**
 The cable problem
 Implement algorithm 1 here
*/
function cable1(currentLength, requiredLength, saleLength) {
    if (currentLength >= requiredLength) {
      return 0;
    }
    const distance = requiredLength - currentLength;
    const count = Math.ceil(distance / saleLength);
    return count;
  }
  
  
  // function cable1(currentLength, requiredLength, saleLength) {
  //   let count = 0;
  //   let i = currentLength;
  //   while(i<requiredLength) {
  //     i+=saleLength;
  //     count++;
  //   }
  //   return count;
  // }
  /**
   The cable problem
   Implement algorithm 2 here
  */
  function cable2(currentLength, requiredLength, saleLength) {
    if (currentLength >= requiredLength) {
      return 0;
    }
    const distance = requiredLength - currentLength;
    const total = Math.ceil(distance / saleLength);
    return total;
  }
  
  
  // function cable2(currentLength, requiredLength, saleLength) {
  //   let distance = requiredLength-currentLength;
  //   let total = Math.ceil(distance/saleLength);
  //   return total;
  // }
  
  module.exports = {cable1, cable2};