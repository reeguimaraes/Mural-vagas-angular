import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaVagasComponent } from './atualiza-vagas.component';

describe('AtualizaVagasComponent', () => {
  let component: AtualizaVagasComponent;
  let fixture: ComponentFixture<AtualizaVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizaVagasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizaVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
