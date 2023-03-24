import { render } from '@testing-library/react';
import { SectionB } from './section-b';

describe('SectionB', () => {
  it('should render', () => {
    const { baseElement } = render(<SectionB/>);
    expect(baseElement).toBeDefined();
  });
});
