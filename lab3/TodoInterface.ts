export interface TodoInterface{

    tasks: Array<string>;
    addTasks(task:string):number;
    listAllTask():void;
    deleteTask(task:string);

}