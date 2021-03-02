import { Figure } from "./abstract/figure.model";

export class King extends Figure {

	checkIfPositionPossible(newPosition: number, replaceableFigure: Figure) {
		let isMovingPossible = [1,7,8,9].includes(Math.abs(this.position - newPosition));
		let isBeatingPossible = super.checkIfPositionPossible(newPosition, replaceableFigure)
		return isMovingPossible && isBeatingPossible
	}
}
