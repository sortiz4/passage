import { render } from '@testing-library/react';
import { Simple } from './simple';

describe('Simple', () => {
  it('should render', () => {
    const { baseElement } = render(<Simple/>);
    expect(baseElement).toBeDefined();
  });
});
