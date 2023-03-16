import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFeed } from './shared-feed';

describe('ComponentsComponent', () => {
  let component: SharedFeed;
  let fixture: ComponentFixture<SharedFeed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedFeed ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedFeed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
