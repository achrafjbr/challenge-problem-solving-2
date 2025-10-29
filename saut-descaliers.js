function probabiltyWays(way) {
  if (way === 0) {
    return 1; 
  }
  if (way < 0) {
    return 0; 
  }

  const ways = new Array();
  ways[0] = 1;
  ways[1] = 1;
  
  for (let i = 2; i <= way; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
  }
  
  return ways[way];
}

console.log(probabiltyWays(4));
