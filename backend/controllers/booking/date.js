import expressAsyncHandler from 'express-async-handler';
import Artist from '../../models/Artist.js';
import Customer from '../../models/Customer.js';
import moment from 'moment';


export const getFreeDate = expressAsyncHandler(async(req, res) => {
    
    const customer = await Customer.findById(req.customer._id);
    if (!customer) throw new Error('Customer not found');

    const { artist: { _id } } = req.body;
    const artist = await Artist.findById(_id);

    // Fake Date:
    artist.schedule = {
        days: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه',],
        times: [9, 10, 11, 12, 13, 14, 15],
    };

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

    var futureDates = getFutureDates(7);

    res.json(futureDates);

});
