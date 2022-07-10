import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainPageComponent } from "./main-page/main-page.component";
import { FormsModule } from "@angular/forms";
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from "./services/db.service";
import { MainPageWhithServicesComponent } from './main-page-whith-services/main-page-whith-services.component';
@NgModule({
    declarations:[
        MainPageComponent,
        PersonajesComponent,
        AgregarComponent,
        MainPageWhithServicesComponent,
    ],
    exports:[
        MainPageComponent,
        MainPageWhithServicesComponent
    ],
    imports:[
        CommonModule,
        FormsModule
    ],

    providers:[
        DbzService
    ]
})

export class DbzModule{}