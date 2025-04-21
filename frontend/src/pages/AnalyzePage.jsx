import React, { useRef } from 'react';
import UploadForm from '../components/UploadForm';
import { RedirectToSignIn, useUser } from "@clerk/clerk-react";

const AnalyzePage = () => {
  const { isSignedIn } = useUser();
  

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <UploadForm  /> {/* pass down */}
    </div>
  );
};

export default AnalyzePage;
