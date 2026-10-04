import React from 'react';
import { createRoot } from 'react-dom/client';
import ParticleText from './ParticleText.jsx';
import PatternWaves from './PatternWaves.jsx';

const MENU_TITLE = 'Estructuras';

const MODELS = [
  { title: 'Cloroplasto', href: './Cloroplasto.html' },
  { title: 'Mitocondria', href: './Mitocondria.html' },
  { title: 'Núcleo', href: './Nucleo.html' },
  { title: 'Bicapa lipídica en membrana celular', href: './BicapaLipidica.html' },
  { title: 'Organelo de la planta celular', href: './OrganeloPlanta.html' },
  { title: 'Célula animal', href: './CelulaAnimal.html' },
  { title: 'Procarionte', href: './Procarionte.html' }
];

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
        <div className="menu-title">
          <ParticleText
            text={MENU_TITLE}
            particleSize={2.2}
            density={4}
            color="#d5f1eb"
            highlightColor="#9bd8d0"
            fontSize="clamp(4rem, 15vw, 10rem)"
            fontWeight={800}
          />
        </div>
        <section aria-labelledby="models-title">
          <div className="models-heading">
            <h2 id="models-title">Modelos disponibles</h2>
            <span>{MODELS.length} modelos</span>
          </div>
          <div className="models-grid">
            {MODELS.map(model => (
              <a className="model-card" href={model.href} key={model.href}>
                <span className="model-info">
                  <h3>{model.title}</h3>
                </span>
                <span className="model-arrow" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
document.title = MENU_TITLE;
