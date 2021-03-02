import { Figure } from "./abstract/figure.model";

export class Rook extends Figure {

	checkIfPositionPossible(newPosition: number, replaceableFigure: Figure) {
		let isMovingPossible = Math.floor(this.position / 8) === Math.floor(newPosition / 8) || Math.abs(this.position - newPosition) % 8 === 0;
		let isBeatingPossible = super.checkIfPositionPossible(newPosition, replaceableFigure)
		return isMovingPossible && isBeatingPossible
	}
}
