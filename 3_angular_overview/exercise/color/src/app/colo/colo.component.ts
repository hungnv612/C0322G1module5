import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colo',
  templateUrl: './colo.component.html',
  styleUrls: ['./colo.component.css']
})
export class ColoComponent implements OnInit {
  color = '';
  constructor() { }

  ngOnInit(): void {
  }

}
