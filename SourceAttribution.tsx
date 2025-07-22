
import React from 'react';

// This component's dependencies (GeminiGroundingChunk, DisplaySource from services/types)
// and its primary user (SearchGrounding feature) have been removed or are no longer available.
// To resolve compilation errors, this component is now a minimal placeholder.
// It's not actively used as SearchGrounding feature is removed from App.tsx.

// Basic styling applied in case it's used, to match new theme.
const SourceAttribution: React.FC = () => {
  return (
    <div className="p-4 my-4 bg-bg-base dark:bg-bg-base-dark border border-border-subtle dark:border-border-subtle-dark rounded-md">
      <p className="text-sm text-text-secondary dark:text-text-secondary-dark">Source attribution functionality is currently unavailable.</p>
    </div>
  );
};

export default SourceAttribution;