import 'dayjs/locale/id';
import * as dayjs from 'dayjs';
dayjs.locale('id');

// Date & Time
export const datetimeString = (date) => {
    if (date) return dayjs(date).format('DD MMMM YYYY, HH:mm');
    return null;
};
