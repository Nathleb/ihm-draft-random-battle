import { Component } from '@angular/core';
import { RoomService } from 'src/app/room/room.service';

@Component({
  selector: 'app-nickname-form',
  templateUrl: './nickname-form.component.html',
  styleUrls: ['./nickname-form.component.scss']
})
export class NicknameFormComponent {


  constructor(private roomService: RoomService) {

  }

  nickname: string = '';

  updateNickname() {
    if (this.formIsValid()) {
      this.roomService.updateNickname(this.nickname);
    }
  }

  formIsValid(): boolean {

    return this.nickname.length > 2 &&
      this.nickname.length < 30 &&
      new RegExp(/^[a-z0-9]+$/).test(this.nickname);
  }
}