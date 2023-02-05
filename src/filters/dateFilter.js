/*
Stolen from https://stackoverflow.com/a/31615643
via https://github.com/andy-piccalilli/hylia
*/
const appendSuffix = (n) => {
    var s = ['th', 'st', 'nd', 'rd'],
        v = n % 100
    return n + (s[(v - 20) % 10] || s[v] || s[0])
}

module.exports = function dateFilter(value) {
    const dateObject = new Date(value)

    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ]
    // fixes off by one day error
    let datePlusOne = dateObject.getDate() + 1;
    if (datePlusOne < 10) {
        datePlusOne = "0" + datePlusOne;
    }

    const dayWithSuffix = appendSuffix(dateObject.getDate())

    return `${
        months[dateObject.getMonth()]
    } ${datePlusOne}, ${dateObject.getFullYear()}`
}
