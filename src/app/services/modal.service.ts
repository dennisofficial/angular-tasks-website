import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ModalService {
	private showModal: boolean = false;
	private subject = new Subject<any>();

	constructor() {}

	toggleAddModal(): void {
		this.showModal = !this.showModal;
		this.subject.next(this.showModal);
	}

	onToggleAddModal(): Observable<any> {
		return this.subject.asObservable();
	}
}
