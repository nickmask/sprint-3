function cube(a) {
  return a * a;
}

function absolute(a)  {
  if ( a > 0 ) {
  return a; 
} else {
  return a * -1
  }
}

var names = ["Nick", "John", "Fred", "Will", "Frank"]

var nameY = names.map(function (x) {return x + "y"});

function makeKiaOra(name) {
  return ("Kia Ora," + " " + name) 
}

kiaOraJoe = makeKiaOra("Joe")
