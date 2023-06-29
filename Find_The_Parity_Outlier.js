function findOutlier(integers) {
    function par(i) { return i & 1; }
  
    let parity = par(integers[0]);
    if (parity != par(integers[1])) {
      if (parity == par(integers[2]))
        // [0] and [2] are the true parity so [1] is the outlier
        return integers[1];
  
      // [1] and [2] are the true parity so [0] is the outlier
      return integers[0];
    }
    return integers.find((i) => par(i) != parity);
  }

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
