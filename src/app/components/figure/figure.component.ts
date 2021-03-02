import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FigureColor } from 'src/app/shared/enums/figure-color.enum';
import { Figure } from 'src/app/shared/models';


@Component({
	selector: 'app-figure',
	templateUrl: './figure.component.html',
	styleUrls: ['./figure.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush

})
export class FigureComponent {
	@Input() figure?: Figure
	@Input() currentColor?: FigureColor
	
	getFigureTypeClassName(): string {
		return this.figure?.color + '-' + this.figure?.type
	}
}
