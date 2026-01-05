import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function N5Hub(): JSX.Element {
  const n5Index = useBaseUrl("n5/modulo-01");
  const n5Roadmap = useBaseUrl("/n5/roadmap-n5");
  const n5Evaluaciones = useBaseUrl("/n5/evaluaciones");
  const n5DecisionN4 = useBaseUrl("/n5/decision-paso-a-n4");
  const n5Diagnostico = useBaseUrl("/n5/diagnostico-debilidades-n5");
  const n5Cierre = useBaseUrl("/n5/cierre-formal-n5");

  return (
    <Layout
      title="JLPT N5"
      description="Hub académico del nivel JLPT N5: fundamentos, estructura y criterios de progreso."
    >
      <main>
        <section className="container" style={{ padding: "3.5rem 0 2rem" }}>
          <div className="row">
            <div className="col col--8 col--offset-2">
              <header style={{ textAlign: "center" }}>
                <span className="badge badge--secondary">Nivel JLPT</span>
                <h1 style={{ marginTop: 12 }}>JLPT N5</h1>
                <p style={{ maxWidth: 760, margin: "0 auto", lineHeight: 1.7 }}>
                  Nivel fundacional del programa. Aquí se establecen las bases
                  gramaticales, léxicas y de lectura necesarias para progresar con criterio.
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
                      <p>Objetivos, alcance y ritmo recomendado.</p>
                    </div>
                    <div className="card__footer">
                      <Link className="button button--outline button--primary" to={n5Roadmap}>
                        Ver roadmap
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col col--4">
                  <div className="card">
                    <div className="card__body">
                      <h3>Módulos</h3>
                      <p>Gramática, vocabulario, kanji y checkpoints.</p>
                    </div>
                    <div className="card__footer">
                      <Link className="button button--outline button--primary" to={n5Index}>
                        Ir a módulos
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col col--4">
                  <div className="card">
                    <div className="card__body">
                      <h3>Evaluaciones</h3>
                      <p>Diagnósticos, exámenes y simulacros.</p>
                    </div>
                    <div className="card__footer">
                      <Link className="button button--outline button--primary" to={n5Evaluaciones}>
                        Ver evaluaciones
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card shadow--md" style={{ marginTop: 24 }}>
                <div className="card__body">
                  <h2>Decisión de progreso</h2>
                  <p>
                    El paso a N4 no es automático. Requiere diagnóstico y cierre formal.
                  </p>
                </div>
                <div className="card__footer" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Link className="button button--primary" to={n5DecisionN4}>
                    Decisión paso a N4
                  </Link>
                  <Link className="button button--outline button--secondary" to={n5Diagnostico}>
                    Diagnóstico de debilidades
                  </Link>
                  <Link className="button button--outline button--secondary" to={n5Cierre}>
                    Cierre formal N5
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
