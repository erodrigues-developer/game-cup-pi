import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CadastroTorneioComponent } from './cadastro-torneio/cadastro-torneio.component';

import {CardModule} from 'primeng/card';
import {TabViewModule} from 'primeng/tabview';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';

import { TorneioService } from './torneio.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CadastroTorneioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    PanelModule,
    CardModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [TorneioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
