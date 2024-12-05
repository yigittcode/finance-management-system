import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>Menage Budget 💰</h1>
      </div>
      <ul>
        <li><a href="#profile">👤 </a></li>
        <li><a href="#goals">🎯 </a></li>
        <li><a href="#notifications">🔔 </a></li>
      </ul>
    </nav>
  )
}

export default Navbar