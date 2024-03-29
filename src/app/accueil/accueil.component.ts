import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DEFAULT } from '../pokemon/interfaces/enums/default.enum';
import { RoomDTO } from '../room/interfaces/dtos/room.dto';
import { GameParameters } from '../room/interfaces/gameParameters';
import { RoomService } from '../room/room.service';
import { ReconnectModalComponent } from './reconnect-modal/reconnect-modal.component';
import { RoomListComponent } from './room-list/room-list.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  constructor(private roomService: RoomService, private router: Router, public dialog: MatDialog) {
  }

  DEFAULT = DEFAULT;
  currentRoom: string;
  pseudo: string;
  isDialogOpen: boolean = false;

  rooms: RoomDTO[] = new Array();

  @ViewChild("roomListComponent", { static: false }) roomListComponent: RoomListComponent;

  ngOnInit() {
    this.roomService.getSessionInfos();
    this.subscribeEvents();
  }

  ngOnDestroy() {
    this.unsubscribeEvents();
  }

  createRoom(gameParameters: GameParameters) {
    this.roomService.createRoom(gameParameters);
  }

  subscribeEvents() {
    this.roomService.socket.on("createRoom", (roomId: string) => {
      this.router.navigate(['room', roomId]);
    });

    this.roomService.socket.on("getSessionInfos", payload => {
      const { pseudo, inRoomId } = payload;
      this.currentRoom = inRoomId;
      this.pseudo = pseudo;
      if (inRoomId !== DEFAULT.NO_ROOM && !this.isDialogOpen) {
        this.isDialogOpen = true;
        const dialogRef = this.dialog.open(ReconnectModalComponent, {
          data: {
            currentRoom: inRoomId,
          },
        });
        dialogRef.afterClosed().subscribe(() => {
          this.isDialogOpen = false;
        });
      }
      this.roomListComponent.refresh();
    });
  }
  unsubscribeEvents() {
    this.roomService.socket.off("createRoom");
    this.roomService.socket.off("getSessionInfos");
  }
}