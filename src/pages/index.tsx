import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

type RouteCardProps = {
  title: string;
  description: string;
  href: string;
  meta?: string;
};

function RouteCard({ title, description, href, meta }: RouteCardProps): JSX.Element {
  return (
    <article className="card shadow--md" style={{ height: "100%" }}>
      <div className="card__body">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
          <h3 style={{ marginBottom: 6 }}>{title}</h3>
          {meta && <span className="badge badge--secondary">{meta}</span>}
        </div>
        <p style={{ margin: 0, lineHeight: 1.65, opacity: 0.9 }}>
          {description}
        </p>
      </div>
      <div className="card__footer">
        <Link className="button button--primary button--block" to={href}>
          Acceder
        </Link>
      </div>
    </article>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  // DOCS EN ROOT (routeBasePath = "/")
  const orientacionUrl = useBaseUrl("/orientacion");
  const reinicioA1Url = useBaseUrl("/reinicio-a1");
  const n5DocsUrl = useBaseUrl("/n5");

  return (
    <Layout
      title={siteConfig.title}
      description="Ruta académica de japonés con orientación, reinicio y preparación JLPT (N5–N3)."
    >
      <main>
        {/* HERO */}
        <section className="container" style={{ padding: "3.5rem 0 2rem" }}>
          <div className="row">
            <div className="col col--8 col--offset-2">
              <header style={{ textAlign: "center" }}>
                <h1>Japonés con estándar académico y ejecución profesional</h1>
                <p style={{ maxWidth: 760, margin: "0 auto", lineHeight: 1.7 }}>
                  Programa estructurado por etapas, con criterios claros y progresión controlada.
                </p>

                <div
                  style={{
                    marginTop: 20,
                    display: "flex",
                    gap: 12,
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Link className="button button--primary" to={orientacionUrl}>
                    Orientación
                  </Link>
                  <Link className="button button--secondary" to={reinicioA1Url}>
                    Reinicio A1
                  </Link>
                  <Link className="button button--outline button--secondary" to="/n5">
                    JLPT N5
                  </Link>
                </div>
              </header>
            </div>
          </div>
        </section>

        {/* RUTAS */}
        <section className="container" style={{ padding: "2rem 0 3rem" }}>
          <div className="row">
            <div className="col col--10 col--offset-1">
              <h2>Rutas de estudio</h2>

              <div className="row" style={{ rowGap: 16 }}>
                <div className="col col--6">
                  <RouteCard
                    title="Orientación"
                    meta="Base"
                    description="Guía metodológica y criterios académicos del programa."
                    href={orientacionUrl}
                  />
                </div>

                <div className="col col--6">
                  <RouteCard
                    title="Reinicio A1"
                    meta="Fundamentos"
                    description="Revisión estructurada para asegurar bases sólidas."
                    href={reinicioA1Url}
                  />
                </div>

                <div className="col col--4">
                  <RouteCard
                    title="JLPT N5"
                    meta="Nivel"
                    description="Entrada formal al japonés moderno."
                    href="/n5"
                  />
                </div>

                <div className="col col--4">
                  <RouteCard
                    title="JLPT N4"
                    meta="Nivel"
                    description="Consolidación gramatical y lectora."
                    href="/n4"
                  />
                </div>

                <div className="col col--4">
                  <RouteCard
                    title="JLPT N3"
                    meta="Nivel"
                    description="Transición a nivel intermedio."
                    href="/n3"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ESTÁNDAR */}
        <section className="container" style={{ paddingBottom: "3.5rem" }}>
          <div className="row">
            <div className="col col--10 col--offset-1">
              <div className="card shadow--sm">
                <div className="card__body">
                  <h2>Estándar académico</h2>
                  <ul>
                    <li>Arquitectura manual y controlada.</li>
                    <li>Docs en raíz, URLs limpias y estables.</li>
                    <li>Diseño sobrio, académico y profesional.</li>
                  </ul>
                </div>
                <div className="card__footer" style={{ display: "flex", gap: 12 }}>
                  <Link className="button button--outline button--primary" to={orientacionUrl}>
                    Guía académica
                  </Link>
                  <Link className="button button--outline button--secondary" to={n5DocsUrl}>
                    Docs N5
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
