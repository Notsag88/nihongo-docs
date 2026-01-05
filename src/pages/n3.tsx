import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function N3Hub(): JSX.Element {
  const n3Index = useBaseUrl("/n3");
  const n3Orientacion = useBaseUrl("/n3/orientacion");
  const n3Roadmap = useBaseUrl("/n3/roadmap");
  const n3Gramatica = useBaseUrl("/n3/gramatica-premium");
  const n3Kanji = useBaseUrl("/n3/kanji-premium");
  const n3Lecturas = useBaseUrl("/n3/lecturas-premium");
  const n3Escucha = useBaseUrl("/n3/escucha-premium");
  const n3Modulos = useBaseUrl("/n3/modulos");
  const n3Cultura = useBaseUrl("/n3/cultura");
  const n3Evaluaciones = useBaseUrl("/n3/evaluaciones");
  const n3Cierre = useBaseUrl("/n3/cierre");

  return (
    <Layout
      title="JLPT N3"
      description="Hub académico del nivel JLPT N3: transición a intermedio y autonomía."
    >
      <main>
        <section className="container" style={{ padding: "3.5rem 0 2rem" }}>
          <div className="row">
            <div className="col col--8 col--offset-2">
              <header style={{ textAlign: "center" }}>
                <span className="badge badge--secondary">Nivel JLPT</span>
                <h1 style={{ marginTop: 12 }}>JLPT N3</h1>
                <p style={{ maxWidth: 780, margin: "0 auto", lineHeight: 1.7 }}>
                  Nivel de transición real a intermedio. Exige autonomía,
                  inferencia y control del lenguaje.
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
                  <Link className="button button--outline" to={n3Orientacion}>
                    Orientación N3
                  </Link>
                </div>
                <div className="col col--4">
                  <Link className="button button--outline" to={n3Roadmap}>
                    Roadmap
                  </Link>
                </div>
                <div className="col col--4">
                  <Link className="button button--outline" to={n3Modulos}>
                    Módulos
                  </Link>
                </div>
              </div>

              <div className="row" style={{ rowGap: 16, marginTop: 16 }}>
                <div className="col col--4">
                  <Link className="button button--outline" to={n3Gramatica}>
                    Gramática premium
                  </Link>
                </div>
                <div className="col col--4">
                  <Link className="button button--outline" to={n3Kanji}>
                    Kanji premium
                  </Link>
                </div>
                <div className="col col--4">
                  <Link className="button button--outline" to={n3Lecturas}>
                    Lecturas premium
                  </Link>
                </div>
              </div>

              <div className="row" style={{ rowGap: 16, marginTop: 16 }}>
                <div className="col col--6">
                  <Link className="button button--outline" to={n3Escucha}>
                    Escucha premium
                  </Link>
                </div>
                <div className="col col--6">
                  <Link className="button button--outline" to={n3Cultura}>
                    Cultura y contexto
                  </Link>
                </div>
              </div>

              <div className="card shadow--md" style={{ marginTop: 24 }}>
                <div className="card__body">
                  <h2>Cierre y proyección</h2>
                  <p>
                    El cierre de N3 valida el acceso a niveles intermedios.
                  </p>
                </div>
                <div className="card__footer" style={{ display: "flex", gap: 12 }}>
                  <Link className="button button--primary" to={n3Cierre}>
                    Cierre formal y diagnóstico pre-N2
                  </Link>
                  <Link className="button button--outline" to={n3Evaluaciones}>
                    Evaluaciones
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
