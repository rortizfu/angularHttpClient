import { Component, OnInit, Input } from '@angular/core';
import { ServicesRepositoryService } from 'src/app/Services/services-repository.service';



@Component({
  selector: 'app-card-presentation',
  templateUrl: './card-presentation.component.html',
  styleUrls: ['./card-presentation.component.css']
})
export class CardPresentationComponent implements OnInit {
  @Input() objPhoto;
  /*constructor(private objRepository: ServicesRepositoryService) { }

  public _objDataPhot;
  */
  ngOnInit() {
   /* this.objRepository.data$.subscribe((photos) => {
      console.log(photos);
    });
    
    this.loadPost();
*/
  }
/*
  public loadPost(){
    this.objRepository.getPhotos();
  }*/

}
