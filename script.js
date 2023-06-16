const sidebar_btn = document.querySelector('.hamburger');
const home_btn = document.getElementById('home');
const todo_btn = document.getElementById('todo');
const project_btn = document.getElementById('project');
const notes_btn = document.getElementById('notes');
const popup_btn = document.getElementById('popup');
const popup_todo_btn = document.getElementById('popup_todo');
const popup_project_btn = document.getElementById('popup_project');
const popup_note_btn = document.getElementById('popup_note');


const homeIsActive = 'home';
const todoIsActive = 'todo';
const projectIsActive = 'project';
const notesIsActive = 'notes';
const popupTodoIsActive = 'popup_todo';
const popupProjectIsActive = 'popup_project';
const popupNotesIsActive = 'popup_note';
// menu_btn.addEventListener('click', function (){
//     menu_btn.classList.toggle('is-active');
// });

function toggleSidebar() {
    sidebar_btn.classList.toggle('is-active');
}

function toggleMainContent(isActive) {
    let home_contents = document.querySelector(".home-contents");
    let todo_contents = document.querySelector(".todo-contents");
    let project_contents = document.querySelector(".project-contents");
    let notes_contents = document.querySelector(".notes-contents");

    if(isActive == homeIsActive){
        home_contents.style.display = "flex";
        todo_contents.style.display = "none";
        project_contents.style.display = "none";
        notes_contents.style.display = "none";
    } else if(isActive == todoIsActive) {
        home_contents.style.display = "none";
        todo_contents.style.display = "flex";
        project_contents.style.display = "none";
        notes_contents.style.display = "none";
    } else if(isActive == projectIsActive) {
        home_contents.style.display = "none";
        todo_contents.style.display = "none";
        project_contents.style.display = "flex";
        notes_contents.style.display = "none";
    } else if(isActive == notesIsActive) {
        home_contents.style.display = "none";
        todo_contents.style.display = "none";
        project_contents.style.display = "none";
        notes_contents.style.display = "flex";
    }
}

function togglePopup() {
    popup_btn.classList.toggle('active');
}

function togglePopupContent(isActive){
    let popup_todo_contents = document.querySelector(".popup-todo-contents");
    let popup_project_contents = document.querySelector(".popup-project-contents");
    let popup_notes_contents = document.querySelector(".popup-notes-contents");

    if(isActive == popupTodoIsActive){
        popup_todo_contents.style.display = "flex";
        popup_project_contents.style.display = "none";
        popup_notes_contents.style.display = "none";
    } else if(isActive == popupProjectIsActive) {
        popup_todo_contents.style.display = "none";
        popup_project_contents.style.display = "flex";
        popup_notes_contents.style.display = "none";
    } else if(isActive == popupNotesIsActive) {
        popup_todo_contents.style.display = "none";
        popup_project_contents.style.display = "none";
        popup_notes_contents.style.display = "flex";
    } 
}
home_btn.addEventListener('click', function(){
    toggleMainContent(homeIsActive);
});

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