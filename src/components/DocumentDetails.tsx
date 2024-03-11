import React from 'react';
import { Document } from '../types';

interface Props {
  document: Document;
}

const DocumentDetails: React.FC<Props> = ({ document }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Document Details</h2>
      <div className="border p-4 rounded-lg bg-gray-100">
        <h3 className="text-lg font-semibold mb-2">{document.title}</h3>
        <p className="mb-2"><strong>Description:</strong> {document.description}</p>
        <p className="mb-2"><strong>Project:</strong> {document.project}</p>
        <p className="mb-2"><strong>Category:</strong> {document.category}</p>
        <p className="mb-2"><strong>Uploader:</strong> {document.uploader}</p>
      </div>
    </div>
  );
};

export default DocumentDetails;
