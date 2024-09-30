import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../pages/indexTestJest'

const localData = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Doe' },
  ];
 
describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  });

  it('renders the heading text', () => {
    render(<Home allData={localData} />);

    const heading = screen.getByRole('heading', { name: 'Home' });

    expect(heading).toBeInTheDocument();
  });
  
/** 
  it('renders a list of names', () => {
    render(<Home allData={localData} />);

    const firstName = screen.getByText('John Doe');


    expect(firstName).toBeInTheDocument();

  });
  */
})