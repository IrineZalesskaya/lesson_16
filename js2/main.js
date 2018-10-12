var str;
str = prompt('Ввести строку');
if (str.length==0) {
	console.log(str='солнце');
} else {
	console.log(str);
}

// var browser =
//     {
//     	name:'Google',
//     	version:'50.0',
//     	date:'2546'
//     	 add: function() {
//     return 'Hello world!';
//        }
//     }

//     console.log(browser.add());

var browser = {
  name: 'Google',
  version: '50',
  add: function() {
    return 'Chrome';
  }
}

console.log(browser);

console.log(browser.name+browser.add());

for (var i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log( i );
  }
}

  var PersonName = 'Alex',
    Status;

switch(PersonName) {
  case 'Max': Status = 'Loser'; break;
  case 'Alex': Status = 'Winner'; break;
  case 'Sam': Status = 'Loser'; break;
  default: Status = 'participant';
}

console.log(PersonName + ' ' + Status);

var x = 5;
var text = x > 5 ? 'x > 5' : x < 5 ? 'x < 5' : 'x = 5';
console.log(text);

var i = 0;
while (i < 8) {
console.log(i);
i++;
}
var m=0;

function myNuumber (число, степень, callback) {
     m=2*2*2*2;
    console.log('Число 2 в степени 4');
    callback();
}  
myNuumber(2, 4, function() {
    console.log('Результат'+' '+ m);
}); 

