import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

   socialmedia = [
      {
        nev: 'Facebook',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/900px-Facebook_f_logo_%282019%29.svg.png',
        link: 'https://www.facebook.com/'
      },
      {
        nev: 'Instagram',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/198px-Instagram_logo_2016.svg.png',
        link: 'https://www.instagram.com/painter.krutillajozsef/'
        
      },
      {
        nev: 'Twitter',
        logo:'https://www.danoneinstitute.org/wp-content/uploads/2020/06/logo-rond-twitter-300x300.png',
        link: 'https://twitter.com/?lang=hu'
      },
      
     ];

  constructor(){}
  

  ngOnInit(): void {
  }

}
