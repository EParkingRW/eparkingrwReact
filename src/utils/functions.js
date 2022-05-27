export function convertFromStringToDate(responseDate) {
    const date = new Date(responseDate.replace(' ', 'T'));
    return(date)
}
export function validatePhoneNumber(input_str) {
    let re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    return re.test(input_str);
}