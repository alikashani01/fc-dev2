import expressAsyncHandler from 'express-async-handler';
import Customer from '../../../models/Customer.js';
import Book from '../../../models/Book.js';


export const cancel = expressAsyncHandler(async(req, res) => {
    
    const customer = await Customer.findById(req.customer._id);
    
    if (!customer) throw new Error('customer not found');
    
    const book = await Book.findById(req.params.id);
    
    if (book.status === 'لغو شده') return;

    function getPersianDayName(day) {
        const persianDays = [
            "یکشنبه",
            "دوشنبه",
            "سه‌شنبه",
            "چهارشنبه",
            "پنج‌شنبه",
            "جمعه",
            "شنبه"
        ];
        return persianDays[day];
    }
    
    function getPersianMonthName(month) {
        const persianMonths = [
            "فروردین",
            "اردیبهشت",
            "خرداد",
            "تیر",
            "مرداد",
            "شهریور",
            "مهر",
            "آبان",
            "آذر",
            "دی",
            "بهمن",
            "اسفند"
        ];
        return persianMonths[month];
    }
    
    function getCurrentPersianDate() {
        const now = new Date();
        now.setMonth(now.getMonth() - monthsAgo);
        const persianDate = {
            dayNumber: now.getDate(),
            dayName: getPersianDayName(now.getDay()),
            month: getPersianMonthName(now.getMonth()),
            time: `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
        };
        return persianDate;
    };

    const monthsAgo = 3;
    
    const finalDate = getCurrentPersianDate();

    book.finalDate = finalDate;
    
    book.canceledBy = 'مشتری';

    book.status = 'لغو شده';
    
    await book.save();
    
    res.json('لغو شد');

});