import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCardComponent } from './pokemon/pokemon-card/pokemon-card.component';
import { PokemonCardGridComponent } from './pokemon/pokemon-card-grid/pokemon-card-grid.component';
import { PokemonCardMovesComponent } from './pokemon/pokemon-card/pokemon-card-moves/pokemon-card-moves.component';
import { PokemonCardKeywordsComponent } from './pokemon/pokemon-card/pokemon-card-keywords/pokemon-card-keywords.component';
import { PokemonCardStatsComponent } from './pokemon/pokemon-card/pokemon-card-stats/pokemon-card-stats.component';
import { StatProgressBarComponent } from './pokemon/pokemon-card/pokemon-card-stats/stat-progress-bar/stat-progress-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { DragDropModule, CdkDropList, CdkDrag, CdkDragPreview } from '@angular/cdk/drag-drop';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AccueilComponent } from './accueil/accueil.component';
import { RoomComponent } from './room/room.component';
import { TableSitsComponent } from './room/table-sits/table-sits.component';
import { GameParametersFormComponent } from './accueil/game-parameters-form/game-parameters-form.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RoomListComponent } from './accueil/room-list/room-list.component';
import { NicknameFormComponent } from './accueil/nickname-form/nickname-form.component';
import { ReconnectModalComponent } from './accueil/reconnect-modal/reconnect-modal.component';
import { WelcomeMessageComponent } from './accueil/welcome-message/welcome-message.component';
import { TutorialComponent } from './tutorial/tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    PokemonCardGridComponent,
    PokemonCardMovesComponent,
    PokemonCardKeywordsComponent,
    PokemonCardStatsComponent,
    AccueilComponent,
    RoomComponent,
    StatProgressBarComponent,
    TableSitsComponent,
    GameParametersFormComponent,
    ToolbarComponent,
    RoomListComponent,
    NicknameFormComponent,
    ReconnectModalComponent,
    WelcomeMessageComponent,
    TutorialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatTooltipModule,
    CdkDropList,
    CdkDrag,
    CdkDragPreview,
    DragDropModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
