// src/components/Loader.jsx
'use client';

import React from 'react';
import { SimpleLayout } from './SimpleLayout';

export default function Loader({ message }) {
  return (
    <SimpleLayout title="" intro="">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <svg
            className="w-12 h-12 mx-auto mb-4 text-blue-500 dark:text-blue-400 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 0116 0 8 8 0 01-16 0z"
            ></path>
          </svg>
          <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            {message}
          </p>
        </div>
      </div>
    </SimpleLayout>
  );
}
