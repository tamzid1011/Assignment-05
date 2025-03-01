// Date related
getById('day').innerText = getDay();
getById('date').innerText = getDate();

// Theme related 
getById('random_mode').addEventListener('click', function () {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});


// Board Update Alert related  
let allBtn = document.querySelectorAll('#task_btn');
let clickedCount = 0;

for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        let heading = e.target.parentElement.parentElement.previousElementSibling.querySelector('h2').innerText;

        alert('Board updated Successfully');

        let history = getById('history');
        let tag = document.createElement('p');
        tag.classList.add('massage');
    
        let massage = document.createTextNode(`You have Complete The Task ${heading} at ${getTime()}`);
        tag.appendChild(massage);
        history.appendChild(tag);


               // Count related 
        let taskCount =getById('task_count');
        let convertedTaskCounted = parseInt(taskCount.innerText);
        taskCount.innerText = convertedTaskCounted - 1;

        let incrementTask = getById('increment_task');
        let convertedIncrementTask = parseInt(incrementTask.innerText);
        incrementTask.innerText = convertedIncrementTask + 1;

        e.target.disabled = true;
        e.target.classList.add('bg-gray-300', 'cursor-not-allowed', 'text-gray-500');
        e.target.classList.remove('bg-[#3752FD]', 'cursor-pointer', 'text-white')
        
        // Clicked count related 
        clickedCount++;

        if (clickedCount === allBtn.length) {
            alert('Congrates!!! You have completed all the current task')
        }
    })
}





//  Clear History related 
getById('history_btn').addEventListener('click', function (e) {
    getById('history').innerText = '';
});


// Blogs Page related 
getById('blog_page').addEventListener('click', function () {
    location.href = './blog.html';
})