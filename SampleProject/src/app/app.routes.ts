import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { SignalsComponent } from './signals/signals.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
        path:"**",
        component:PageNotFoundComponent
    }
];
