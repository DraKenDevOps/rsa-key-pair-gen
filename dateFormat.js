exports.dateTimeFormatter = (date) => {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    day = day < 10 ? `0${day}` : day;
    month = month < 10 ? `0${month}` : month;
    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;
    second = second < 10 ? `0${second}` : second;

    return `${year}${month}${day}${hour}${minute}${second}`;
}

exports.dateFormatter = (date) => {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear()

    day = day < 10 ? `0${day}` : day;
    month = month < 10 ? `0${month}` : month;

    return `${year}${month}${day}`;
}