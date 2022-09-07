function stringSum(str) {

  var sum = 0;
  var containsNumber = /\d/.test(str);

  if (containsNumber) {

    var extractNumber = str.match(/[0-9]/g);

    for (i = 0; i < extractNumber.length; i++) {
      var sum = sum + Number(extractNumber[i]);
    }
    console.log(sum);
  } else {
    console.log(sum);
  }
}

var result = stringSum('sl7k2jm4kl7sdm9l sadf');
