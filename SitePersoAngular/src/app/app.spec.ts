import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app.routes';

describe('App routes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
  });

  it('should lazy load the CV page on the root path', async () => {
    const harness = await RouterTestingHarness.create('/');
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain('Ethan Nickels');
  });

  it('should redirect unknown paths to the CV page', async () => {
    const harness = await RouterTestingHarness.create('/inconnu');
    expect(harness.routeNativeElement?.querySelector('h1')).toBeTruthy();
  });
});
