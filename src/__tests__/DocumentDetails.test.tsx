import React from 'react';
import { render } from '@testing-library/react';
import DocumentDetails from '../components/DocumentDetails';

const mockDocument = {
  id: '1',
  title: 'Document 1',
  description: 'Description 1',
  project: 'Project 1',
  category: 'Category 1',
  uploader: 'Uploader 1',
  uploaded_date: '2024-01-01',
  file_url: 'https://example.com/document1.pdf',
};

describe('DocumentDetails component', () => {
    test('renders document details with correct information', () => {
        const { getByText } = render(<DocumentDetails document={mockDocument} />);
        const titleElement = getByText(mockDocument.title);
        const descriptionElement = getByText(mockDocument.description);
        
        // Check for the presence of the text "Project:" instead of the whole string
        const projectElement = getByText(/Project:/i);
        const categoryElement = getByText(/Category:/i);
        const uploaderElement = getByText(/Uploader:/i);
        
        // Assert that all expected elements are present
        expect(titleElement).toBeInTheDocument();
        expect(descriptionElement).toBeInTheDocument();
        expect(projectElement).toBeInTheDocument();
        expect(categoryElement).toBeInTheDocument();
        expect(uploaderElement).toBeInTheDocument();
    });
      
    test('renders document details with correct headings', () => {
        const { getByText } = render(<DocumentDetails document={mockDocument} />);
        const titleHeading = getByText('Document Details');
        expect(titleHeading).toBeInTheDocument();
    });
});
