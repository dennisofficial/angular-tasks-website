import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
	selector: 'app-task-item',
	templateUrl: './task-item.component.html',
	styleUrls: ['./task-item.component.less'],
})
export class TaskItemComponent {
	@Input() task!: Task;
	@Output() deleteEvent: EventEmitter<Task> = new EventEmitter();
	@Output() dblClickEvent: EventEmitter<Task> = new EventEmitter();

	constructor(public taskService: TaskService) {}

	onClick(task: Task): void {
		this.deleteEvent.emit();
	}

	onDblClick(): void {
		this.dblClickEvent.emit();
	}
}
