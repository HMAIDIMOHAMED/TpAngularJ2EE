import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  private tasks: Task[]= [
    {id:1, title:'First Task', description:'This is the first task', done:false},
    {id:2, title:'Second Task', description:'This is the second task', done:false},
    {id:3, title:'Third Task', description:'This is the third task', done:false},
    {id:4, title:'Fourth Task', description:'This is the fourth task', done:false},
    {id:5, title:'Fifth Task', description:'This is the fifth task', done:false},
  ];

  getTasks(): Task[]{
    return this.tasks;
  }

  getTask(id: number): Task{
    const task = this.tasks.find(task => task.id === id);
    if (!task) {
      throw new Error(`Task with id ${id} not found`);
    }
    return task;
  }
}
