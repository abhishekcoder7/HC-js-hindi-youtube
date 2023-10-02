function spreadElements(x, z) {
    console.log(x, z, ...this);
  }
  
  const x = 1;
  const z = 3;
  const y = [2, 4, 5];
  
  spreadElements.apply(y, [x, z]);