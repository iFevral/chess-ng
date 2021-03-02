import { Figure } from "./abstract/figure.model";

export class Knight extends Figure {

	checkIfPositionPossible(newPosition: number, replaceableFigure: Figure) {
		let isMovingPossible = [6,10 ,15, 17].includes(Math.abs(this.position - newPosition));
		let isBeatingPossible = super.checkIfPositionPossible(newPosition, replaceableFigure)
		return isMovingPossible && isBeatingPossible
	}
}