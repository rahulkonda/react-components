import { fireEvent, render, screen } from '@testing-library/react';
import SearchForm from '../components/SearchForm';
describe('Search component tests',()=>{
  test('renders an input with the value equal to initial value passed in props', () => {
    render(<SearchForm searchKey={'Hello'}/>);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue('Hello');
  });

  
  it('calls the "onSearch" prop with proper value on button click', () => {
    const onSearchMock = jest.fn();
    render(<SearchForm searchKey={'Hello'} onSearch={onSearchMock} />);
    const inputElement = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    fireEvent.change(inputElement, { target: { value: 'New Value' } });
    fireEvent.click(button);
    
    expect(onSearchMock).toBeCalled();
    expect(inputElement).toHaveValue('New Value');
  });
  
  it('calls the "onSearch" prop with proper value on Enter key press', () => {
    const onSearchMock = jest.fn();
    render(<SearchForm searchKey={'Hello'} onSearch={onSearchMock} />);
    const inputElement = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    fireEvent.change(inputElement, { target: { value: 'New Value' } });
    fireEvent.keyUp(inputElement, { key: 'Enter' });
    
    expect(onSearchMock).toBeCalled();
    expect(inputElement).toHaveValue('New Value');
  });
  
})
