import { Routes } from '@angular/router';
import {MainComponent} from './components/main/main.component';
import { FormGroupExampleComponent } from './components/form-group-example/form-group-example.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'form-group-val-example',
        component: FormGroupExampleComponent
    }
];
