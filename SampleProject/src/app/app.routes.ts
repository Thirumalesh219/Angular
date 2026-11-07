import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { SignalsComponent } from './signals/signals.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChangeDetectorComponent } from './change-detector/change-detector.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ProfileComponent } from './profile/profile.component';
import { CRUDComponent } from './crud/crud.component';

export const routes: Routes = [
    {
        path:"user",
        component:UserComponent,
    },
    {
        path:"structuralDirectives",
        component:StructuralDirectiveComponent
    },
    {
        path:"attributeDirectives",
        component:AttributeDirectiveComponent
    },
    {
        path:"signals",
        component:SignalsComponent
    },
    {
        path:"detector",
        component:ChangeDetectorComponent
    },
    {
        path:"built-in-pipes",
        component:BuiltInPipesComponent
    },
    {
        path:"template-driven-form",
        component:TemplateDrivenFormComponent
    },
    {
        path:"reactive-form",
        component:ReactiveFormComponent
    },
    {
        path:"profile",
        component:ProfileComponent
    },
    {
        path:"crud",
        component:CRUDComponent
    },
    {
        path:"**",
        component:PageNotFoundComponent
    }
];
