for(var i = 1; i<9; i++) {
    var akkk = [];
    for ( var j = 1; j < i; j++){
        akkk.push("*");
    }
    console.log(...akkk);
}
//--------------------------------------


var chessBoard= '',
    size= 9,
    c;

for(var i = 1; i < size ; i++) {
  c= i%2 ? '# ' : ' #';
  for(var j = 0 ; j < size/2 ; j++) {
    chessBoard+= c;
  }
  chessBoard+= '\n';
}

console.log(chessBoard);
//-----------------------------------------


for( let j = 1; j <= 100; j++ )
{   
    str = '';       

    if( j%3 == 0 )
    {
        str += 'Fizz';
    } 

    if( j%5 == 0 )
    {
        str += 'Buzz';
    }   

    console.log( str ? str : j );
}















