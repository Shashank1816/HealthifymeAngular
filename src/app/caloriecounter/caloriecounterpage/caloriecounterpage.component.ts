import { CalorieDetail } from './../../CalorieDetail';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caloriecounterpage',
  templateUrl: './caloriecounterpage.component.html',
  styleUrls: ['./caloriecounterpage.component.css']
})
export class CaloriecounterpageComponent implements OnInit {

  constructor(public appservice: AppService, public route: Router) { }

  foodname: string = "";
  foodList: any[] = [];
  calorieDetail: any;
  TotalCalories = 0;
  OtherNutrients = [0, 0, 0];
  ngOnInit(): void {
  }

  //caloriedetail:string = "";
  //   addPlan(plan_id: number) {
  //     this.appservice.getPlan(plan_id).subscribe(data => {
  //       this.plan = data;
  //       console.log("Check Plan", this.plan);
  //     })

  foodapi() {
    console.log("inside foodapi", this.foodname);

    this.appservice.getcalorieinfo(this.foodname).subscribe(data => {
      console.log("Got API data", data);
      var caloriedetail = data;
      var calstr = JSON.stringify(caloriedetail);
      const caldetail = JSON.parse(calstr);
      this.generatecaloriedetail(caldetail);
    })
  }

  generatecaloriedetail(caldetail: any) {
    this.calorieDetail = new CalorieDetail(caldetail.text, caldetail.hints[0].food.image, caldetail.hints[0].food.nutrients.ENERC_KCAL, caldetail.hints[0].food.nutrients.PROCNT, caldetail.hints[0].food.nutrients.FAT, caldetail.hints[0].food.nutrients.CHOCDF);
    console.log(this.calorieDetail);
    this.foodList.push([this.calorieDetail.foodname, Math.round(this.calorieDetail.calories)]);
    this.TotalCalories += Math.round(this.calorieDetail.calories);
    this.OtherNutrients[0] += Math.round(this.calorieDetail.protein);
    this.OtherNutrients[1] += Math.round(this.calorieDetail.fat);
    this.OtherNutrients[2] += Math.round(this.calorieDetail.carbs);
  }

  navigatetotrackers() {
    this.route.navigateByUrl("trackers");
  }
}
