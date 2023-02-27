let arr = [20, 30, 40];
console.log("before", arr);

arr[0] = arr[0] + 5;
console.log("after", arr);
let ss;
ss = "2021-12-20";
let p = "";
p = ss.substring(5, 7);
console.log(p);
let day;
let a;
a = parseInt(p);
switch (a) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 12:
    day = "Saturday";
    break;
  default:
}
console.log(day);
