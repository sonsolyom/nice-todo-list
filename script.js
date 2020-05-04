function addButtonHandler () {
    let newTodo = $(".todo-input").val();
    
    
    if ($("li").length < 14) {
        if(newTodo !== '') { 
        $('ul').append(
            "<li>\
            <p class='listitem'>" + newTodo + "</p>\
            <button class='btn' id='trash'><i class='fas fa-trash fa-lg'></i></button>\
            <button class='btn' id='circle'><i class='far fa-check-circle co'></i></button>\
            </li>"
        
        );

    }else{
        alert('Please write something firtst! :)');
    }
    $(".todo-input").val("");
        
    } else {
        alert ("ToDo List is full!");
    }
    
    
}




function circleIconHandler () {

    $(this).children().toggleClass('far fa-check-circle co');
    $(this).children().toggleClass('fas fa-check-circle co');
    $(this).parent().toggleClass('lightGrey');
    
}

function trashIconHandler (event) {

    event.currentTarget.parentNode.remove();

}

$(".todo-btn").on ("click", addButtonHandler);

$("ul").on("click", "li>#circle", "akarmi", circleIconHandler);
$("ul").on("click", "li>#trash", "semmi", trashIconHandler);
















/*

event.target.style.color = "white";
    event.target.style.background = "#EE82EE";
    event.target.style.border = "#EE82EE";
    event.currentTarget.previousElementSibling.previousElementSibling.style.color = "#C0C0C0";



$('.todo-btn').click(() => {
        
    if($('.todo-input').val() !== '') {        
        $('.todo-list').append(
            `      
              
            <li>${$('.todo-input').val()}
            <span class="far fa-check-circle"></span>
            <span class="fas fa-trash"></span>
            </li>
            `
        );
        $('li:last-child').click((event) => {
            $(event.target).toggleClass('completed-text');          
            $(event.target).toggleClass((event) =>{
                $(event.target).hide();
                $(event.target).prepend('<span class="fas fa-check-circle"></span>'); 
            });
            
        });
        
        
        
    } else {
        alert('Please write something firtst! :)');
    }
    $('.todo-input').val('');
});





















$('.li:last-child').click((event) => {
    $(event.$('span:last-child')).toggleClass('far fa-check-circle');
    $(event.$('span:last-child')    ).toggleClass('fas fa-check-circle complete');
})

if($(event.target).hasClass('completed-text')){
                $('span[class="far fa-check-circle"]').toggleClass('far fa-check-circle').toggleClass('fas fa-check-circle complete');
            } else if($(event.target).hasClass()) {
                $('span[class="far fa-check-circle"]').toggleClass('fas fa-check-circle complete').toggleClass('far fa-check-circle');
            }


$('.todo-list').append(
            '<i class="far fa-check-circle"></i>'   
        );
        
        $('.todo-list').append(
            '<span class="fas fa-trash"></span>'
        );
        $('.todo-list').append(
            '<i class="fas fa-check-circle complete hidden"></i>'   
        );
        $('.todo-list').append(
            `<li>${$('.todo-input').val()}</li>`






$('.todo-list').append(
                `      
                <span class="far fa-check-circle"></span>
                <span class="fas fa-trash"></span>  
                <li>${$('.todo-input').val()}
                </li>
                `
            );
            $('li:last-child').click((event) => {
                $(event.target).toggleClass('completed-text');
            
                    $('span:first-child').toggleClass('far fa-check-circle');
                    $('span:first-child').toggleClass('fas fa-check-circle complete');
            
                });






*/




/* $( "td:empty" )
.text( "Was empty!" )
.css( "background", "rgb(255,220,200)" );
alert('Please write something firtst! :)')



 $('.todo-input:empty')
            alert('Please write something firtst! :)');










// SELECT ELEMENTS

const list = $('.todo-list');
const input = $('.todo-input');

//CLASS NAMES

const CHECK = 'fas fa-check-circle';
const UNCHECK = 'far fa-check-circle';
const LIGHT_GREY = 'lightGrey';

// Variables
    let LIST = [],
        id = 0;

// add to do function
function addToDo(toDo, id, done, trash){

    if(trash){return;}

    const DONE = done ? CHECK : UNCHECK;
    const GREY = done ? LIGHT_GREY : '';

    const item =
            `
            <li class="todo-item">
            <p class="text ${GREY}">${toDo}</p>
            <i class="fas fa-trash de" job="delete" id="${id}"></i>
            <i class="${DONE} co" job="complete" id="${id}"></i>
            </li>
            `;

            list.append(item);
}

//add an item to the list, click on add button
$(document).keyup((event) => {
    if(event.keyCode == 13){
        const toDo = input.val();

        if(toDo){
            addToDo(toDo, id, false, false);
            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false
            });
            input.val('');
            id++;
        }
    }
});

// complete to do
function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
   //$('.text').parent().classList.toggle(LIGHT_GREY);
    element.parentNode.querySelector('.text').classList.toggle(LIGHT_GREY);
    LIST[element.id].done = LIST[element.id].done ? false : true;

};

//remove to do
function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}

// function removeToDo(element) {
//    element.parent().parent().remove(element.parent());
//
//    LIST[element.id].trash = true;
//}; 

// target the items created dinamically
list.on('click', function(event){
    const element = event.target;
    const elementJob = $(this).val('[job]');
    //const elementJob = event.target.$(this, '[job]').val();
    if (elementJob == 'complete'){
        completeToDo(element);
    } else if (elementJob == 'delete') {
        removeToDo(element);
    }
});




*/