import { Component } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../model/task';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  tasks : Task[]=[];

  constructor(private taskService: TaskService){

  }

  ngOnInit(){
    this.getTasks();
  }

  getTasks(){
    this.tasks=this.taskService.getTasks();
  }




}
