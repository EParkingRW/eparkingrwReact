export function convertFromStringToDate(responseDate) {
    const date = new Date(responseDate.replace(' ', 'T'));
    return(date)
}