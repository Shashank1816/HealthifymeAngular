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

  constructor(public appservice:AppService, public route:Router) { }

  foodname: string ="";
  foodList : any[] = [];
  calorielist: any[]=[];
  calorieDetail: any;
  TotalCalories = 0;
  ngOnInit(): void {
  }

//caloriedetail:string = "";
//   addPlan(plan_id: number) {
//     this.appservice.getPlan(plan_id).subscribe(data => {
//       this.plan = data;
//       console.log("Check Plan", this.plan);
//     })

  foodapi(){
    console.log("inside foodapi" ,this.foodname);
    
    this.appservice.getcalorieinfo(this.foodname).subscribe(data => {
      console.log("Got API data", data);
      var caloriedetail = data;
      var calstr = JSON.stringify(caloriedetail);
      const caldetail = JSON.parse(calstr);
      setTimeout(() => {
        this.generatecaloriedetail(caldetail);
      }, 100);
    })
  }

  generatecaloriedetail(caldetail: any){
    this.calorieDetail = new CalorieDetail(caldetail.text, caldetail.hints[0].food.image,caldetail.hints[0].food.nutrients.ENERC_KCAL,caldetail.hints[0].food.nutrients.PROCNT,caldetail.hints[0].food.nutrients.FAT,caldetail.hints[0].food.nutrients.CHOCDF);
    console.log(this.calorieDetail);
    this.foodList.push(this.calorieDetail.foodname);
    this.calorielist.push(this.calorieDetail.calories);
    this.TotalCalories += this.calorieDetail.calories;
  }

  navigatetotrackers(){
    this.route.navigateByUrl("trackers");
  }
}
