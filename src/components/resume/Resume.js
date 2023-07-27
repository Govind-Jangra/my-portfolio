import React from 'react';

const Resume = () => {
  const openResumeInNewTab = () => {
    
    const fileUrl = 'https://drive.google.com/file/d/1DD8lq0AsnyAyoXiEYBSON27mojSQaDxQ/view';
    window.open(fileUrl, '_blank');
  };

  return (
    <section id="Resume" className="w-full py-20 border-b-[1px] border-b-black">
    
      <div className="flex justify-center mt-4">
        <button
          onClick={openResumeInNewTab}
          className="px-6 py-3 bg-pink-400 hover:bg-blue-600 text-white text-6xl font-semibold rounded-lg shadow-lg transition-all ease-in-out duration-300 transform hover:scale-150"
        >
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default Resume;
