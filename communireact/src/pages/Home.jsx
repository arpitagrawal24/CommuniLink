import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-slate-200 rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-4">Welcome to Your CommuniLink</h2>

      <section className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Email History</h3>
        <p className="text-lg mb-4">
          View your email history to see past communications. Stay organized and keep track of important messages.
        </p>
        <Link to="/history" className="text-blue-500 hover:underline">
          View Email History
        </Link>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Compose Email</h3>
        <p className="text-lg mb-4">
          Compose and send new emails. Stay connected with friends, colleagues, and clients.
        </p>
        <Link to="/compose" className="text-blue-500 hover:underline">
          Compose Email
        </Link>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-4">Explore More Features</h3>
        <p className="text-lg">
          Discover additional features and functionalities in the application. Customize your experience based on your needs.
        </p>
        {/* Add more content or features as needed */}
      </section>
    </div>
  );
};

export default Home;
