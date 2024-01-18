import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes, faEdit, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Task } from '../../../shared/interfaces/task.interface';
@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onCompleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onUpdateTask: EventEmitter<Task> = new EventEmitter();
  @Output() onEditTask: EventEmitter<Task> = new EventEmitter();
  @Output() onCancelUpdateTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  faEdit = faEdit;
  faCheck = faCheck;
  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onComplete(task: Task) {
    this.onCompleteTask.emit(task);
  }

  onUpdate(task: Task) {
    this.onUpdateTask.emit(task);
  }

  onEdit(task: Task) { 
    task.editing = true;
  }

  onCancelUpdate(task: Task) {
    this.onCancelUpdateTask.emit(task);
  }
}
