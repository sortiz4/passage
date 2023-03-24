import { render } from '@testing-library/react';
import { App } from './app.component';

describe('App', () => {
  it('should render', () => {
    const { baseElement } = render(<App/>);
    expect(baseElement).toBeDefined();
  });
});
