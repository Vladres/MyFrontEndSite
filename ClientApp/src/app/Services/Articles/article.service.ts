import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  public articles : Article[] = [
      { Title : "Title1" , Text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet cum enim." , imgSource : "https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg"},
      { Title : "Title2" , Text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet cum enim." , imgSource : "https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg"},
      { Title : "Title3" , Text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet cum enim. " , imgSource : "https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg"},
      { Title : "Title4" , Text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet cum enim." , imgSource : "https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg"},
      { Title : "Title5" , Text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet cum enim." , imgSource : "https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg"},
      { Title : "Title6" , Text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet cum enim. " , imgSource : "https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg"},
      { Title : "Title1" , Text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet cum enim." , imgSource : "https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg"},
      { Title : "Title2" , Text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet cum enim." , imgSource : "https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg"},
      { Title : "Title3" , Text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet cum enim. " , imgSource : "https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg"},
      { Title : "Title4" , Text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet cum enim." , imgSource : "https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg"},
      { Title : "Title5" , Text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet cum enim." , imgSource : "https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg"},
      { Title : "Title6" , Text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet cum enim. " , imgSource : "https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg"}
  ]
  
  constructor() { }

  getArticles() : Observable<Article[]> {
    return of(this.articles);
  }

  addArticle(value : Article) : void{
    if(value)
      this.articles.push(value);
  }
}

export class Article{
    Title : string;
    Text : string;
    imgSource : string;
}