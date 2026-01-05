import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function N4Hub(): JSX.Element {
  const n4Index = useBaseUrl("/n4/modulo-01");
  const n4Roadmap = useBaseUrl("/n4/roadmap-n4");
  const n4Evaluaciones = useBaseUrl("/n4/evaluaciones");
  const n4Gramatica = useBaseUrl("/n4/gramatica-premium");
  const n4Kanji = useBaseUrl("/n4/kanji-premium");
  const n4Lecturas = useBaseUrl("/n4/lecturas-premium");
  const n4Cierre = useBaseUrl("/n4/cierre-formal-n4");

  return (
    <Layout
      title="JLPT N4"
      description="Hub académico del nivel JLPT N4: consolidación y control del japonés."
    >
      <main>
        <section className="container" style={{ padding: "3.5rem 0 2rem" }}>
          <div className="row">
            <div className="col col--8 col--offset-2">
              <header style={{ textAlign: "center" }}>
                <span className="badge badge--secondary">Nivel JLPT</span>
                <h1 style={{ marginTop: 12 }}>JLPT N4</h1>
                <p style={{ maxWidth: 760, margin: "0 auto", lineHeight: 1.7 }}>
                  Nivel de consolidación. Se exige uso contextual, lectura continua
                  y comprensión más allá de reglas aisladas.
                </p>
              </header>
            </div>
          </div>
        </section>

        <section className="container" style={{ padding: "0 0 3rem" }}>
          <div className="row">
            <div className="col col--10 col--offset-1">
              <h2>Estructura del nivel</h2>

              <div className="row" style={{ rowGap: 16 }}>
                <div className="col col--4">
                  <div className="card">
                    <div className="card__body">
                      <h3>Roadmap</h3>
                      <p>Objetivos y organización del nivel.</p>
                    </div>
                    <div className="card__footer">
                      <Link className="button button--outline button--primary" to={n4Roadmap}>
                        Ver roadmap
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col col--4">
                  <div className="card">
                    <div className="card__body">
                      <h3>Módulos</h3>
                      <p>Gramática aplicada, vocabulario y práctica guiada.</p>
                    </div>
                    <div className="card__footer">
                      <Link className="button button--outline button--primary" to={n4Index}>
                        Ir a módulos
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col col--4">
                  <div className="card">
                    <div className="card__body">
                      <h3>Evaluaciones</h3>
                      <p>Exámenes por módulo y simulacros.</p>
                    </div>
                    <div className="card__footer">
                      <Link className="button button--outline button--primary" to={n4Evaluaciones}>
                        Ver evaluaciones
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row" style={{ rowGap: 16, marginTop: 16 }}>
                <div className="col col--4">
                  <Link className="button button--outline" to={n4Gramatica}>
                    Gramática premium
                  </Link>
                </div>
                <div className="col col--4">
                  <Link className="button button--outline" to={n4Kanji}>
                    Kanji premium
                  </Link>
                </div>
                <div className="col col--4">
                  <Link className="button button--outline" to={n4Lecturas}>
                    Lecturas premium
                  </Link>
                </div>
              </div>

              <div className="card shadow--md" style={{ marginTop: 24 }}>
                <div className="card__body">
                  <h2>Cierre del nivel</h2>
                  <p>
                    Este cierre valida la transición hacia N3.
                  </p>
                </div>
                <div className="card__footer">
                  <Link className="button button--primary" to={n4Cierre}>
                    Cierre formal N4
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
