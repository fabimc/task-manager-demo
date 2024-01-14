import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../core/services/tasks/task.service';
import { Task } from '../../core/interfaces/task.interface';
import { Observable, catchError, filter, map, of } from 'rxjs';
import { TaskItemComponent } from './task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  imports: [CommonModule, TaskItemComponent],
})
export class TasksComponent {
  tasks$: Observable<Task[]>;

  constructor(private taskService: TaskService) {
    this.tasks$ = new Observable<Task[]>();
  }

  ngOnInit(): void {
    this.tasks$ = this.taskService
      .getTasks()
      .pipe(catchError((error) => [error]));
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task.id).subscribe(() => {
      this.tasks$ = this.tasks$.pipe(
        map((tasks) => tasks.filter((t) => t.id !== task.id))
      );
    });
  }

  completeTask(task: Task) {
    this.taskService.updateTask({ ...task, completed: !task.completed}).subscribe(() => {
      this.tasks$ = this.tasks$.pipe(
        map((tasks) => tasks.map((t) => t.id === task.id ? { ...task, completed: !task.completed } : t)
      ));
    });
  }

}
