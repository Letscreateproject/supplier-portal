import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Chat } from 'src/app/models/chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @ViewChild('bottomsheet') bottomsheet!: TemplateRef<any>;
  chatList: Chat[] = [];
  profileForm: any = FormGroup;
  constructor(private _bottomSheet: MatBottomSheet) {}
  /**
   * function to open the chat
   */
  openBottomSheet(): void {
    this._bottomSheet.open(this.bottomsheet, {
      panelClass: 'my-component-bottom-sheet',
    });
  }
  /**
   * function to close the chat
   */
  closeBottomSheet(event: Event): void {
    this._bottomSheet.dismiss();
    event.preventDefault();
  }
  /**
   * function to get list of the chats
   */
  getChat() {
    this.chatList = [
      {
        chatBody: 'Lorem ipsum dolor sit amet, ',
        chatDir: 'from',
        chatTime: '3:30pm',
      },
      {
        chatBody:
          'consectetur adipiscing elit. Vivamus dapibus eget dolor vel pharetra.',
        chatDir: 'to',
        chatTime: '3:30pm',
      },
      {
        chatBody:
          'Aliquam lorem ante, aliquet sit amet sem at, elementum tincidunt augue. Class aptent taciti sociosqu',
        chatDir: 'from',
        chatTime: '3:31pm',
      },
      { chatBody: 'ad litora', chatDir: 'to', chatTime: '3:32pm' },
    ];
  }
  ngOnInit(): void {
    this.profileForm = new FormGroup({
      chatStr: new FormControl('', Validators.required),
    });
    this.getChat();
  }
  /**
   * function to send a  chat
   */
  sendChat() {
    if (this.profileForm.valid) {
      this.chatList.push({
        chatBody: this.profileForm.controls['chatStr'].value,
        chatDir: 'to',
        chatTime: '4:50am',
      });
      this.profileForm.controls['chatStr'].setValue('');
      this.profileForm.markAsPristine();
      this.profileForm.markAsUntouched();
    }
  }
}
