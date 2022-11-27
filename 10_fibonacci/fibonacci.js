const fibonacci = function(n) {
  if(n<0) {
    return "OOPS"
  } else {
    if(typeof(n) === 'string') {
      n = parseInt(n);
    }
    let n1 = 0, n2 = 1, nextTerm;
    for (let i = 1; i <= n; i++) {
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
    };
    return n1
  }


};

// Do not edit below this line
module.exports = fibonacci;
