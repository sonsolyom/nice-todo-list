$('.todo-btn').click(() => {
        
    if($('.todo-input').val() !== '') {        
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
        );
        $('li:last-child').click((event) => {
            $(event.target).toggleClass('completed-text');          
                            
        });
        
        
    } else {
        alert('Please write something firtst! :)');
    }
    $('.todo-input').val('');
});










/*

$('.li:last-child').click((event) => {
    $(event.$('span:last-child')).toggleClass('far fa-check-circle');
    $(event.$('span:last-child')    ).toggleClass('fas fa-check-circle complete');
})











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

*/