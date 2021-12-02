unction maxWidth(widthArr, casesArr) {
  casesArr.map(function (el, i) {
    var start = el[0];

    var filteredWidthArr = widthArr.filter(function (el2, i2) {
      return i2 >= el[0] && i2 <= el[1];
    });

    var min_of_array = Math.min.apply(Math, filteredWidthArr);

    console.log(min_of_array);
  });
}

maxWidth(
  [2, 3, 1, 2, 3, 2, 3, 3],
  [
    [0, 3],
    [4, 6],
    [6, 7],
    [3, 5],
    [0, 7],
  ]
);
