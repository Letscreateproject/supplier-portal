import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  notificationList: any = [];
  notificationCount: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.getNotificationList();
  }

  getNotificationList() {
    this.notificationList = [
      {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum risus eget viverra venenatis.',
        subject: 'Password Update Requested',
        time: '2 hrs ago',
        isRead: false,
      },
      {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum risus eget viverra venenatis.',
        subject: 'Password Update Requested',
        time: '3 hrs ago',
        isRead: false,
      },
      {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum risus eget viverra venenatis.',
        subject: 'Password Update Requested',
        time: '4 hrs ago',
        isRead: true,
      },
      {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum risus eget viverra venenatis.',
        subject: 'Password Update Requested',
        time: '4 hrs ago',
        isRead: true,
      },
      {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum risus eget viverra venenatis.',
        subject: 'Password Update Requested',
        time: '4 hrs ago',
        isRead: true,
      },
      {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum risus eget viverra venenatis.',
        subject: 'Password Update Requested',
        time: '5 hrs ago',
        isRead: true,
      },
      {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum risus eget viverra venenatis.',
        subject: 'Password Update Requested',
        time: '1 day ago',
        isRead: true,
      },
      {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum risus eget viverra venenatis.',
        subject: 'Password Update Requested',
        time: '1 day ago',
        isRead: true,
      },
      {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum risus eget viverra venenatis.',
        subject: 'Password Update Requested',
        time: '1 day ago',
        isRead: true,
      },
      {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum risus eget viverra venenatis.',
        subject: 'Password Update Requested',
        time: '1 day ago',
        isRead: true,
      },
      {
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum risus eget viverra venenatis.',
        subject: 'Password Update Requested',
        time: '2 days ago',
        isRead: true,
      },
    ];
    this.notificationCount = this.notificationList.length;
  }
  /**
   * this function will delete the notification
   * @param {Notification} notification - the notification object
   * @returns void
   */
  deleteNotification(notification: Notification) {
    const index: number = this.notificationList.indexOf(notification);
    if (index !== -1) {
      this.notificationList.splice(index, 1);
      this.setNotificationCount();
    }
    //this will delete the notification
  }
  /**
   * this function will delete all the notifications
   * @param none - the notification object
   * @returns void
   */
  deleteAll() {
    //write fuction to delete all the notifiacation
    this.notificationList = [];
    this.setNotificationCount();
  }
  /**
   * this function will set the notification count when there is a change
   * @param none
   * @returns void
   */
  setNotificationCount() {
    this.notificationCount = this.notificationList.length;
  }
}
