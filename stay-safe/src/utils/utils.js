export function formatThousand(number) {
    const formatter = new Intl.NumberFormat('id-ID');
    return formatter.format(number)
}

export function getCurrentDate() {
    const currentDate = new Date();
    return currentDate.getFullYear() + '-' +
        currentDate.getMonth() + '-' +
        currentDate.getDate() + ' ' +
        currentDate.getHours() + ':' +
        currentDate.getMinutes() + ':' +
        currentDate.getSeconds();
}
