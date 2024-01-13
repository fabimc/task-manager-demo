import { Component } from '@angular/core';
import { TaskService } from '../../core/services/tasks/task.service';
import { Task } from '../../core/interfaces/task.interface';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  //tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      console.log(tasks);
    });
  }

}
