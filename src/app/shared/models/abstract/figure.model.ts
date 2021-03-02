import { FigureColor } from "../../enums/figure-color.enum";
import { FigurePosX } from "../../enums/figure-posx.enum";
import { FigureType } from "../../enums/figure-types.enum";

export interface FigurePosition {
	x: FigurePosX
	y: number
}

interface IFigure {
	checkIfPositionPossible(newPosition: number, replaceableFigure: IFigure): boolean;
}

export abstract class Figure implements IFigure {

	constructor(
		public type: FigureType,
		public color: FigureColor,
		public position: number = -1,
		public isMoved: boolean = false
	) {

	}
	coordinates(): FigurePosition {
		return {
			x: Math.ceil((this.position + 1) / 8),
			y: (this.position + 1) % 8
		}
	}
	checkIfPositionPossible(newPosition: number, replaceableFigure: Figure): boolean {
		return this.color !== replaceableFigure?.color && replaceableFigure?.type !== FigureType.King;
	}
}

