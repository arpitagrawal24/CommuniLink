import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:3000/login/success", { withCredentials: true });
      setUser(response.data.user);
    } catch (error) {
      navigate("*");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Dashboard</h1>
      {user ? (
        <div className="bg-slate-200 border border-gray-300 rounded p-6 max-w-md mx-auto">
          <img src={user.image} alt={user.displayName} className="rounded-full w-24 h-24 mb-4 mx-auto" />
          <p className="text-xl font-bold mb-1">{user.displayName}</p>
          <p className="text-gray-600 text-sm mb-4">{user.email}</p>
          <div className="mb-4">
          </div>
          <p className="text-gray-600 text-sm">Joined on: {new Date(user.createdAt).toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Dashboard;
