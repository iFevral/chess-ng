import { Injectable } from "@angular/core";
import { FigureColor } from "src/app/shared/enums/figure-color.enum";
import { FigureType } from "src/app/shared/enums/figure-types.enum";
import { Bishop, Figure, King, Knight, Pawn, Queen, Rook } from "src/app/shared/models";

@Injectable({
	providedIn: 'root'
})
export class BoardService {
	board: Array<Figure[]>

	constructor() {
		this.board = new Array<Figure[]>(64).fill([]).map(() => [])

		//Black Figures
		this.board[0].push(new Rook(FigureType.Rook, FigureColor.Black, 0))
		this.board[1].push(new Knight(FigureType.Knight, FigureColor.Black, 1))
		this.board[2].push(new Bishop(FigureType.Bishop, FigureColor.Black, 2))
		this.board[3].push(new Queen(FigureType.Queen, FigureColor.Black, 3))
		this.board[4].push(new King(FigureType.King, FigureColor.Black, 4))
		this.board[5].push(new Bishop(FigureType.Bishop, FigureColor.Black, 5))
		this.board[6].push(new Knight(FigureType.Knight, FigureColor.Black, 6))
		this.board[7].push(new Rook(FigureType.Rook, FigureColor.Black, 7))

		for (let i = 8; i <= 15; i++) {
			this.board[i].push(new Pawn(FigureType.Pawn, FigureColor.Black, i))
		}
		//White Figures
		for (let i = 48; i <= 55; i++) {
			this.board[i].push(new Pawn(FigureType.Pawn, FigureColor.White, i))
		}

		this.board[56].push(new Rook(FigureType.Rook, FigureColor.White, 56))
		this.board[57].push(new Knight(FigureType.Knight, FigureColor.White, 57))
		this.board[58].push(new Bishop(FigureType.Bishop, FigureColor.White, 58))
		this.board[59].push(new Queen(FigureType.Queen, FigureColor.White, 59))
		this.board[60].push(new King(FigureType.King, FigureColor.White, 60))
		this.board[61].push(new Bishop(FigureType.Bishop, FigureColor.White, 61))
		this.board[62].push(new Knight(FigureType.Knight, FigureColor.White, 62))
		this.board[63].push(new Rook(FigureType.Rook, FigureColor.White, 63))

	}

	checkNewPosition(draggableContainer: Figure[], replaceableContainer: Figure[]) {
		let draggableFigure = draggableContainer[0];
		let replaceableFigure = replaceableContainer[0];
		let newFigurePosition = this.board.indexOf(replaceableContainer)

		let isNewPositionPossible = draggableFigure.checkIfPositionPossible(newFigurePosition, replaceableFigure)
		let isSegmentEmpty = draggableFigure.type !== FigureType.Knight ? this.isSegmentEmpty(draggableFigure.position, newFigurePosition) : true;

		if (!isNewPositionPossible || !isSegmentEmpty) {
			return false
		}

		draggableFigure.position = newFigurePosition
		while (replaceableContainer.length !== 0)
			replaceableContainer.pop()

		return true;
	}

	isSegmentEmpty(startPos: number, endPos: number) {

		let minPos = Math.min(startPos, endPos)
		let maxPos = Math.max(startPos, endPos)
		let k = (maxPos - minPos) / (Math.floor(maxPos / 8) - Math.floor(minPos / 8))

		return Math.floor(maxPos / 8) === Math.floor(minPos / 8) ? this.checkPath(minPos, maxPos, 1) : this.checkPath(minPos, maxPos, k)
	}

	checkPath(startPos: number, endPos: number, k: number) {
		for (let i = startPos + k; i < endPos; i += k)
			if (this.board[i].length !== 0)
				return false

		return true
	}

}