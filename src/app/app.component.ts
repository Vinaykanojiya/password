import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  passlength: number = 0;
  generatedpass: string = '';
  includeNum: boolean = false;
  includechar: boolean = false;
  includesym: boolean = false;
  
  getlength(length: string){
    
    this.passlength = +length
    
  }
  IncludeNumber(){
    this.includeNum = !this.includeNum
   // console.log(this.includeNum);
    
  }
  IncludeCharacter(){
    this.includechar = !this.includechar
    //console.log(this.includechar);
    
  }
  Includesymbol(){
    this.includesym = !this.includesym
    //console.log(this.includesym);
    
  }
  genpass(){
    this.generatedpass = '';//solving glitch
    let validchar = '';
    if(this.includeNum){
      validchar += '1234567890';
    }
    if(this.includechar){
      validchar += 'qwertyuiopasdfghjklzxcvbnm';
    }
    if(this.includesym){
      validchar += '!@#$%^&*()_+?><'
    }
    //console.log(validchar);
    


    for(var s = 0; s< this.passlength; s++){
      this.generatedpass += validchar.charAt(Math.round(Math.random()*validchar.length));
    }
    //console.log(this.generatedpass)
  }
}

