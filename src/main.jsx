import React from 'react';
import { createRoot } from 'react-dom/client';
import PatternWaves from './PatternWaves.jsx';

function App() {
  return (
    <>
      <PatternWaves
        preset="silk"
        color="#d5f1eb"
        backgroundColor="#101820"
        fade="edges"
        interactive
        cursorSize={50}
        cursorStrength={0.6}
      />
      <main className="menu">
        <p className="eyebrow">Explora la ciencia en 3D</p>
        <h1>Modelos para descubrir</h1>
        <p className="intro">
          Explora estructuras científicas en tres dimensiones. Elige un modelo
          para abrir su visor interactivo.
        </p>
        <section aria-labelledby="models-title">
          <div className="models-heading">
            <h2 id="models-title">Modelos disponibles</h2>
            <span>1 modelo</span>
          </div>
          <a className="model-card" href="./Cloroplasto.html">
            <span className="model-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none">
                <path d="M9 25C9 15.6 15.6 9 25 9s14 5.6 14 14-6.6 16-16 16S9 34.4 9 25Z" stroke="currentColor" strokeWidth="2" />
                <path d="M16 19c4-5 12-5 17 0M13 25c6-5 16-5 23 0M15 31c6-4 13-4 19 0M19 36c3-2 7-2 10 0" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </span>
            <span className="model-info">
              <h3>Cloroplasto</h3>
              <p>Observa en 3D la estructura de este orgánulo vegetal.</p>
            </span>
            <span className="model-arrow" aria-hidden="true">→</span>
          </a>
        </section>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
