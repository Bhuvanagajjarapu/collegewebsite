import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Image src="/logo1.jpeg" alt="Logo" width={40} height={40} />
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link href="/Home">
            <span className="nav-link">Home</span>
          </Link>
        </li>
        <li className="nav-item dropdown">
          <span className="dropbtn">About Us</span>
          <div className="dropdown-content">
            <Link href="/about/history"><span className="dropdown-link">College History</span></Link>
            <Link href="/about/vision"><span className="dropdown-link">Vision and Mission</span></Link>
            <Link href="/about/values"><span className="dropdown-link">Values</span></Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <span className="dropbtn">Academics</span>
          <div className="dropdown-content">
            <Link href="/academics/holidays"><span className="dropdown-link">Holidays</span></Link>
            <Link href="/academics/calendar"><span className="dropdown-link">Academic Calendar</span></Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <span className="dropbtn">Departments</span>
          <div className="dropdown-content">
            <Link href="/departements/cse"><span className="dropdown-link">CSE</span></Link>
            <Link href="/departements/it"><span className="dropdown-link">IT</span></Link>
            <Link href="/departements/ai-branches"><span className="dropdown-link">AI BRANCHES</span></Link>
            <Link href="/departements/mech"><span className="dropdown-link">MECH</span></Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <span className="dropbtn">Events</span>
          <div className="dropdown-content">
            <Link href="/events/completed"><span className="dropdown-link">Completed</span></Link>
            <Link href="/events/ongoing"><span className="dropdown-link">Ongoing</span></Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <span className="dropbtn">Faculty</span>
          <div className="dropdown-content">
            <Link href="/faculty/teaching"><span className="dropdown-link">Teaching</span></Link>
            <Link href="/faculty/non-teaching"><span className="dropdown-link">Non-Teaching</span></Link>
          </div>
        </li>
        <li className="nav-item">
          <Link href="/branches">
            <span className="nav-link">Branches</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact">
            <span className="nav-link">Contact Us</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/Login">
            <span className="login-btn">Login</span>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        .navbar {
          background-color: blue;
          color: white;
          padding: 10px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-list {
          display: flex;
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        .logo {
          width: 50px;
          height: auto;
        }

        .nav-item {
          position: relative;
          margin-left: 20px;
        }

        .nav-link,
        .dropbtn {
          color: white;
          padding: 16px 20px;
          cursor: pointer;
          text-decoration: none;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          z-index: 1;
        }

        .dropdown-content .dropdown-link {
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          transition: background-color 0.3s;
        }

        .dropdown-content .dropdown-link:hover {
          background-color: #ddd;
        }

        .dropdown:hover .dropdown-content {
          display: block;
        }

        .login-btn {
          background-color: red;
          color: white;
          border: 1px solid blue;
          padding: 10px 20px;
          border-radius: 5px;
          transition: background-color 0.3s, color 0.3s;
        }

        .login-btn:hover {
          background-color: blue;
          color: white;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
