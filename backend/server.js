import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import { notFound, errorHandler } from './middlewares/errors.js';
import connectDB from './config/db.js';
// Artist-Routes:
import artistAccountRoutes from './routes/artist/account.js';
import artistBookRoutes from './routes/artist/dashboard/book.js';
import artistSalonRoutes from './routes/artist/dashboard/salon.js';
import artistScheduleRoutes from './routes/artist/dashboard/schedule.js';
import artistServiceRoutes from './routes/artist/dashboard/service.js';
import artistSkillRoutes from './routes/artist/dashboard/skill.js';
// Customer-Routes:
import customerAccountRoutes from './routes/customer/account.js';
import customerBookRoutes from './routes/customer/book.js';
// Admin-Routes:
import adminUsersRoutes from './routes/_admin/users.js';
import adminBookRoutes from './routes/_admin/book.js';
// Booking:
import bookingRoutes from './routes/booking.js';


dotenv.config();
connectDB();
const app = express();


app.use(cors());
app.use(express.json());


// ROUTES //
// Admin:
const API_ADMIN = '/api/admin';
app.use(`${API_ADMIN}/users`, adminUsersRoutes);
app.use(`${API_ADMIN}/book`, adminBookRoutes);

// Artist:
const API_ARTIST = '/api/artist';
app.use(`${API_ARTIST}/account`, artistAccountRoutes);
app.use(`${API_ARTIST}/dashboard/book`, artistBookRoutes);
app.use(`${API_ARTIST}/dashboard/salon`, artistSalonRoutes);
app.use(`${API_ARTIST}/dashboard/schedule`, artistScheduleRoutes);
app.use(`${API_ARTIST}/dashboard/service`, artistServiceRoutes);
app.use(`${API_ARTIST}/dashboard/skill`, artistSkillRoutes);

// Customer:
const API_CUSTOMER = '/api/customer';
app.use(`${API_CUSTOMER}/account`, customerAccountRoutes);
app.use(`${API_CUSTOMER}/book`, customerBookRoutes);

// Booking:
const API_BOOKING = '/api/booking';
app.use(API_BOOKING, bookingRoutes);



if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    });
};

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5500;

app.listen(PORT, console.log(`Server connected: ${PORT}`.bgYellow))