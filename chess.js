var size=8;
var chessboard  = '';

for (var i= 0; i < size; i++){
  for (var j= 0; j < size; j++){
    if ((i+j) % 2 == 0) {
      chessboard += '#';
  } else {
  chessboard += ' ';
}
}

chessboard += '\n';

}

console.log(chessboard);
