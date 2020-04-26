import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  constructor() { }

  toggle : boolean = false;

  
  ngOnInit(): void {
  }

  switchClass(){
    this.toggle = !this.toggle;
  }
}
