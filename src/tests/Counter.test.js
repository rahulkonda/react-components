import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../components/CounterClass';
describe('Counter component tests',()=>{
  test('renders Counter component with initial value', () => {
    render(<Counter value={10} />);
    const countElement = screen.getByText(/10/i);
    expect(countElement).toBeInTheDocument();
  });
  test('check if click on increment button increases count',()=>{
    render(<Counter value={10}/>);
    const countElement = screen.getByText(/10/i);
    const button = screen.getByText(/Increment/i);
    fireEvent.click(button);
    expect(countElement).toHaveTextContent('11');
  });
  test('check if click on decrement button decreases count',()=>{
    render(<Counter value={10}/>);
    const countElement = screen.getByText(/10/i);
    const button = screen.getByText(/Decrement/i);
    fireEvent.click(button);
    expect(countElement).toHaveTextContent('9');
  });
})
