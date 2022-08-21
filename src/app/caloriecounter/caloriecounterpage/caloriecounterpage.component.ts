import { CalorieDetail } from './../../CalorieDetail';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-caloriecounterpage',
  templateUrl: './caloriecounterpage.component.html',
  styleUrls: ['./caloriecounterpage.component.css']
})
export class CaloriecounterpageComponent implements OnInit {

  constructor(public appservice:AppService) { }

  foodname: string ="";
  foodList : any[] = [];
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
      var caloriedetail = data;
      var calstr = JSON.stringify(caloriedetail);
      const caldetail = JSON.parse(calstr);
      this.generatecaloriedetail(caldetail);
    })
  }

  generatecaloriedetail(caldetail: any){
    this.calorieDetail = new CalorieDetail(caldetail.text, caldetail.parsed[0].food.image,caldetail.parsed[0].food.nutrients.ENERC_KCAL,caldetail.parsed[0].food.nutrients.PROCNT,caldetail.parsed[0].food.nutrients.FAT,caldetail.parsed[0].food.nutrients.CHOCDF);
    console.log(this.calorieDetail);
    this.foodList.push(this.calorieDetail.foodname);
    this.TotalCalories += this.calorieDetail.calories;
  }
}
