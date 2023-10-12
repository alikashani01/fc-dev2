import expressAsyncHandler from 'express-async-handler';
import Artist from '../../../../models/Artist.js';
import Book from '../../../../models/Book.js';


export const start = expressAsyncHandler(async(req, res) => {
    
    const artist = await Artist.findById(req.artist._id);
    if (!artist) throw new Error('Artist not found');
    
    const id = req.params.id;
    
    const book = await Book.findById(id);
    
    if (!book) throw new Error('book not found');
    
    const currentBookExists = await Book.findOne({ artist: artist._id, status: 'در حال انجام' });
    // res.json(currentBookExists)
    if (currentBookExists) {
        
        throw new Error('نوبت دیگری در حال انجام است');

    } else {
        
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
                time: {
                    hour: now.getHours(),
                    minute: now.getMinutes(),
                },
                // time: `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
            };
            return persianDate;
        };
    
        const monthsAgo = 3;

        const startedDate = getCurrentPersianDate();

        book.startedDate = startedDate;
        
        book.status = 'در حال انجام';

        const updatedBook = await book.save();
        
        res.json(updatedBook);  
          
    };
    
});


export const end = expressAsyncHandler(async(req, res) => {
    
    const artist = await Artist.findById(req.artist._id);
    if (!artist) throw new Error('Artist not found');
    
    const id = req.params.id;
    const book = await Book.findById(id);
    if (!book) throw new Error('book not found');
    
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
            time: {
                hour: now.getHours(),
                minute: now.getMinutes(),
            },
        };
        return persianDate;
    };

    const monthsAgo = 3;

    const finalDate = getCurrentPersianDate();

    book.finalDate = finalDate;
    
    const now = new Date();

    const endedHour = now.getHours();
    const endedMinute = now.getMinutes();
    const elapsedHour = endedHour - book.startedDate.time.hour;
    const elapsedMinute = endedMinute - book.startedDate.time.minute;
    
    book.status = 'انجام شده';
    
    book.elapsedTime = {
        hour: elapsedHour,
        minute: elapsedMinute,
    };

    
    // const now = new Date();
    // book.endedDate.time = {
    //     hour: endedHour,
    //     minute: endedMinute,
    // };

    const updatedBook = await book.save();
    res.json(updatedBook);

});


export const cancel = expressAsyncHandler(async(req, res) => {
    
    const artist = await Artist.findById(req.artist._id);
    
    if (!artist) throw new Error('Artist not found');
    
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
            time: {
                hour: now.getHours(),
                minute: now.getMinutes(),
            },
        };
        return persianDate;
    };

    const monthsAgo = 3;
    
    const finalDate = getCurrentPersianDate();

    book.finalDate = finalDate;
    
    book.canceledBy = 'آرایشگر';

    book.status = 'لغو شده';
    
    await book.save();
    
    res.json('لغو شد');

});