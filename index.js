function theBeatlesPlay(musicians, instruments) {
  var myArr = []
  for( var i = 0; i < musicians.length; i++) {
    myArr.push(musicians[i]+ ' plays '+(instruments[i]))
  }
  return myArr;
}

function johnLennonFacts(array) {
 var facts = [];
  while(array.length > 0) {
    facts.push(array + '!!!');
  }
  return facts;
}


