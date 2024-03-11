import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DocumentList from '../components/DocumentList';
import { Document } from '../types';

const mockDocuments: Document[] = [
    { 
      id: '1', 
      title: 'Document 1', 
      description: 'Description 1', 
      project: 'Project 1',
      category: 'Category 1',
      uploader: 'Uploader 1',
      uploaded_date: '2024-01-01',
      file_url: 'https://example.com/document1.pdf',
    },
    { 
      id: '2', 
      title: 'Document 2', 
      description: 'Description 2', 
      project: 'Project 2',
      category: 'Category 2',
      uploader: 'Uploader 2',
      uploaded_date: '2024-01-02',
      file_url: 'https://example.com/document2.pdf',
    },
  ];

describe('DocumentList component', () => {
  test('renders document list items', () => {
    const { getAllByText } = render(<DocumentList documents={mockDocuments} onDocumentSelect={() => {}} />);
    const documentTitles = getAllByText(/^Document \d$/);
    expect(documentTitles.length).toBe(mockDocuments.length);
  });

  test('invokes onDocumentSelect callback when a document item is clicked', () => {
    const mockOnDocumentSelect = jest.fn();
    const { getByText } = render(<DocumentList documents={mockDocuments} onDocumentSelect={mockOnDocumentSelect} />);
    const documentTitle = getByText('Document 1');
    fireEvent.click(documentTitle);
    expect(mockOnDocumentSelect).toHaveBeenCalledWith(mockDocuments[0]);
  });

  test('renders document list items with correct titles and descriptions', () => {
    const { getByText } = render(<DocumentList documents={mockDocuments} onDocumentSelect={() => {}} />);
    mockDocuments.forEach(document => {
      const documentTitle = getByText(document.title);
      const documentDescription = getByText(document.description);
      expect(documentTitle).toBeInTheDocument();
      expect(documentDescription).toBeInTheDocument();
    });
  });
});
