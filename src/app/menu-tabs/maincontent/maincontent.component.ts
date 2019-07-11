import { Component, OnInit,ViewChild, Injectable } from '@angular/core';
import { MainContent } from 'src/app/model/maincontent.model';
import { MainContentService } from './maincontent.service';
import { forEach } from '@angular/router/src/utils/collection';
import { MainContentTabModel } from './mainconent.model';


@Component({
  selector: 'main-content',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})


export class MaincontentComponent implements OnInit {

  response :any;
  errormsg:any;
  mainCont : MainContentTabModel = {
    state:"" 
  }

  arraVal = [
    "Aamir Khan",
    "Akshay Kumar",
    "Ajay Devgn",
    "Amjad Khan",
    "Amitabh Bachchan",
    "Amol Palekar",
    "Abhay Deol",
    "Akshaye Khanna",
    "Arshad Warsi",
    "Anushka Shetty",
    "Atul Kulkarni",
    "Asrani",
    "Ayushmann Khurrana",
    "Aruna Irani",
    "Annu Kapoor",
    "Ashish Vidyarthi",
    "Adil Hussain",
    "Anupam Kher",
    "Anil Kapoor",
    "Amrish Puri"
]



  brndata = {
    "registeredEmail": "sragvi0703@gmail.com",
    "firstName": "Shalini",
    "surName": "Bandargallu",
    "profileImagePath": "../uploads/Shalini_Bandargallu/IMG_4382 (1).jpg",
    "studentID": "181106",
    "batchID": "1811",
    "role": "student",
    "loggedIn": "yes"
}
  constructor(private _maincontentserrvice:MainContentService) {}

  
  ngOnInit() {
    
    for (let i = 0; i < this.arraVal.length; i++) {
      const element = this.arraVal[i];
      console.log(element);
    }

  for(let i in this.arraVal){
    const element1 = this.arraVal[i];
    console.log("for each --"+element1);
  }


   /*  let obs = this.httpClient.get('assets/customer.json');
    obs.subscribe((res)=> {
      console.log(res+"-------------- saddsdsad")
      this.response = res;
    }) */
  }

  getResponse(){
    this._maincontentserrvice.getDeviceTypeList().
    subscribe(data=> {
      // console.log(res+"-------------- saddsdsad")
       console.log("this.response  "+JSON.stringify(data));
       this.response = data
    },
       error => {
         console.log("this.response  "+JSON.stringify(error));
       this.errormsg = error
       });
      
  }

 /*  onSubmit(mcForm:NgForm):void { 

    console.log(mcForm.value)
   }
  */
/*  onSubmit(mcForm:MainContent):void { 

  console.log(mcForm)
 } */

  
  

}
