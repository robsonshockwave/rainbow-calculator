import { render } from '@testing-library/react';
import { App } from './App';

describe('<App />', () => {
  it('display App component', () => {
    render(<App />);
  });
});
