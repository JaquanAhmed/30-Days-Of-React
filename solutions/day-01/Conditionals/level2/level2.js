    // Write a code which can give grades to students according to theirs scores:
    //     80-100, A
    //     70-89, B
    //     60-69, C
    //     50-59, D
    //     0-49, F
let calculateGrade = () => {
    let g = document.getElementById("grade").value;
    switch (true){
        case g >= 80 && g <= 100:
            alert('You have scored an A');
            break;
        case g >= 70 && g <= 89:
            alert('You have scored an B');
            break;
        case g >= 60 && g <= 69:
            alert('You have scored an C');
            break;
        case g >= 50 && g <= 59:
            alert('You have scored an D');
            break;
        case g >= 0 && g <= 49:
            alert('You have scored an F');
            break;
        default:
            alert("You're inputed grade is not between 1 - 100");
            break;
    }
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     September, October or November, the season is Autumn.
//     December, January or February, the season is Winter.
//     March, April or May, the season is Spring
//     June, July or August, the season is Summer
let findSeason = () => {
    let m = document.getElementById("month").value;
    if (m == 'September' || m == 'October' || m == 'November'){
        alert("The season is Autumn");
    }else if (m == 'December' || m == 'January' || m == 'February'){
            alert("The season is Winter");
    }else if (m == 'March' || m == 'April' || m == 'May'){
            alert("The season is Spring");
    }else if (m == 'June' || m == 'July' || m == 'August'){
            alert("The season is Summer");
    }else{
        alert('Please enter a Month');
    }
}

// Check if a day is weekend day or a working day. Your script will take day as an input.
let weekend = () => {
    let d = document.getElementById("day").value;
    switch(true){
        case d == 'Saterday' || d == 'Sunday':
            alert (d + ' is a weekend.');
            break;
        case d == 'Monday' || d == 'Tuesday' || d == 'Wednesday' || d == 'Thursday' || d == 'Friday':
            alert (d + ' is a working day.');
            break;
        default:
            alert ('Please ente a day of the week');
            break;
    }
}