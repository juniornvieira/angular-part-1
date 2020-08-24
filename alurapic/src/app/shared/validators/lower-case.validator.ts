import { AbstractControl } from '@angular/forms';

export function lowerCaseValidator(control: AbstractControl) {

    // if value is empty    and  control.value isn't what I expect
    if (control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {
        return { lowerCase: true }
    }
    return null;
}