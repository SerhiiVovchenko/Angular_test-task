import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-val-bloc',
  templateUrl: './form-val-bloc.component.html',
  styleUrls: ['./form-val-bloc.component.scss'],
})
export class FormValBlocComponent {
  @Input() passwordStrength?: string;
  @Input() pasId?: string;
  @Input() pasId2?: string;
}
