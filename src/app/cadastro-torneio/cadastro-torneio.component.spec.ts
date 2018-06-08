import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTorneioComponent } from './cadastro-torneio.component';

describe('CadastroTorneioComponent', () => {
  let component: CadastroTorneioComponent;
  let fixture: ComponentFixture<CadastroTorneioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroTorneioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTorneioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
