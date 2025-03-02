import { Routes } from '@angular/router';
import {MainComponent} from './components/main/main.component';
import { FormGroupExampleComponent } from './components/form-group-example/form-group-example.component';
import { TemplateDrivenExamplesComponent } from './components/template-driven-examples/template-driven-examples.component';
import { CheckedExampleComponent } from './components/checked-example/checked-example.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'template-driven-example',
        component: TemplateDrivenExamplesComponent
    },
    {
        path: 'form-group-val-example',
        component: FormGroupExampleComponent
    },
    {
        path: 'checked-val-example',
        component: CheckedExampleComponent
    },
];
