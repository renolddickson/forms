import { Component, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/common/services/common.service';
@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent {
  showFiller = false;
  dynamicForm!: FormGroup;
  formDefinition!: any[];
  drawerMode!:MatDrawerMode;
private mediaSubscription!: Subscription;
  @ViewChild('ldrawer') Ldrawer!:MatDrawer;
  @ViewChild('rdrawer') Rdrawer!:MatDrawer;
  constructor(private mediaObserver: MediaObserver) { }

  ngOnInit() {
    const formGroupControls: any = {};
    this.formDefinition = [
      {
        type: 'text',
        label: 'Name',
        name: 'name',
        placeholder: 'Enter your name',
        validators: [Validators.required],
      },
      {
        type: 'number',
        label: 'phone number',
        name: 'name',
        placeholder: 'Enter your name',
        validators: [Validators.required],
      },
      {
        type: 'email',
        label: 'Email',
        name: 'email',
        placeholder: 'Enter your email',
        validators: [Validators.required, Validators.email],
      },
      // Add more form fields as needed
    ];
    this.formDefinition.forEach(field => {
      formGroupControls[field.name] = new FormControl('', field.validators);
    });

    this.dynamicForm = new FormGroup(formGroupControls);
   this.checkMedia()
  }
  checkMedia(){
    this.mediaSubscription = this.mediaObserver
      .asObservable()
      .subscribe((change) => {
        change.forEach((item) => {
          if (item.mqAlias === 'lt-md') {
            this.Ldrawer.close();
            this.drawerMode = 'over';
          } else if (item.mqAlias === 'md') {
            this.Ldrawer.open();
            this.drawerMode = 'side';
          }
        });
      });
  }
  onSubmit() {
    if (this.dynamicForm.valid) {
      // Perform form submission logic here
      const formData = this.dynamicForm.value;
      console.log(formData);
    }
  }
}
