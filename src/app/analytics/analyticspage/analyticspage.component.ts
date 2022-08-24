import { Component, OnInit } from '@angular/core';
import { ChartConfiguration , Chart } from 'chart.js';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-analyticspage',
  templateUrl: './analyticspage.component.html',
  styleUrls: ['./analyticspage.component.css']
})
export class AnalyticspageComponent implements OnInit {

  
  //public dataArray:number[]=[];
  // 1) for water data
  waterarray:any;
  result:any;
  chart:any=[];

  // 2) for calorie data
  caloriearray:any;
  result2:any;
  chart2:any=[];

  // 3) for weight data
  weightarray:any;
  result3:any;
  chart3:any;
  
  constructor(public appservice:AppService) { 
  //   this.getWaterArray(this.waterarray);
  //   console.log("Inside constructor waterarray is : ",this.waterarray);

  }
  
  ngOnInit(): void {
    // 1)  this is for getting water data

    this.appservice.getUsersWaterList().subscribe(data=>{
      this.result=data;
      console.log(this.result);
      this.waterarray = this.result.map((count:any)=>count.water_count);
      console.log("After map function : ",this.waterarray)
      console.log("Length of water array is ",this.waterarray.length)

      //show chart data
      this.chart = new Chart('canvas',{
        type:'bar',
        data:{
          labels: Array.from(Array(this.waterarray.length).keys()),
          datasets:[{
            label:'No. of Glasses of water',
            data:this.waterarray,
            borderWidth: 1,
            backgroundColor:'rgba(93,175,89,0.1)',
             
          }]

        }
      })

      
    });

    // 2) This is for getting calorie burnt data
    this.appservice.getUsersCalorieList().subscribe(data=>{
      this.result2=data;
      console.log("This is calorie data ",this.result2);
      this.caloriearray = this.result2.map((count:any)=>count.calories);
      console.log("This is calories Array ",this.caloriearray);

      //show chart data for calorie
      this.chart2 = new Chart('canvas2',{
        type:'bar',
        data:{
          labels: Array.from(Array(this.caloriearray.length).keys()),
          datasets:[{
            
            label:'Calorie intake (kcal)/entry',
            data:this.caloriearray,
            borderWidth: 1,
            backgroundColor:'rgba(93,175,89,0.1)',
             
          }]

        }
      })
    });

    // 3) this is for getting weight data
    this.appservice.getUsersWeightList().subscribe(data=>{
      this.result3=data;
      console.log("The weight data is : ",this.result3);
      this.weightarray = this.result3.map((count:any)=>count.weight);
      console.log("This is Weight Array ",this.weightarray);

       //show chart data for calorie
       this.chart3 = new Chart('canvas3',{
        type:'bar',
        data:{
          labels: Array.from(Array(this.weightarray.length).keys()),
          datasets:[{
            label:'Your Weight Trend(kg)',
            data:this.weightarray,
            borderWidth: 1,
            backgroundColor:'rgba(93,175,89,0.1)',
             
          }]

        }
      })
    })

  }


}
