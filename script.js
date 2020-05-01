
    $('.todo-btn').click(() => { 
        $('.todo-list').append(
                `        
                <li>${$('.todo-input').val()}
                <span class="far fa-check-circle"></span>
                <span class="fas fa-trash"></span>
                
                </li>
                `
            );
            $('li:last-child',).click((event) => {
                $(event.target).toggleClass('completed-text');
            
                    $('li>span:first-child').toggleClass('far fa-check-circle');
                    $('li>span:first-child').toggleClass('fas fa-check-circle complete');
            
                });
        
        $('.todo-input').val('');
    });




/* $( "td:empty" )
.text( "Was empty!" )
.css( "background", "rgb(255,220,200)" );
alert('Please write something firtst! :)')



 $('.todo-input:empty')
            alert('Please write something firtst! :)');

*/