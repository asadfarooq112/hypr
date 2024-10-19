
let array = [];


while (1) {
    let input = prompt ('"new:" Adds a todo list \n "list": List ToDos \n "delete": Remove Specific-Todo \n "quit": Quit');
    
    if (input == 'new') {
        let inputNew = prompt('Enter the todo');
        array.push(inputNew);

    }

    else if (input == 'list') {

        for (i=0; i<array.length ; i++) {
           console.log(`${i}: ${array[i]}`);

        }
    }

    else if (input == 'delete') {
        let input_del = prompt ('enter index of task to be delete');
        array.splice(input_del,1);

        console.log('New array is:')
        for (i=0; i<array.length ; i++) {
            console.log(`${i}: ${array[i]}`);
 
         }

    }


    else if (input == 'quit') {
            break;

    }

    else {
        console.log('enter correct value type');
    }



    }


