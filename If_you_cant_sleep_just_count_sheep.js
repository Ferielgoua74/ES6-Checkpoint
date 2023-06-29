const countSheep = function(num) {
    return [...Array(num).keys()].reduce((res, i) => res + (i + 1) + ' sheep...', '');
  }
