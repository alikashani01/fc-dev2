import moment from 'moment';

function getFutureDates(numDays) {

    var result = [];

    var currentDate = moment().startOf('day');
  
    for (var i = 0; i < numDays; i++) {
        
        var futureDate = moment(currentDate).add(i, 'days');
        
        var dayName = getDayName(futureDate.format('d'));
        var dayNumber = futureDate.format('D');
        var monthName = getMonthName(futureDate.format('M'));
        
        var times = [6, 7, 8, 10, 11, 22, 23];
        
        var dateObject = {
            dayName,
            dayNumber,
            month: monthName,
            times,
        };
        
        result.push(dateObject);
    };
    return result;
};

function getDayName(dayIndex) {
    var days = ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"];
    return days[dayIndex];
};

function getMonthName(monthIndex) {
    var months = [
        "فروردین", "اردیبهشت", "خرداد",
        "تیر", "مرداد", "شهریور",
        "مهر", "آبان", "آذر",
        "دی", "بهمن", "اسفند"
    ];
    return months[monthIndex - 4];
};

export const futureDates = getFutureDates(10);