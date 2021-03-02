
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FigureColor } from 'src/app/shared/enums/figure-color.enum';
import { Figure } from 'src/app/shared/models';

import { BoardService } from './board.service';

@Component({
	selector: 'app-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent {
	currentColor?: FigureColor = FigureColor.White;

	constructor(public boardService: BoardService) { }

	setCellColor(index: number): boolean {
		const k: number = (index % 2) + ((index / 8) % 2)
		return k >= 1 && k < 2
	}


	drop(event: CdkDragDrop<Figure[]>) {
		if (!this.boardService.checkNewPosition(event.previousContainer.data, event.container.data)) {
			return
		}

		transferArrayItem(event.previousContainer.data,
			event.container.data,
			event.previousIndex,
			event.currentIndex)

		if (this.currentColor === FigureColor.White) this.currentColor = FigureColor.Black
		else if (this.currentColor === FigureColor.Black) this.currentColor = FigureColor.White

	}
}
