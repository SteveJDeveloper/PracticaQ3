import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiTeamComponent } from './mi-team.component';

describe('MiTeamComponent', () => {
  let component: MiTeamComponent;
  let fixture: ComponentFixture<MiTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
