import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Image src="/logo1.jpeg" alt="Logo" width={100} height={100} />
        
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link href="/Home">
            <a>Home</a>
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a href="#" className="dropbtn">About Us</a>
          <div className="dropdown-content">
            <Link href="/about/history"><a>College History</a></Link>
            <Link href="/about/vision"><a>Vision and Mission</a></Link>
            <Link href="/about/values"><a>Values</a></Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a href="#" className="dropbtn">Academics</a>
          <div className="dropdown-content">
            <Link href="/academics/holidays"><a>Holidays</a></Link>
            <Link href="/academics/calendar"><a>Academic Calendar</a></Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a href="#" className="dropbtn">Departments</a>
          <div className="dropdown-content">
            <Link href="/departements/cse"><a>CSE</a></Link>
            <Link href="/departements/it"><a>IT</a></Link>
            <Link href="/departements/ai-branches"><a>AI BRANCHES</a></Link>
            <Link href="/departements/mech"><a>MECH</a></Link>
            
          </div>
        </li>
        
        <li className="nav-item dropdown">
          <a href="#" className="dropbtn">Events</a>
          <div className="dropdown-content">
            <Link href="/events/completed"><a>Completed</a></Link>
            <Link href="/events/ongoing"><a>Ongoing</a></Link>
            
          </div>
        </li>
        <li className="nav-item dropdown">
          <a href="#" className="dropbtn">Faculty</a>
          <div className="dropdown-content">
            <Link href="/faculty/teaching"><a>Teaching</a></Link>
            <Link href="/faculty/non-teaching"><a>Non-Teaching</a></Link>
          </div>
        </li>
        <li className="nav-item">
          <Link href="/contact">
            <a>Contact Us</a>
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

        .nav-item a {
          color: white;
          padding: 16px 20px;
          text-decoration: none;
          display: block;
        }

        .dropbtn {
          color: white;
          padding: 16px 20px;
          text-decoration: none;
          display: block;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          z-index: 1;
        }

        .dropdown-content a {
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
        }

        .dropdown-content a:hover {
          background-color: #ddd;
        }

        .dropdown:hover .dropdown-content {
          display: block;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
