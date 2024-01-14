import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiService } from '../../../core/services/ui/ui.service';
import { Subscription } from 'rxjs';
import { Task } from '../../../shared/interfaces/task.interface';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  completed!: boolean;
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}
  
   ngOnDestroy() {
        // Unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

  onSubmit() {
    if (!this.text) {
      //alert('Please add a task!');
      return;
    }

    const newTask: Task = {
      text: this.text,
      completed: this.completed,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.completed = false;
  }

}
