const Header = () => {
  return (
    <header className="border-b   ">
      <nav className="flex  justify-between px-10 py-4">
        <h1>Trade-platform</h1>

        <ul className="flex gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
