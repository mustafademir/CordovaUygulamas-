import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { post } from '../../entities/post';
import { user } from '../../entities/user';
import { DetailPage} from '../detail/detail';
import "rxjs/add/operator/map";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: post[];
  users: user[];
  constructor(public navCtrl: NavController,
              private http: Http
  ) {

  }

  getPosts(): Observable<post[]>{
  return this.http.get("https://jsonplaceholder.typicode.com/posts")
      .map(response => response.json())
    //console.log(this.http.get("https://jsonplaceholder.typicode.com/posts"));
  //  .map(response => response.json());

  }

  veriAl(){
    this.getPosts().subscribe( p=> {
      this.posts = p;
      console.log(this.posts);
    })
  }

  getUsers(): Observable<user[]>{
    return this.http.get("https://jsonplaceholder.typicode.com/users")
    .map(responseUser => responseUser.json())
  }

  getUsersList(){
    this.getUsers().subscribe( u=> {
      this.users = u;
      console.log(this.users);
    })
  }


  ionViewDidLoad() {
    this.getUsersList();
    this.veriAl();
  }

  goDetail(post,name:string){
    this.navCtrl.push(DetailPage, {
      post:post,
      name:name
    })
  }
}
