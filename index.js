// Import stylesheets
var arr = [2033, 2054, 3234, 5432, 2356, 4532];
var newArr = [];
arr.map((item, index) => {
  var str = item.toString();
  var num = str.length;
  var element = 0;
  // for (i = 0; i < str.length; i++) {
  //   element = str[num - 2] + str[num - 1];
  // }
  newArr.push(parseInt(str.slice(str.length - 2)));
  return newArr;
});
console.log('newArr---', newArr);
var dublicateFlag = false;
newArr.map((item, index) => {
  for (i = index + 1; i < newArr.length; i++) {
    if (item == newArr[i]) {
      dublicateFlag = true;
    }
  }
});
// console.log('there is dublicate element');
dublicateFlag
  ? console.log('There is dublicate element')
  : console.log('There is no dublicate element');
