function getDay() {
    let allDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let today = new Date();
    let dayIndex = today.getDay();
    let dayName = allDay[dayIndex];
    return dayName;
}

function getDate() {
    let date = new Date();
    let todayDate = date.toLocaleDateString('en-US',
    {month: 'long',
    day: 'numeric',
    year : 'numeric'
        })
    return todayDate.replace(',','');
}

function getTime() {
    return new Date().toLocaleTimeString();
}



function getById(id) {
    return document.getElementById(id);
};


