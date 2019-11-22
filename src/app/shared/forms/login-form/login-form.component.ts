import { ChangeDetectionStrategy, Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '@app/core/services/api.service';
import { Router } from '@angular/router';

@Component ({
    selector:     'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginFormComponent {

  constructor(
    private router: Router,
    private api: ApiService) { }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      //this.submitEM.emit(this.form.value);
      this.api.login(this.form.value).subscribe(result => {
        if (result) {
            this.router.navigate(['/']);
        }
    });
    }
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
