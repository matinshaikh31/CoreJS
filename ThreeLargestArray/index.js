
function tlargest(arr ){
  const str = arr;
  for( i in str){
  
    for (j in str  ){
      
      if( str[i].length > str[j].length){
        var temp = str[i];
        str[i] = str[j];
        str[j]=temp;

      }
    }
  }
  return str[2];
}
///