
import {TodoInterface} from './TodoInterface';

class Todo implements TodoInterface{
    tasks:Array<string> = [];

    addTasks(task:string):number{
        this.tasks.push(task);
        console.log("item: " + task + "has been added to the array");

        return this.tasks.length;
    
    }

    listAllTask():void{

        tasks.forEach(function(item){
            console.log(item);
        })
    
    }

    deleteTask(task):number{
        let index:number = this.tasks.indexOf(task);
    
        if (index > -1){
            this.tasks.splice(index, 1);
            console.log("Item: " +task+ " has been deleted");
    
        }else{
            console.log("Item: "+task+ " not found in array ");
    
        }
    
        return this.tasks.length;
    
    }
}

let myTask = new Todo();

myTask.addTasks("q1");
myTask.addTasks("q2");

myTask.listAllTask();

myTask.addTasks("q4");
myTask.addTasks("q5");



