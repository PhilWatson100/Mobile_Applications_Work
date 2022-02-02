let tasks:Array<string> = [];

function addTasks(task:string):number{
    tasks.push(task);
    console.log("item: " + task + "has been added to the array");

    return tasks.length;

}

function listAllTask():void{

    tasks.forEach(function(item){
        console.log(item);
    })

    /*{   for (let i = 0; i < tasks.length; i++)
        console.log(tasks[i]);
    }*/

}

function deleteTask(task):number{
    let index:number = tasks.indexOf(task);

    if (index > -1){
        tasks.splice(index, 1);
        console.log("Item: " +task+ " has been deleted");

    }else{
        console.log("Item: "+task+ " not found in array ");

    }

    return tasks.length;

}

addTasks("part one ");
addTasks("part two ");

listAllTask();

deleteTask("part two");
deleteTask("part four");


