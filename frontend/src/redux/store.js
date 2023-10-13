import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { artistAccountActivationReducer } from './artist/account/activation/reducer';
import { artistAccountDetailsReducer } from './artist/account/details/reducer';
import { artistAccountMobileEditReducer, artistAccountMobileVerifyReducer } from './artist/account/mobile/reducer';
import { artistAccountNameEditReducer } from './artist/account/name/reducer';
import { artistAccountRegistrationMobileAddReducer, artistAccountRegistrationMobileVerifyReducer } from './artist/account/registration/reducer';
import { artistAccountRemoveReducer } from './artist/account/remove/reducer';
import { artistDashboardBookCurrentDetailsReducer, artistDashboardBookDetailsReducer } from './artist/dashboard/book/details/reducer';
import { artistDashboardBookListReducer } from './artist/dashboard/book/list/reducer';
import { artistDashboardBookCancelReducer, artistDashboardBookEndReducer, artistDashboardBookStartReducer } from './artist/dashboard/book/edit/reducer';
import { artistDashboardScheduleDayClosedReducer } from './artist/dashboard/schedule/day/reducer';
import { artistDashboardScheduleTimeEditReducer } from './artist/dashboard/schedule/time/reducer';
import { artistDashboardServiceAddReducer } from './artist/dashboard/services/add/reducer';
import { artistDashboardServiceEditReducer } from './artist/dashboard/services/edit/reducer';
import { artistDashboardServiceRemoveAllReducer, artistDashboardServiceRemoveReducer } from './artist/dashboard/services/remove/reducer';

import { customerAccountActivationReducer } from './customer/account/activation/reducer';
import { customerAccountDetailsReducer } from './customer/account/details/reducer';
import { customerAccountMobileEditReducer, customerAccountMobileVerifyReducer } from './customer/account/mobile/reducer';
import { customerAccountNameEditReducer } from './customer/account/name/reducer';
import { customerAccountRegistrationMobileAddReducer, customerAccountRegistrationMobileVerifyReducer } from './customer/account/registration/reducer';
import { customerAccountRemoveReducer } from './customer/account/remove/reducer';
import { customerDashboardBookCurrentDetailsReducer, customerDashboardBookDetailsReducer } from './customer/dashboard/book/details/reducer';
import { customerDashboardBookListReducer } from './customer/dashboard/book/list/reducer';
import { customerDashboardBookCancelReducer } from './customer/dashboard/book/edit/reducer';

import { bookingDateFreeReducer, bookingReducer, bookingSubmitReducer } from './booking/reducer';
import { bookingArtistDetailsReducer, bookingArtistListReducer, bookingCustomerDetailsReducer } from './booking/artist/reducer';


const reducers = combineReducers({
    
    // Artist >>> Account:
    artistAccountActivation: artistAccountActivationReducer,
    artistAccountDetails: artistAccountDetailsReducer,
    artistAccountMobileEdit: artistAccountMobileEditReducer,
    artistAccountMobileVerify: artistAccountMobileVerifyReducer,
    artistAccountNameEdit: artistAccountNameEditReducer,
    artistAccountRegistrationMobileAdd: artistAccountRegistrationMobileAddReducer,
    artistAccountRegistrationMobileVerify: artistAccountRegistrationMobileVerifyReducer,
    artistAccountRemove: artistAccountRemoveReducer,
    // Artist >>> Dashboard >>> Book:
    artistDashboardBookDetails: artistDashboardBookDetailsReducer,
    artistDashboardBookCurrentDetails: artistDashboardBookCurrentDetailsReducer,
    artistDashboardBookStart: artistDashboardBookStartReducer,
    artistDashboardBookEnd: artistDashboardBookEndReducer,
    artistDashboardBookCancel: artistDashboardBookCancelReducer,
    artistDashboardBookList: artistDashboardBookListReducer,
    // Artist >>> Setting >>> Schedule:
    artistDashboardScheduleDayClosed: artistDashboardScheduleDayClosedReducer,
    artistDashboardScheduleTimeEdit: artistDashboardScheduleTimeEditReducer,
    // Artist >>> Setting >>> Service:
    artistDashboardServiceAdd: artistDashboardServiceAddReducer,
    artistDashboardServiceEdit: artistDashboardServiceEditReducer,
    artistDashboardServiceRemove: artistDashboardServiceRemoveReducer,
    artistDashboardServiceRemoveAll: artistDashboardServiceRemoveAllReducer,

    // Customer >>> Account:
    customerAccountActivation: customerAccountActivationReducer,
    customerAccountDetails: customerAccountDetailsReducer,
    customerAccountMobileEdit: customerAccountMobileEditReducer,
    customerAccountMobileVerify: customerAccountMobileVerifyReducer,
    customerAccountNameEdit: customerAccountNameEditReducer,
    customerAccountRegistrationMobileAdd: customerAccountRegistrationMobileAddReducer,
    customerAccountRegistrationMobileVerify: customerAccountRegistrationMobileVerifyReducer,
    customerAccountRemove: customerAccountRemoveReducer,
    // Customer >>> Book:
    customerDashboardBookDetails: customerDashboardBookDetailsReducer,
    customerDashboardBookCurrentDetails: customerDashboardBookCurrentDetailsReducer,
    customerDashboardBookList: customerDashboardBookListReducer,
    customerDashboardBookCancel: customerDashboardBookCancelReducer,
    
    // Booking:
    booking: bookingReducer,
    bookingArtistList: bookingArtistListReducer,
    bookingArtistDetails: bookingArtistDetailsReducer,
    bookingCustomerDetails: bookingCustomerDetailsReducer,
    bookingDateFree: bookingDateFreeReducer,
    bookingSubmit: bookingSubmitReducer,
    
});


const artistInfoFromStorage = localStorage.getItem('artistInfo')
    ? JSON.parse(localStorage.getItem('artistInfo'))
    : undefined;
const modelInfoFromStorage = localStorage.getItem('modelInfo')
    ? JSON.parse(localStorage.getItem('modelInfo'))
    : undefined;
const customerInfoFromStorage = localStorage.getItem('customerInfo')
    ? JSON.parse(localStorage.getItem('customerInfo'))
    : undefined;
const bookingInfoFromStorage = localStorage.getItem('bookingInfo')
    ? JSON.parse(localStorage.getItem('bookingInfo'))
    : undefined;

const initialState = {
    artistAccountRegistrationMobileVerify: {
        artistInfo: artistInfoFromStorage,
    },
    modelAccountRegistrationMobileVerify: {
        modelInfo: modelInfoFromStorage,
    },
    customerAccountRegistrationMobileVerify: {
        customerInfo: customerInfoFromStorage,
    },
    booking: bookingInfoFromStorage,
};

const middlewares = [thunk];

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;