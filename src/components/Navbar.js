export default function Navbar() {
    return(
        <div className="shadow">
            <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand fs-2" href="#">User-API</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active me-4" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-4" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-4" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-4" href="#">Blog</a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}