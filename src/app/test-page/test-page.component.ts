import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-page',
  imports: [],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss'
})
export class TestPageComponent implements OnInit {
  constructor(private route: ActivatedRoute){
    
  }

  public snapId:any;
  public paramsMapId:any;
  public QPObject:any;
  public QPObjectId!:number;

  ngOnInit(): void {
    this.snapId = this.route.snapshot.paramMap.get('id');
    console.log('Snapshot Received ID: ', this.snapId)


    this.route.paramMap.subscribe(params => {
      this.paramsMapId = params.get('id');
      console.log('ParamsMap Received ID: ', this.paramsMapId);
    })


    this.route.queryParams.subscribe(params => {
      this.QPObject = params;
      this.QPObjectId = +params['id'];
      console.log('QuertParams Received Object: ', this.QPObject);
    })

  }
}
