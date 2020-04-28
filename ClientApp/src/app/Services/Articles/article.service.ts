import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  public articles : Article[] = [
      {id : 1 , Title : "Title1" , Text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet cum enim." , imgSource : "https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg"},
      {id : 2,  Title : "Title2" , Text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet cum enim." , imgSource : "https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg"},
      {id : 3,  Title : "Title3" , Text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet cum enim. " , imgSource : "https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg"},
      {id : 4,  Title : "Title4" , Text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet cum enim." , imgSource : "https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg"},
      {id : 5,  Title : "Title5" , Text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet cum enim." , imgSource : "https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg"},
      {id : 6,  Title : "Title6" , Text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet cum enim. " , imgSource : "https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg"},
      {id : 7,  Title : "Title7" , Text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet cum enim." , imgSource : "https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg"},
      {id : 8,  Title : "Title8" , Text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet cum enim." , imgSource : "https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg"},
      {id : 9,  Title : "Title9" , Text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet cum enim. " , imgSource : "https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg"},
      {id : 10, Title : "Title10" , Text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet cum enim." , imgSource : "https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg"},
      {id : 11, Title : "Title11" , Text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet cum enim." , imgSource : "https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg"},
      {id : 12, Title : "Title12" , Text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet cum enim. " , imgSource : "https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg"}
  ]
  
  constructor() { }

  getArticles() : Observable<Article[]> {
    return of(this.articles);
  }

  getArticlesByID(value : number) : Article {
    return this.articles.find(tmp => tmp.id == value);
  }

  addArticle(value : Article) : void{
    if(value)
      this.articles.push(value);
  }
}

export class Article{
    id : number;
    Title : string;
    Text : string;
    imgSource : string;
}