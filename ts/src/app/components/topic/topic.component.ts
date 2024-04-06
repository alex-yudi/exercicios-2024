import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
})
export class TopicComponent implements OnInit {
  showAllTopic: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleShowAllTopic(): void {
    this.showAllTopic = !this.showAllTopic;
  }
}
