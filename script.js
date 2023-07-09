const sidebar_btn = document.querySelector('.hamburger');
const todo_btn = document.getElementById('todo');
const project_btn = document.getElementById('project');
const notes_btn = document.getElementById('notes');
const popup_btn = document.getElementById('popup');
const popup_todo_btn = document.getElementById('popup_todo');
const popup_project_btn = document.getElementById('popup_project');
const popup_note_btn = document.getElementById('popup_note');
const details_btn = document.getElementById('show-details');

const todoIsActive = 'todo';
const projectIsActive = 'project';
const notesIsActive = 'notes';
const popupTodoIsActive = 'popup_todo';
const popupProjectIsActive = 'popup_project';
const popupNotesIsActive = 'popup_note';

const popup_todo_contents = document.querySelector(".popup-todo-contents");
const popup_project_contents = document.querySelector(".popup-project-contents");
const popup_notes_contents = document.querySelector(".popup-notes-contents");

function toggleSidebar() {
    sidebar_btn.classList.toggle('is-active');
}

function toggleMainContent(isActive) {
    let todo_contents = document.querySelector(".todo-container");
    let project_contents = document.querySelector(".project-container");
    let notes_contents = document.querySelector(".notes-container");
    
    if(isActive == todoIsActive) {
        todo_contents.style.display = "block";
        project_contents.style.display = "none";
        notes_contents.style.display = "none";
    } else if(isActive == projectIsActive) {
        todo_contents.style.display = "none";
        project_contents.style.display = "block";
        notes_contents.style.display = "none";
    } else if(isActive == notesIsActive) {
        todo_contents.style.display = "none";
        project_contents.style.display = "none";
        notes_contents.style.display = "block";
    }
}

function togglePopup() {
    popup_btn.classList.toggle('active');
    popup_todo_contents.style.display = "block";
    popup_project_contents.style.display = "none";
    popup_notes_contents.style.display = "none";
    document.getElementById('todo_form').reset();
}

function toggleDetails() {
    details_btn.classList.toggle('active');    
}

function togglePopupContent(isActive){
    if(isActive == popupTodoIsActive){
        popup_todo_contents.style.display = "block";
        popup_project_contents.style.display = "none";
        popup_notes_contents.style.display = "none";
    } else if(isActive == popupProjectIsActive) {
        popup_todo_contents.style.display = "none";
        popup_project_contents.style.display = "block";
        popup_notes_contents.style.display = "none";
    } else if(isActive == popupNotesIsActive) {
        popup_todo_contents.style.display = "none";
        popup_project_contents.style.display = "none";
        popup_notes_contents.style.display = "block";
    } 
}

todo_btn.addEventListener('click', function(){
    toggleMainContent(todoIsActive);
});

project_btn.addEventListener('click', function(){
    toggleMainContent(projectIsActive);
});

notes_btn.addEventListener('click', function(){
    toggleMainContent(notesIsActive);
});

popup_todo_btn.addEventListener('click', function(){
    togglePopupContent(popupTodoIsActive);
});

popup_project_btn.addEventListener('click', function(){
    togglePopupContent(popupProjectIsActive);
});

popup_note_btn.addEventListener('click', function(){
    togglePopupContent(popupNotesIsActive);
});

// const myDate = new Date();

// let month = myDate.getMonth();
// let day = myDate.getDate();

// if(day.endsWith("1"))
//     day += "st";
// else if(day.endsWith("2"))
//     day += "nd";
// else if(day.endsWith("3"))
//     day += "rd";
// else
//     day += "th";

// let finalDate = month;

// document.getElementById('date').innerHTML = finalDate;

let date = new Date();  // 2009-11-10
let month = date.toLocaleString('en-us', { month: 'long' });
let day = date.getDate();

if(day == 1 || day == 21 || day == 31){
    day += "st";
} else if(day == 2 || day == 22) {
    day += "nd";
} else if(day == 3 || day == 23) {
    day += "rd";
} else {
    day += "th";
}



// if(checkDay.endsWith("1"))
//     suffix = "st";
// else if(checkDay.endsWith("2"))
//     suffix = "nd";
// else if(checkDay.endsWith("3"))
//     suffix = "rd";
// else
//     suffix = "th";
//     day += suffix;


let finalDate = month + " " + day;

document.querySelector('.date').innerHTML = finalDate;

window.addEventListener('load', () => {
    const form = document.querySelector("#todo_form");
    const list_el = document.querySelector(".todo-list");
    const inputPriority = document.getElementsByName("priority");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const inputTitle = document.getElementById('todo_title').value;
        const inputDetails = document.getElementById('details').value;

        const task_el = document.createElement("tr");

        const task_priority = document.createElement("td");
        task_priority.classList.add("priority");
        if(inputPriority[0].checked)
            task_priority.style = "background-color: #00A162;";
        else if(inputPriority[1].checked)
            task_priority.style = "background-color: #ffc906;";
        else
            task_priority.style = "background-color: #DC3545;";
        task_el.appendChild(task_priority);
        
        const task_checkbox = document.createElement("td");
        task_checkbox.classList.add("todo-checkbox");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        task_checkbox.appendChild(checkbox);
        task_el.appendChild(task_checkbox);

        const task_title = document.createElement("td");
        task_title.classList.add("title");
        task_title.innerText = inputTitle;
        task_el.appendChild(task_title);

        const task_details = document.createElement("td");
        task_details.classList.add("details");
        const detailsContent = '<button type="button" onClick="toggleDetails()" class="details-button">Details</button>';
        task_details.innerHTML = detailsContent;
        task_el.appendChild(task_details);

        const task_date = document.createElement("td");
        task_date.classList.add("date");
        // const task_priority = document.createElement("td");
        // const task_priority = document.createElement("td");
        // const task_priority = document.createElement("td");
        // const task_priority = document.createElement("td");
        // task_content.innerHTML = inputTitle.value;

        list_el.appendChild(task_el);
        togglePopup();
    })
})