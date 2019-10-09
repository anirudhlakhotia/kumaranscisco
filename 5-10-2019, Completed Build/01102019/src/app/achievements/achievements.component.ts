import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  categoryList: Array<any> = [
    { name: 'Music', subcategory: ['Drums', 'Vocals', 'Guitar'] },
    { name: 'Dance', subcategory: ['Kathak','Bharatanatyam'] },
    { name: 'Sports', subcategory: ['Football','Basketball'] },
    { name: 'Technology', subcategory: [] },
    { name: 'Art', subcategory: ['Painting'] },
  ];

  subcategories: Array<any>;
  changeCategory(count) {
    this.subcategories = this.categoryList.find(con => con.name == count).subcategory;
  }
  constructor() { }

  ngOnInit() {
  }

}
