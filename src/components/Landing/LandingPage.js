import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./LandingPage.css"; // Import the custom CSS file for styling

const LandingPage = () => {
  const { isUserLoggedIn } = useSelector((state) => state.user);

  return (
    <div className="landing-page-container">
      {isUserLoggedIn ? (
        <Link to="/dashboard" className="dashboard-link">
          Go to Dashboard
        </Link>
      ) : (
        <Link to="/login" className="login-link">
          Go to Login Page
        </Link>
      )}
    </div>
  );
};

export default LandingPage;
