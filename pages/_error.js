import Link from 'next/link';

const CustomErrorPage = () => (
  <div className="error-container">
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <p>
      Go back to{' '}
      <Link href="/Home" passHref legacyBehavior>
        <button className="home-button">Homepage</button>
      </Link>
    </p>
    <style jsx>{`
      .error-container {
        text-align: center;
        margin-top: 50px;
      }

      h1 {
        font-size: 36px;
        color: #ff6347;
      }

      p {
        font-size: 18px;
        color: #333;
        margin-bottom: 20px;
      }

      .home-button {
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        text-decoration: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      .home-button:hover {
        background-color: #0056b3;
      }
    `}</style>
  </div>
);

export default CustomErrorPage;
