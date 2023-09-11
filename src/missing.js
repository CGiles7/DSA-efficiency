
/**
 The missing number problem
 Implement algorithm 1 here
*/
function missing1(A) {
    const N = A.length + 1;
    const seen = new Array(N + 1).fill(false);
  
    for (let i = 0; i < A.length; i++) {
      seen[A[i]] = true;
    }
  
    for (let i = 1; i <= N; i++) {
      if (!seen[i]) {
        return i;
      }
    }
  }
  
  // function missing1(A) {
  //   const N = A.length + 1;
  //   for(let i=1; i<N; i++) {
  //     let found = false;
  //     let j = 0;
  //     while(!found && j<A.length) {
  //     if (i === A[j]) {
  //       let found = true;
  //       j++;
  //     }
  //   } if (!found) {
  //     return i;
  //   }
  //   }
  // }
  
  /**
  The missing number problem
  Implement algorithm 2 here
  */
  function missing2(A) {
    let N = A.length + 1;
    let fullSum = (N * (N + 1)) / 2;
    let sum = 0;
  
    for (let i = 0; i < A.length; i++) {
      sum += A[i];
    }
  
    return fullSum - sum;
  }
  
  // function missing2(A) {
  //   let N = A.length + 1;
  //   let fullSum = (N*(N+1))/2;
  //   let sum = A.reduce((a, b) => a+b, 0);
  //   return fullSum - sum;
  // }
  
  module.exports = {missing1, missing2};