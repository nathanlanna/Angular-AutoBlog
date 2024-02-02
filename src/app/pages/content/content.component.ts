import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string="";
  contentTitle:string="MINHA NOTICIA";
  contentDescription:string="nova noticia";
  id: string | null="0";

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => 
      this.id = value.get("Id"));

      this.setValuesToComponent(this.id)
  }
  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id.toString() == id)[0];
    this.contentTitle = result.title;
    this.photoCover = result.photo;
    this.contentDescription = result.description;

  }

}
