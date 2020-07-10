

exports.getFirstDayOfWeek = function(weekNum, year) {
    var sunday = new Date(year, 0, (1 + (weekNum - 1) * 7));
    while (sunday.getDay() !== 0) {
        sunday.setDate(sunday.getDate() - 1);
    }
    return sunday;
}

exports.addDaystoDate = function(days, date){
  var dat = new Date(date);
  dat.setDate(dat.getDate() + days);
  return dat;
}