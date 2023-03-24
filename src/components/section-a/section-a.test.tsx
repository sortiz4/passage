import { render } from '@testing-library/react';
import { SectionA } from './section-a.component';

describe('SectionA', () => {
  it('should render', () => {
    const { baseElement } = render(<SectionA/>);
    expect(baseElement).toBeDefined();
  });
});
