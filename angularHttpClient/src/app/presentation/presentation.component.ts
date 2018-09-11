import { Component, OnInit } from '@angular/core';
import { ServicesRepositoryService } from 'src/app/Services/services-repository.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  constructor(private objRepository: ServicesRepositoryService, private formBuilder: FormBuilder) { }

  public _objDataPhot;
  public form: FormGroup;

  ngOnInit() {
    this.objRepository.data$.subscribe((photos) => {
      console.log(photos);
      this._objDataPhot = photos;
    });
    
    this.loadPost();

    this.form = this.formBuilder.group({
      user: ['initial', Validators.required],
      email: ['initial', Validators.required],
      pass: ['initial', Validators.required],
      pass2: ['initial', Validators.required],
      telefono: ['initial', Validators.required]
      
    });

    this.form.get('user').valueChanges.subscribe((user) => {
      console.log(user);
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn("cccc");
  }

  public loadPost(){
    this.objRepository.getPhotos();
  }
}
