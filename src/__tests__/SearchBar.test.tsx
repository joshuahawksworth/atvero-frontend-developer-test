import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar component', () => {
  test('renders search input with placeholder text', () => {
    const { getByPlaceholderText } = render(<SearchBar onSearch={() => {}} />);
    const searchInput = getByPlaceholderText('Search by title...');
    expect(searchInput).toBeInTheDocument();
  });

  test('invokes onSearch callback when user types in the search input', () => {
    const mockOnSearch = jest.fn();
    const { getByPlaceholderText } = render(<SearchBar onSearch={mockOnSearch} />);
    const searchInput = getByPlaceholderText('Search by title...');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(mockOnSearch).toHaveBeenCalledWith('test');
  });

  test('updates input value correctly', () => {
    const { getByPlaceholderText } = render(<SearchBar onSearch={() => {}} />);
    const searchInput = getByPlaceholderText('Search by title...');
    fireEvent.change(searchInput, { target: { value: 'react' } });
    expect(searchInput).toHaveValue('react');
  });
});