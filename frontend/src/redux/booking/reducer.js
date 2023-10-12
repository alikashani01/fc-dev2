import { BOOKING_ARTIST, BOOKING_DATE_FREE_FAIL, BOOKING_DATE_FREE_REQUEST, BOOKING_DATE_FREE_RESET, BOOKING_DATE_FREE_SUCCESS, BOOKING_DAY, BOOKING_LOCATION, BOOKING_SERVICE, BOOKING_SERVICE_REMOVE_ALL, BOOKING_SKILL, BOOKING_SUBMIT_FAIL, BOOKING_SUBMIT_REQUEST, BOOKING_SUBMIT_RESET, BOOKING_SUBMIT_SUCCESS, BOOKING_TIME } from "./constants";


export const bookingReducer = (state = {
    artist: {},
    services: [],
    skill: '',
    date: {
        time: 0,
        dayName: '',
        dayNumber: '',
        month: '',
        date: '',
    },
    state: '',
    city: '',
}, action) => {
    switch (action.type) {
        case BOOKING_LOCATION:
            const location = action.payload;
            return {
                ...state,
                state: location.state,
                city: location.city,
            };
        case BOOKING_SKILL:
            const skill = action.payload;
            return {
                ...state,
                skill: skill,
            };
        case BOOKING_DAY:
            return {
                ...state,
                date: {
                    ...state.date,
                    ...action.payload,
                }
            };
        case BOOKING_TIME:
            return {
                ...state,
                date: {
                    ...state.date,
                    time: action.payload,
                }
            };
        case BOOKING_ARTIST:
            return {
                ...state,
                artist: action.payload,
                services: [],
                date: {
                    time: 0,
                    dayName: '',
                    dayNumber: '',
                    month: '',
                    date: '',
                },
            };
        case BOOKING_SERVICE:
            const service = action.payload;
            const serviceExists = state.services && state.services.find(x => x === service);
            let services = state.services ? state.services : [];
            if (serviceExists) {
                return {
                    ...state,
                    services: services.filter(x => x!== serviceExists),
                };
            } else {
                return {
                    ...state,
                    services: [...services, service],
                };
            };
        case BOOKING_SERVICE_REMOVE_ALL:
            return {
                ...state,
                services: [],
            };
        default:
            return state;
    };
};

export const bookingDateFreeReducer = (state = { dates: [] }, action) => {
    switch (action.type) {
        case BOOKING_DATE_FREE_REQUEST:
            return { ...state, loading: true };
        case BOOKING_DATE_FREE_SUCCESS:
            return { ...state, loading: false, success: true, dates: action.payload };
        case BOOKING_DATE_FREE_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case BOOKING_DATE_FREE_RESET:
            return {};
        default:
            return state;
    };
};

export const bookingSubmitReducer = (state = { book: {
    services: [],
    date: {},
} }, action) => {
    switch (action.type) {
        case BOOKING_SUBMIT_REQUEST:
            return { ...state, loading: true };
        case BOOKING_SUBMIT_SUCCESS:
            return { ...state, loading: false, success: true, book: action.payload };
        case BOOKING_SUBMIT_FAIL:
            return { ...state, loading: false, success: false, error: action.payload };
        case BOOKING_SUBMIT_RESET:
            return {};
        default:
            return state;
    };
};
