import { FigureType } from "../enums/figure-types.enum";
import { Figure } from "./abstract/figure.model";

export class Bishop extends Figure {

	checkIfPositionPossible(newPosition: number, replaceableFigure: Figure) {
		let isMovingPossible = Math.abs(this.position - newPosition) % 7 === 0 || Math.abs(this.position - newPosition) % 9 === 0
		let isBeatingPossible = super.checkIfPositionPossible(newPosition, replaceableFigure)
		return isMovingPossible && isBeatingPossible
	}
}
