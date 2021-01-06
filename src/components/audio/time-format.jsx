export default function TimeFormat(times) {

    var result = '00:00:00';
    var hour, minute, second
    if (times > 0) {
        hour = Math.floor(times / 3600);
        if (hour < 10) {
            hour = "0" + hour;
        }
        minute = Math.floor((times - 3600 * hour) / 60);
        if (minute < 10) {
            minute = "0" + minute;
        }

        second = Math.ceil((times - 3600 * hour - 60 * minute) % 60);
        if (second < 10) {
            second = "0" + second;
        }
        // result = hour + ':' + minute + ':' + second;
        result = minute + ':' + second;
    }
    return result;
}