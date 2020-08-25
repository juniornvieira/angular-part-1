import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { SignInComponent } from './home/signin/signin.component';
import { AuthGuard } from './core/auth/auth.guard';
import { SignUpComponent } from './home/signup/signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',//father homecomponent has two children
        component: HomeComponent, 
        canActivate: [AuthGuard],
        children: [
            {
                path: '', //first child
                component: SignInComponent,
            },
            {
                path: 'signup', //second child
                component: SignUpComponent,
            },
        ]
        // Com isso, teremos um caminho para SignInComponent e para SignUpComponent, e se acessarmos localhost:4200, teremos HomeComponent. 
        // Por conta do seu path, que é igual à da rota filha, o SignInComponent será exibido primeiro. No entanto, se clicarmos no link de SignInComponent 
        // para acessarmos a página de cadastro de usuário, é o SignUpComponent que será carregado, dentro do Router outlet do HomeComponent.
    },
    {
        path: 'user/:userName',         // when the path is called
        component: PhotoListComponent,
        resolve: {
            photos: PhotoListResolver   // call PhotoListResolver resolver and set in photos var in PhotoListResolver
        }
    },
    {
        path: 'p/add',
        component: PhotoFormComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule] // who import AppRoutingModule will receive RouterModule
})
export class AppRoutingModule { }