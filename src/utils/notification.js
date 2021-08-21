import UIkit from 'uikit';

const timeout = 5000;
const typeNotif = {
    1: {
        text: 'success',
        icon: 'check'
    },
    2: {
        text: 'danger',
        icon: 'warning'
    },
    3: {
        text: 'primary',
        icon: 'info'
    }
};
const createMessage = (err) => {
    let data = null;
    if (err.response) {
        const message = err.response;
        data = typeof message.data === 'object' ? message.data.error || message.data.message : message.data;
    } else {
        data = err.message;
    }

    return data || 'Something went wrong';
};

const notificationSuccess = (message) => {
    UIkit.notification({
        message: `<span uk-icon='icon: ${typeNotif[1].icon}'></span> ${message || 'Success'}`,
        status: typeNotif[1].text,
        timeout
    });
};

const notificationDanger = (message) => {
    UIkit.notification({
        message: `<span uk-icon='icon: ${typeNotif[2].icon}'></span> ${createMessage(message)}`,
        status: typeNotif[2].text,
        timeout
    });
};

const notificationInfo = (message) => {
    UIkit.notification({
        message: `<span uk-icon='icon: ${typeNotif[3].icon}'></span> ${message}`,
        status: typeNotif[3].text,
        timeout
    });
};

export {
    notificationSuccess,
    notificationDanger,
    notificationInfo
};
