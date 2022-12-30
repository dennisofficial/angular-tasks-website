import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
	title: string = 'Angular Test';
	showAddModal: boolean = false;
	subscription: Subscription;

	constructor(private modalService: ModalService) {
		this.subscription = this.modalService
			.onToggleAddModal()
			.subscribe((value) => (this.showAddModal = value));
	}

	ngOnInit() {}

	toggleAddTask() {
		this.modalService.toggleAddModal();
	}
}
