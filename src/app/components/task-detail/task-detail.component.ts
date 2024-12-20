import { Component } from '@angular/core';
import { Task } from '../../model/task';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent {

  task!: Task;

  constructor(private taskService: TaskService){
  }

  ngOnInit(){
    const id = Number(window.location.pathname.split('/')[2]);
    this.getTask(id);}

  getTask(id : number){
    this.task=this.taskService.getTask(id);
  }



}
