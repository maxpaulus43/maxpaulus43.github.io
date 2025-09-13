'use client';

interface ContactModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Contact Max</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <i className="fa fa-times text-xl"></i>
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Get in touch:</h3>
            <div className="space-y-2">
              <a
                href="mailto:maxpaulus43@gmail.com"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
              >
                <i className="fa fa-envelope"></i>
                <span>maxpaulus43@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/max-paulus-1b456aa8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
              >
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/maxpaulus43"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
              >
                <i className="fab fa-github"></i>
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
