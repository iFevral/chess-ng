import { FigureColor } from "../enums/figure-color.enum";
import { Figure } from "./abstract/figure.model";

export class Pawn extends Figure {

	checkIfPositionPossible(newPosition: number, replaceableFigure: Figure) {
		let direction = this.color === FigureColor.White ? 1 : -1
		let rowByColor = this.color === FigureColor.White ? 6 : 1
		let isMovingPossible = (this.position - newPosition) * direction === 8 && (!replaceableFigure || Math.abs(replaceableFigure?.position - this.position) !== 8)

		if (Math.floor(this.position / 8) === rowByColor)
			isMovingPossible = isMovingPossible || (this.position - newPosition) * direction === 16
			
		let isBeatingPossible =
			super.checkIfPositionPossible(newPosition, replaceableFigure) &&
			(Math.abs(replaceableFigure?.position - this.position) === 7 || Math.abs(replaceableFigure?.position - this.position) === 9)
	
		this.position = isMovingPossible || isBeatingPossible ? newPosition : this.position
		return isMovingPossible || isBeatingPossible
	}
}
