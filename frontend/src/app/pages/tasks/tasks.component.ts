import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../core/services/tasks/task.service';
import { Task } from '../../shared/interfaces/task.interface';
import { Observable, catchError, filter, map, mergeMap, of } from 'rxjs';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskItemComponent } from './task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  imports: [CommonModule, TaskItemComponent, AddTaskComponent],
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
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks$ = this.tasks$.pipe(
        map((tasks) => tasks.filter((t) => t.id !== task.id)),
        catchError((error) => [error])
      );
    });
  }

  completeTask(task: Task) {
    this.taskService
      .updateTask({ ...task, completed: !task.completed })
      .subscribe(() => {
        this.tasks$ = this.tasks$.pipe(
          map((tasks) =>
            tasks.map((t) =>
              t.id === task.id ? { ...task, completed: !task.completed } : t
            )
          ),
          catchError((error) => [error])
        );
      });
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((_task) => {
      this.tasks$ = this.tasks$.pipe(
        map((tasks) => [...tasks]),
        catchError((error) => [error])
      );
    });
  }

  updateTask(task: Task) {
    this.taskService.updateTask(task).subscribe(() => {
      this.tasks$ = this.tasks$.pipe(
        map((tasks) =>
          tasks.map((t) =>
            t.id === task.id ? { ...task, text: task.text, editing: false } : t
          )
        ),
        catchError((error) => [error])
      );
    });
  }

  cancelUpdateTask(task: Task) {
    this.tasks$ = this.tasks$.pipe(
      map((tasks) =>
        tasks.map((t) => (t.id === task.id ? { ...t, editing: false } : t))
      ),
      catchError((error) => [error])
    );
  }
}
