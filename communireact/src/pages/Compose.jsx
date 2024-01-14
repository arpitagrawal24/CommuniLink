import { useState } from 'react';

const Compose = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    // Implement your logic for sending the email
    console.log('Sending email:', { recipient, subject, message });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-slate-200 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Compose Email</h2>

      <form>
        <div className="mb-4">
          <label htmlFor="recipient" className="block text-sm font-medium text-gray-600">
            Recipient
          </label>
          <input
            type="email"
            id="recipient"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Email address"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            rows="4"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Compose;
