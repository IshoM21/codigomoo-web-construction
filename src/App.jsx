import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const siteName = "blog.codigomoo.online";
  const title = "CódigoMoo";
  const subtitle =
    "Estamos preparando el sitio. Muy pronto tendrás contenido y recursos.";
  const targetProgress = 68; 
  const etaText = "Muy pronto";

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const t0 = setTimeout(() => setProgress(targetProgress), 500);
    return () => clearTimeout(t0);
  }, []);

  return (
    <div className="page">
      <div className="bg" aria-hidden="true">
        <span className="orb o1" />
        <span className="orb o2" />
        <span className="orb o3" />
        <span className="grid" />
      </div>

      <main className="card" role="main" aria-label="Página en construcción">
        <div className="badge">🚧 En construcción</div>

        <h1 className="title">{title}</h1>

        <p className="subtitle">
          {subtitle}
          <br />
          <span className="muted">{siteName}</span>
        </p>

        <section className="progressWrap" aria-label="Progreso">
          <div className="progressTop">
            <span className="progressLabel">Progreso</span>
            <span className="progressValue">{progress}%</span>
          </div>

          <div
            className="progressBar"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
          >
            <div className="progressFill" style={{ width: `${progress}%` }} />
          </div>

          <p className="hint">
            Lanzamiento estimado: <strong>{etaText}</strong>
          </p>
        </section>

        <div className="actions">
          <a className="btn primary" href="#">
            ✉️ Contacto
          </a>
          <a className="btn" href="https://github.com/IshoM21" target="_blank" rel="noreferrer">
            💻 GitHub
          </a>
        </div>

        <footer className="footer">
          © {new Date().getFullYear()} codigomoo.online
        </footer>
      </main>
    </div>
  );
}