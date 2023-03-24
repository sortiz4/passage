import { render } from '@testing-library/react';
import { SectionC } from './section-c.component';

describe('SectionC', () => {
  it('should render', () => {
    const { baseElement } = render(<SectionC/>);
    expect(baseElement).toBeDefined();
  });
});
