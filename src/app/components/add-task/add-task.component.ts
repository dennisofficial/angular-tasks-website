import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Task } from 'src/app/interfaces/Task';
import { ModalService } from 'src/app/services/modal.service';

@Component({
	selector: 'app-add-task',
	templateUrl: './add-task.component.html',
	styleUrls: ['./add-task.component.less'],
})
export class AddTaskComponent {
	@Output() onAddTask: EventEmitter<Task> = new EventEmitter();

	text: string = '';
	day: string = '';
	reminder: boolean = false;

	showAddModal: boolean = false;
	subscription: Subscription;

	constructor(private modalService: ModalService) {
		this.subscription = this.modalService
			.onToggleAddModal()
			.subscribe((value) => (this.showAddModal = value));
	}

	ngOnInit(): void {}

	onSubmit(): void {
		if (!this.text) {
			alert('Please enter a text');
			return;
		}

		const newTask: Task = {
			text: this.text,
			day: this.day,
			reminder: this.reminder,
		};

		this.onAddTask.emit(newTask);

		this.text = '';
		this.day = '';
		this.reminder = false;

		this.modalService.toggleAddModal();
	}

	onClose(): void {
		this.modalService.toggleAddModal();
	}
}
