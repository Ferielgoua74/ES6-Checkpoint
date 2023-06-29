summation = num => num ? num + summation(num - 1) : num;
