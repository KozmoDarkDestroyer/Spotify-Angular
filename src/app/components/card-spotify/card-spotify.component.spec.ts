import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSpotifyComponent } from './card-spotify.component';

describe('CardSpotifyComponent', () => {
  let component: CardSpotifyComponent;
  let fixture: ComponentFixture<CardSpotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSpotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSpotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
