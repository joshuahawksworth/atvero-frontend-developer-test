import React from 'react';
import { Document } from '../types';

interface Props {
  documents: Document[];
  onDocumentSelect: (document: Document) => void;
}

const DocumentList: React.FC<Props> = ({ documents, onDocumentSelect }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Document List</h2>
      <ul className="divide-y divide-gray-200">
        {documents.map(document => (
          <li key={document.id} className="cursor-pointer transition duration-300 ease-in-out transform hover:bg-gray-100 hover:shadow-md">
            <div className="p-4" onClick={() => onDocumentSelect(document)}>
              <h3 className="text-lg font-semibold mb-1">{document.title}</h3>
              <p className="text-gray-600">{document.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
