import { Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CounterPageComponent } from './counter-page/counter-page.component';
import { FounderPageComponent } from './founder-page/founder-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

export const appRoutes: Routes = [
    { path: '', component: CounterPageComponent },
    { path: 'Founders', component: FounderPageComponent },
    { path: 'About', component: AboutPageComponent },
];
