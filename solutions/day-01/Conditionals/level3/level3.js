// Write a program which tells the number of days in a month.
let monthDays = () => {
    let m = document.getElementById("month").value;
    let mlowercase = m.toLowerCase();
    if (mlowercase == 'september' || mlowercase == 'april' || mlowercase == 'june' || mlowercase == 'november'){
        alert (m + ' has 30 days.');
    }else if (mlowercase == 'january' || mlowercase == 'march' || mlowercase == 'may' || mlowercase == 'july' || mlowercase == 'august' || mlowercase == 'december'){
        alert (m + ' has 31 days.');
    }else if (mlowercase == 'february'){
        alert (m + ' has 28 days.');
    }else {
        alert (m + ' is not a month');
    }
}
// Write a program which tells the number of days in a month, now consider leap year.
let monthDaysLeap = () => {
    let l = document.getElementById("leap").value;
    const yearMonth = l.split('-');
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let mText = month[(yearMonth[1]) - 1];
    if (mText == 'September' || mText == 'April' || mText == 'June' || mText == 'November'){
        alert (mText + ' has 30 days.');
    }else if (mText == 'January' || mText == 'March' || mText == 'May' || mText == 'July' || mText == 'August' || mText == 'December'){
        alert (mText + ' has 31 days.');
    }else if (mText == 'February'){
        console.log(yearMonth[0] % 4);
        console.log(yearMonth[0] % 400);
        console.log(yearMonth[0] % 100);
        if (yearMonth[0] % 4 == 0 && yearMonth[0] % 100 != 0 || yearMonth[0] % 400 == 0){
            alert (mText + ' has 29 days.');
        }else{
            alert (mText + ' has 28 days.');
        }
    }else {
        alert (mText + ' is not a month and a year');
    }
}