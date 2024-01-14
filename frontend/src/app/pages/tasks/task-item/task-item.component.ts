import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../../core/interfaces/task.interface';
@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onCompleteTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onComplete(task: Task) {
    this.onCompleteTask.emit(task);
  }
}
