export const validate = (data) => {

    const errors = {};

    if (!data.title) {
        errors.title = 'عنوان الزامیست';
    } else {
        delete errors.title;
    };
    
    if (!data.description) {
        errors.description = 'توضیحات الزامیست';
    } else {
        delete errors.description;
    };

    return errors;

};