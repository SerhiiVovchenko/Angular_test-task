import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  title = 'my-angular';
  password!: FormControl;
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
    const regex3 = /\p{L}/u;

    if (value.length < 8) {
      this.setStrengthAndIds('easy', 'notValid', 'off');
    } else if (
      value.length >= 8 &&
      regex1.test(value) &&
      regex2.test(value) &&
      regex3.test(value)
    ) {
      this.setStrengthAndIds('strong', 'Valid', 'on');
    } else if (
      value.length >= 8 &&
      (regex1.test(value) || regex2.test(value)) &&
      regex3.test(value)
    ) {
      this.setStrengthAndIds('medium', 'Valid', 'on');
    } else {
      this.setStrengthAndIds('easy', 'Valid', 'off');
    }
  }

  private setStrengthAndIds(strength: string, id1: string, id2: string) {
    this.passwordStrength = strength;
    this.pasId = id1;
    this.pasId2 = id2;
  }
}
