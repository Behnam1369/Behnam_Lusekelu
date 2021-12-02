function countApplesAndOranges(s, t, a, b, apples, oranges) {
  var countApple = 0;
  var countOrange = 0;
  apples.map(function (el) {
    if (el + a >= s && el + a <= t) countApple++;
  });
  oranges.map(function (el) {
    if (el + b >= s && el + b <= t) countOrange++;
  });
  console.log(countApple);
  console.log(countOrange);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
