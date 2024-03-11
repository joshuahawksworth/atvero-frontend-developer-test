import React, { useState, useEffect  } from 'react';
import { Document } from './types';
import DocumentDetails from './components/DocumentDetails';
import DocumentList from './components/DocumentList';
import SearchBar from './components/SearchBar';
import axios from 'axios';

const App: React.FC = () => {
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [filteredDocuments, setFilteredDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios.get<Document[]>('https://65ea11eec9bf92ae3d3b07d0.mockapi.io/api/v1/documents')
      .then(response => {
        if (response.data.length === 0) {
          setError('No documents found.');
        } else {
          setDocuments(response.data);
          setFilteredDocuments(response.data);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching documents:', error);
        setError('Failed to fetch documents. Please try again later.');
        setLoading(false);
      });
  }, []);

  const handleDocumentSelect = (document: Document) => {
    setSelectedDocument(document);
  };

  const handleSearch = (query: string) => {
    const filteredDocs = documents.filter(document =>
      document.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDocuments(filteredDocs);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Document Management System</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-600 text-center">{error}</p>}
      {!loading && !error && filteredDocuments.length === 0 && (
        <p className="text-center">No documents found.</p>
      )}
      {!loading && !error && filteredDocuments.length > 0 && (
        <>
          {selectedDocument && <DocumentDetails document={selectedDocument} />}
          <DocumentList documents={filteredDocuments} onDocumentSelect={handleDocumentSelect} />
        </>
      )}
    </div>
  );
};

export default App;