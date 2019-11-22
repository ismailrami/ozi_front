import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component ({
    selector:     'app-file-form',
    templateUrl: './file-form.component.html',
    styleUrls: ['./file-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class FileFormComponent {
    // Receive FormGroup instance from the parent 'NewContactComponent'
    @Input() form: FormGroup;

    constructor() { }
}
