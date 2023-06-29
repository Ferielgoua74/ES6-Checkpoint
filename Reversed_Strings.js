const solution = str => (str === '') ? '' : solution(str.substr(1)) + str.charAt(0);
