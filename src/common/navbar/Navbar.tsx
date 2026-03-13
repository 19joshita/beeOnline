import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/logo.png";

interface MenuItem {
  label: string;
  path: string;
  subMenu?: { label: string; path: string }[];
}

const menuItems: MenuItem[] = [
  {
    label: "Home",
    path: "/home",
    subMenu: [
      { label: "Section 1", path: "/home#section1" },
    ],
  },
  { label: "About Us", path: "/about" },
  {
    label: "Services",
    path: "/service",
    subMenu: [
      { label: "Web Dev", path: "/service/web" },
   
    ],
  },
  {
    label: "Cyber Security",
    path: "/cyber-security",
    subMenu: [
      { label: "Pen Testing", path: "/cyber-security#pen" },
      { label: "Audit", path: "/cyber-security#audit" },
    ],
  },
  { label: "Career", path: "/career" },
  {
    label: "Blog",
    path: "/blog",
    subMenu: [
      { label: "Tech", path: "/blog#tech" },
      { label: "News", path: "/blog#news" },
    ],
  },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile menu
  const [dropdown, setDropdown] = useState<string | null>(null); // desktop dropdown
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    setDropdown(null);
    setOpen(false); // close mobile menu if open
  };

  return (
    <header className="navbar">
      <div className="navbar-wrapper">
        {/* logo */}
        <div className="nav-left">
          <img src={logo} alt="logo" onClick={() => navigate("/home")} />
        </div>

        {/* menu */}
        <ul className="nav-menu">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="nav-item"
              onMouseEnter={() =>
                item.subMenu ? setDropdown(item.label) : setDropdown(null)
              }
              onMouseLeave={() => setDropdown(null)}
            >
              <div
                className="menu-item"
                onClick={() =>
                  item.subMenu ? setDropdown(dropdown === item.label ? null : item.label) : handleNavigate(item.path)
                }
              >
                <span className="menu-label">{item.label}</span>
                {item.subMenu && <FaAngleDown className="arrow-icon" />}
              </div>

              {item.subMenu && dropdown === item.label && (
                <ul className="dropdown">
                  {item.subMenu.map((sub) => (
                    <li key={sub.label} onClick={() => handleNavigate(sub.path)}>
                      {sub.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* button + hamburger */}
        <div className="nav-right">
          <button className="nav-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>

          <div className="hamburger" onClick={() => setOpen(!open)}>
            ☰
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="mobile-menu">
          {menuItems.map((item) => (
            <div key={item.label}>
              <div
                className="mobile-item"
                onClick={() =>
                  item.subMenu
                    ? setDropdown(dropdown === item.label ? null : item.label)
                    : handleNavigate(item.path)
                }
              >
                {item.label} {item.subMenu && <FaAngleDown className="arrow-icon" />}
              </div>
              {item.subMenu && dropdown === item.label && (
                <div className="mobile-dropdown">
                  {item.subMenu.map((sub) => (
                    <div key={sub.label} onClick={() => handleNavigate(sub.path)}>
                      {sub.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}