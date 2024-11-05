import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightPicsComponent } from './highlight-pics.component';

describe('HighlightPicsComponent', () => {
  let component: HighlightPicsComponent;
  let fixture: ComponentFixture<HighlightPicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightPicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
