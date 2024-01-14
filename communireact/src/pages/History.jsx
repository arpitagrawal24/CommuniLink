import { useState, useEffect } from 'react';
import axios from 'axios';

const History = () => {
  const [emailHistory, setEmailHistory] = useState([]);

  useEffect(() => {
    // Fetch email history data from your backend API
    const fetchEmailHistory = async () => {
      try {
        const response = await axios.get("http://localhost:3000/history"); // Replace with your actual API endpoint
        setEmailHistory(response.data);
      } catch (error) {
        console.error('Error fetching email history:', error);
      }
    };

    fetchEmailHistory();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-slate-200 rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-4">Email History</h2>

      {emailHistory.length > 0 ? (
        <ul className="list-disc ml-6">
          {emailHistory.map((email) => (
            <li key={email.id} className="mb-4">
              <strong>{email.subject}</strong> - {email.date} - {email.sender}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg">No email history available.</p>
      )}
    </div>
  );
};

export default History;
