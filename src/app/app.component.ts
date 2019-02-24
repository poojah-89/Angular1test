import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'poojastest';
  uname;
constructor()
{
  
}
  ngOnInit()
  {
  
  }

  submit()
  {
    this.uname=null;
  }
}
