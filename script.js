const sidebar_btn = document.querySelector('.hamburger');
const home_btn = document.getElementById('home');
const todo_btn = document.getElementById('todo');
const project_btn = document.getElementById('project');
const notes_btn = document.getElementById('notes');
var homeIsActive = 'home';
var todoIsActive = 'todo';
var projectIsActive = 'project';
var notesIsActive = 'notes';
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