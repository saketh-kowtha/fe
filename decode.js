function decode(message) {
  const result = [];
  let i = 0, j = 0, state = 'DOWN';
  
  while (i < message.length && j < message[0].length && result.length <= message[0].length) {
    for (let row = i, col = j; row < message.length && col < message[0].length; row++, col++) {
      result.push(message[row][col]);
    }
    
    i = message.length - 1;
    j = col - 1;
    state = 'UP';
    
    for (let row = i - 1, col = j + 1; row >= 0 && col < message[0].length; row--, col++) {
      result.push(message[row][col]);
    }
    
    i = 0;
    j = col;
    state = 'DOWN';
  }
  
  return result;
}
