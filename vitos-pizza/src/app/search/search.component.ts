import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private activatedRoute: ActivatedRoute, private router: Router){

  }

  searchTerm:string = "";

  ngOnInit(){
    this.activatedRoute.params.subscribe(params=>{
      this.searchTerm = params["searchTerm"];
    });
  }

  search():void{

    this.router.navigateByUrl("/search/"+this.searchTerm)
  }

}
