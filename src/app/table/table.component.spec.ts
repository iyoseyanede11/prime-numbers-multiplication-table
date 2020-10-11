import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should equal prime numbers from 1 to 10 (1 inclusive)', () => {
    expect(component.primeNumbers).toEqual([1,2,3,5,7]);
  });
  it('should render a table inside a div', () => {
    const compiled =  fixture.nativeElement;
    expect(compiled.querySelector('.mt-5').innerHTML).toContain('</table>')
  })
  it('should render a tbody inside the table', () => {
    const compiled =  fixture.nativeElement;
    expect(compiled.querySelector('.table').innerHTML).toContain('</tbody>')
  })

});
