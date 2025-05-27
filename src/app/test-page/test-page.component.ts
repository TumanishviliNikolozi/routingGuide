import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-test-page',
  imports: [RouterModule],
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

  public yesOrNo: boolean = false;

  public mapId!:number[];
  public mapName!:string[];
  public mapSurname!:string[];

  ngOnInit(): void {
    this.snapId = this.route.snapshot.paramMap.get('id');
    console.log('Snapshot Received ID: ', this.snapId)


    this.route.paramMap.subscribe(params => {
      this.paramsMapId = params.get('id');
      console.log('ParamsMap Received ID: ', this.paramsMapId);
    })


    this.route.queryParams.subscribe(params => {
      this.QPObject = params;
      this.QPObjectId = Number(params['id']);
      console.log('QuertParams Received Object: ', this.QPObject);
    })

    if(this.QPObjectId && this.QPObject.name && this.QPObject.surname){
      this.yesOrNo = true
    }

    this.route.queryParamMap.subscribe(params => {
      this.mapId = params.getAll('mapId').map(id => Number(id));
      this.mapName = params.getAll('mapName');
      this.mapSurname = params.getAll('mapSurname');

      console.log('QuertParamsMap Id Received: ', this.mapId);
      console.log('QuertParamsMap Name Received: ', this.mapName);
      console.log('QuertParamsMap Surname Received: ', this.mapSurname);
    })
  }
}
