import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  GoToHome(){
    //this.route.navigate(['Home'], 
    //this.route.navigateByUrl('Home')
  }
}

//Navigate and navigateByUrl method always uses absolute path
 
//But if we want to use relative then we need to import private route:Activated Royte in the constructor and
//this.route.navigate(['Home'], {relativeTo: this.route})   //localhost:4200/About/Home
