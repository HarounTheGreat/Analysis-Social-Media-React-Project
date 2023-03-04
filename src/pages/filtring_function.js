const filtring_function = (data, from_Date, to_Date) => {
  let filtring_data = [];
  var dateCheck = "02-07-2021";
  var d1 = from_Date.split("-");
  var d2 = to_Date.split("-");
  var c;
  var from = new Date(d1[0], parseInt(d1[1]) - 1, d1[2]); // -1 because months are from 0 to 11
  var to = new Date(d2[0], parseInt(d2[1]) - 1, d2[2]);
  var check;
  for (let i = 0; i < data.length; i++) {
    dateCheck = data[i].Year;
    c = dateCheck.split("-");
    check = new Date(c[0], parseInt(c[1]) - 1, c[2]);
    if (check > from && check < to) {
      filtring_data.push(data[i]);
    }
  }
  return filtring_data;
};
export default filtring_function;
