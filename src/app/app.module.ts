import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { BoardService } from './components/board/board.service';
import { FigureComponent } from './components/figure/figure.component';

@NgModule({
	declarations: [
		AppComponent,
		BoardComponent,
		FigureComponent
	],
	imports: [
		BrowserModule,
		DragDropModule
	],
	providers: [BoardService],
	bootstrap: [AppComponent]
})
export class AppModule { }
