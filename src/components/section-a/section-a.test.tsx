import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SectionA } from './section-a.component';

describe('SectionA', () => {
  it('should render', () => {
    const { baseElement } = render(<SectionA/>);
    expect(baseElement).toBeDefined();
  });
});
