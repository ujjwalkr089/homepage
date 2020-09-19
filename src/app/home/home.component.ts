import { Component, OnInit } from '@angular/core';

export interface BlogPosts {
  Title: string;
  ImageUrl: string;
   subHeading: string;
  }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  FeaturesPosts: BlogPosts[] = [
    {
    ImageUrl: '../../assets/image/image1.jpg',
    Title:    'work,run',
    subHeading:   'ggffgdffnhghgg'
    },

    {
      ImageUrl: '../../assets/image/image2.jpg',
      Title:    'work,run',
      subHeading:   'ggffgdffnhghgg'
      },

      {
        ImageUrl: '../../assets/image/image3.jpg',
       Title:    'work,run',
        subHeading:   'ggffgdffnhghgg'
        }
       ];

       // tslint:disable-next-line: typedef
       GetSliderClass(isFirst, isLast, isEven, isOdd) {
        return{
         active: isFirst,
         lastactive: isLast,
         even: isEven,
          odd: isOdd

       };
      }


  constructor() { }

  ngOnInit(): void {
  }

}
