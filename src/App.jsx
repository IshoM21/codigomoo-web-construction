import "./App.css";

export default function App() {
  const siteName = "codigomoo.online";

  return (
    <div className="page">
      <main className="card">
        <div className="badge">🚧 Preparando sitio</div>

        <h1 className="title">CódigoMoo</h1>

        <p className="subtitle">
          Estamos preparando el sitio principal.
          <br />
          Muy pronto estará disponible.
        </p>

        <div className="progressWrap">
          <div className="progressBar">
            <div className="progressFill" style={{ width: "70%" }} />
          </div>
        </div>

        <footer className="footer">
          © {new Date().getFullYear()} codigomoo.online
        </footer>
      </main>
    </div>
  );
}