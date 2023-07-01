import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-angular';
  password!: FormControl;
  conditionLength: boolean = false;
  conditionEasy: boolean = false;
  conditionGood: boolean = false;
  passwordStrength = '';
  pasId = '';
  pasId2 = '';

  ngOnInit() {
    this.password = new FormControl('');
    this.password.valueChanges.subscribe((value) => {
      this.onInputChange(value);
      console.log(value);

    });
  }

  onInputChange(value: string) {
    const regex1 = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    const regex2 = /\d/;
    const regex3 = /[a-zA-Z]/;

    if (value.length < 8) {
      this.pasId = 'notValid';
    }
    else if (value.length > 8 && regex1.test(value) && regex2.test(value) && regex3.test(value)) {
      this.passwordStrength = 'strong';
      this.pasId = 'Valid';
      this.pasId2 = 'on'
    } else if (
      value.length >= 8 &&
      (regex1.test(value) || regex2.test(value)) &&
      regex3.test(value)
    ) {
      this.passwordStrength = 'medium';
      this.pasId = 'Valid';
      this.pasId2 = 'on';
    } else {
      this.passwordStrength = 'easy';
      this.pasId = 'Valid';
      this.pasId2 = 'off';
    }
  }
}
