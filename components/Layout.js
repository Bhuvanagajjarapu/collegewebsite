
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="content">
        {children}
      </div>
      <style jsx global>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }
        
        .content {
          padding: 20px;
        }
      `}</style>
    </div>
  );
}

export default Layout;
