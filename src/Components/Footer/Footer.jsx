const Footer = () => {
  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="container mx-auto px-3 lg:px-0 mt-10 mb-2">
        <div>
          <footer className="footer footer-center bg-base-300 text-base-content p-4 py-10">
            <aside>
              <p>
                Copyright &copy; 2023 - {new Date().getFullYear()} All right
                reserved by
                <button onClick={handleTop} className="btn btn-sm btn-ghost font-bold">
                  Books Vibe.
                </button>
              </p>
            </aside>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
