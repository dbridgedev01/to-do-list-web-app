exports.fullDate = function () {

    // const days = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();

    const dateOptions = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    return date.toLocaleString("en-US", dateOptions);
}

exports.day = function () {

    // const days = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();

    const dateOptions = {
        weekday: "long"
    }

    return date.toLocaleString("en-US", dateOptions);
}