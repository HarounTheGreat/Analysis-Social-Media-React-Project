// return fillring data without change the data structur
export const filtring_by_date = (data, from_Date, to_Date, language) => {
  let filtring_data = [];
  if (language === undefined) {
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
  } else {
    filtring_data = [];
  }
  return filtring_data;
};

// returns An Array contains the used changuage
// example : [en , fr , ar , hi]

export const Languages_used = (Y) => {
  let R = [];
  for (let i = 0; i < Y.length; i++) {
    R.push(Y[i].Language);
  }
  let res;
  res = R.filter((item, index) => R.indexOf(item) === index);
  return res;
};

// returns number of comments Example
// Languages_used = [en , fr , ar , hi]
// function returns [200,24,5,20]
// that's mean there is
//  -200 comments writen in English
//  -24 comments writen in French
//  -200 comments writen in Arabic
//  -24 comments writen in Hindi
export const Comment_by_language = (data, Languages_used) => {
  let res = [];
  let position;
  for (let h = 0; h < Languages_used.length; h++) {
    res.push(0);
  }
  for (let i = 0; i < data.length; i++) {
    position = Languages_used.indexOf(data[i].Language);
    res[position] = res[position] + 1;
  }
  return res;
};

export const Filter_data_by_language = (data, Languages_used) => {
  let res = [];
  let position;
  for (let h = 0; h < Languages_used.length; h++) {
    res.push([]);
  }
  for (let i = 0; i < data.length; i++) {
    position = Languages_used.indexOf(data[i].Language);
    res[position].push(data[i]);
  }
  return res;
};
