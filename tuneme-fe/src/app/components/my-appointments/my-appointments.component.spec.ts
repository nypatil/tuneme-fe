import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MyAppointmentsComponent } from './my-appointments.component';
import { By } from '@angular/platform-browser';

describe('MyAppointmentsComponent', () => {
  let component: MyAppointmentsComponent;
  let fixture: ComponentFixture<MyAppointmentsComponent>;
  let router: Router;

  // Sample data to mirror the component's initial state
  const sampleAppointments = [
    { id: 1, name: 'Paracetamol Tablet', date: '25-July-25', time: '12:45 AM', center: 'Sahyadri Hospital, Pune' },
    { id: 2, name: 'Ibuprofen Tablet', date: '26-July-25', time: '10:00 AM', center: 'Ruby Hall Clinic, Pune' },
    { id: 3, name: 'Aspirin Tablet', date: '27-July-25', time: '02:30 PM', center: 'Jehangir Hospital, Pune' },
    { id: 4, name: 'Amoxicillin Capsule', date: '28-July-25', time: '08:00 AM', center: 'KEM Hospital, Pune' },
    { id: 5, name: 'Ciprofloxacin Tablet', date: '29-July-25', time: '06:00 PM', center: 'Deenanath Mangeshkar Hospital, Pune' },
    { id: 6, name: 'Metformin Tablet', date: '30-July-25', time: '09:15 AM', center: 'Noble Hospital, Pune' },
    { id: 7, name: 'Atorvastatin Tablet', date: '31-July-25', time: '07:45 PM', center: 'Aditya Birla Memorial Hospital, Pune' },
    { id: 8, name: 'Omeprazole Capsule', date: '01-Aug-25', time: '11:00 AM', center: 'Inlaks and Budhrani Hospital, Pune' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MyAppointmentsComponent,
        RouterTestingModule.withRoutes([]) // Set up the router testing module
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAppointmentsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router); // Inject the router for spying
    fixture.detectChanges(); // Trigger initial data binding
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the section header "My Appointments"', () => {
    const headerElement = fixture.debugElement.query(By.css('.section-header')).nativeElement;
    expect(headerElement.textContent).toContain('My Appointments');
  });

  it('should initially render 8 appointment cards', () => {
    const appointmentCards = fixture.debugElement.queryAll(By.css('.appointment-card'));
    expect(appointmentCards.length).toBe(8);
  });

  it('should remove an appointment from the list when deleteAppointment is called', () => {
    const initialCount = component.appointments.length;
    const appointmentToDeleteId = 2;

    // Call the delete method directly
    component.deleteAppointment(appointmentToDeleteId);
    fixture.detectChanges(); // Update the DOM

    const appointmentCards = fixture.debugElement.queryAll(By.css('.appointment-card'));
    
    // Verify the component's data changed
    expect(component.appointments.length).toBe(initialCount - 1);
    expect(component.appointments.find(a => a.id === appointmentToDeleteId)).toBeUndefined();
    
    // Verify the DOM was updated
    expect(appointmentCards.length).toBe(initialCount - 1);
  });

  it('should navigate to the appointment-reminder page when the "Add Appointment" button is clicked', () => {
    // Spy on the router's navigate method
    const navigateSpy = spyOn(router, 'navigate');

    // Find the "Add Appointment" button and click it
    const addButton = fixture.debugElement.query(By.css('.add-btn')).nativeElement;
    addButton.click();

    // Check if the navigate method was called with the correct route
    expect(navigateSpy).toHaveBeenCalledWith(['/appointment-reminder']);
  });
});