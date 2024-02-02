import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  smallPhoto:string ="https://cdn.motor1.com/images/mgl/Akkmoy/s3/honda-zr-v-2023.jpg";
  @Input()
  smallTitle:string ="Novidade chegando.";
  @Input()
  Id:string = "0"
  constructor() { }

  ngOnInit(): void {
  }

}
