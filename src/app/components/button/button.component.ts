import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.less'],
})
export class ButtonComponent implements OnInit {
	@Input() color!: string;
	@Input() text!: string;
	@Output() btnClick = new EventEmitter();

	ngOnInit(): void {}

	onClick() {
		this.btnClick.emit();
	}
}
