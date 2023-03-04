// let arr = [20, 30, 40];
// ("before", arr);

// arr[0] = arr[0] + 5;
// ("after", arr);
// let ss;
// ss = "2021-12-20";
// let p = "";
// p = ss.substring(5, 7);
// (p);
// let day;
// let a;
// a = parseInt(p);
// switch (a) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 12:
//     day = "Saturday";
//     break;
//   default:
// }
// (day);

var dateFrom = "02/05/2013";
var dateTo = "02/09/2013";
var dateCheck = "02/07/2013";

var d1 = dateFrom.split("/");
"d1=", d1;
var d2 = dateTo.split("/");
"d2=", d2;
var c = dateCheck.split("/");
"c", c;

var from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]); // -1 because months are from 0 to 11
var to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
var check = new Date(c[2], parseInt(c[1]) - 1, c[0]);

from, "from \n", to, "to \n", check, "check \n";

check > from && check < to;
