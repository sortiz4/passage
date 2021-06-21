import { render } from '@testing-library/react';
import { Box, Button, Checkbox, Control, Field, Group, Input, Label, Radio, Row, TextArea, Title, Window } from './bulma';

describe('Box', () => {
  it('should render', () => {
    const { baseElement } = render(<Box/>);
    expect(baseElement).toBeDefined();
  });
});

describe('Button', () => {
  it('should render', () => {
    const { baseElement } = render(<Button/>);
    expect(baseElement).toBeDefined();
  });
});

describe('Checkbox', () => {
  it('should render', () => {
    const { baseElement } = render(<Checkbox/>);
    expect(baseElement).toBeDefined();
  });
});

describe('Control', () => {
  it('should render', () => {
    const { baseElement } = render(<Control/>);
    expect(baseElement).toBeDefined();
  });
});

describe('Field', () => {
  it('should render', () => {
    const { baseElement } = render(<Field/>);
    expect(baseElement).toBeDefined();
  });
});

describe('Group', () => {
  it('should render', () => {
    const { baseElement } = render(<Group/>);
    expect(baseElement).toBeDefined();
  });
});

describe('Input', () => {
  it('should render', () => {
    const { baseElement } = render(<Input/>);
    expect(baseElement).toBeDefined();
  });
});

describe('Label', () => {
  it('should render', () => {
    const { baseElement } = render(<Label/>);
    expect(baseElement).toBeDefined();
  });
});

describe('Radio', () => {
  it('should render', () => {
    const { baseElement } = render(<Radio/>);
    expect(baseElement).toBeDefined();
  });
});

describe('Row', () => {
  it('should render', () => {
    const { baseElement } = render(<Row/>);
    expect(baseElement).toBeDefined();
  });
});

describe('TextArea', () => {
  it('should render', () => {
    const { baseElement } = render(<TextArea/>);
    expect(baseElement).toBeDefined();
  });
});

describe('Title', () => {
  it('should render', () => {
    const { baseElement } = render(<Title/>);
    expect(baseElement).toBeDefined();
  });
});

describe('Window', () => {
  it('should render', () => {
    const { baseElement } = render(<Window/>);
    expect(baseElement).toBeDefined();
  });
});
