import github from '../../public/github-mark-white.svg'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand text-light" href="#">
          Vaibhav's Side Projects
        </a>
        <a href='https://github.com/Vaibhav-1211?tab=repositories'>
          <img src={github} alt='Vaibhav github' width='43px' height='40px'/>
          <span className="navbar-toggler-icon"></span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
