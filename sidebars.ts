import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  academySidebar: [
    // =========================
    // INICIO
    // =========================
    "intro",

    // =========================
    // ORIENTACIÓN (GENERAL)
    // =========================
    {
      type: "category",
      label: "Orientación",
      link: { type: "doc", id: "orientacion/index" },
      items: [
        "orientacion/introduccion",
        "orientacion/metodo-de-estudio",
        "orientacion/rutina-y-metricas",
        "orientacion/herramientas-apps",
        "orientacion/sistema-srs-anki",
        "orientacion/bitacora-de-errores",
        "orientacion/evaluaciones-y-simulacros",
      ],
    },

    // =========================
    // REINICIO A1
    // =========================
    {
      type: "category",
      label: "Reinicio A1",
      link: { type: "doc", id: "reinicio-a1/index" },
      items: [
        "reinicio-a1/roadmap",
        "reinicio-a1/kana-hiragana",
        "reinicio-a1/kana-katakana",
        "reinicio-a1/pronunciacion-y-ritmo",
        "reinicio-a1/frases-base-y-particulas",
        "reinicio-a1/vocabulario-base",
        "reinicio-a1/kanji-inicial",
        "reinicio-a1/checkpoint",
      ],
    },

    // =========================
    // JLPT N5 (COMPLETO y FUNCIONA)
    // =========================
    {
      type: "category",
      label: "JLPT N5",
      link: { type: "doc", id: "n5/index" },
      items: [
        "n5/roadmap-n5",

        {
          type: "category",
          label: "Módulo 01",
          link: { type: "doc", id: "n5/modulo-01/index" },
          items: [
            "n5/modulo-01/gramatica-n5-01-fundamentos",
            "n5/modulo-01/vocabulario-n5-01",
            "n5/modulo-01/kanji-n5-01",
            "n5/modulo-01/checkpoint-n5-01",
          ],
        },
        {
          type: "category",
          label: "Módulo 02",
          link: { type: "doc", id: "n5/modulo-02/index" },
          items: [
            "n5/modulo-02/gramatica-n5-02-pasado-rutina",
            "n5/modulo-02/vocabulario-n5-02",
            "n5/modulo-02/kanji-n5-02",
            "n5/modulo-02/checkpoint-n5-02",
          ],
        },
        {
          type: "category",
          label: "Módulo 03",
          link: { type: "doc", id: "n5/modulo-03/index" },
          items: [
            "n5/modulo-03/gramatica-n5-03-adjetivos",
            "n5/modulo-03/vocabulario-n5-03",
            "n5/modulo-03/kanji-n5-03",
            "n5/modulo-03/checkpoint-n5-03",
          ],
        },
        {
          type: "category",
          label: "Módulo 04",
          link: { type: "doc", id: "n5/modulo-04/index" },
          items: [
            "n5/modulo-04/gramatica-n5-04-arimasu-imasu",
            "n5/modulo-04/vocabulario-n5-04",
            "n5/modulo-04/kanji-n5-04",
            "n5/modulo-04/checkpoint-n5-04",
          ],
        },

        {
          type: "category",
          label: "Gramática premium",
          link: { type: "doc", id: "n5/gramatica-premium/index" },
          items: [
            "n5/gramatica-premium/gramatica-premium-introduccion",
            "n5/gramatica-premium/tabla-copula-y-verbos",
            "n5/gramatica-premium/tabla-particulas-premium",
            "n5/gramatica-premium/orden-de-la-frase",
            "n5/gramatica-premium/tabla-errores-tipicos",
            "n5/gramatica-premium/checklist-dominio-gramatica",
            "n5/gramatica-premium/adjetivos-premium-introduccion",
            "n5/gramatica-premium/tabla-adjetivos-i",
            "n5/gramatica-premium/tabla-adjetivos-na",
            "n5/gramatica-premium/contraste-i-vs-na",
            "n5/gramatica-premium/uso-con-sustantivos",
            "n5/gramatica-premium/errores-tipicos-adjetivos",
            "n5/gramatica-premium/checklist-adjetivos",
            "n5/gramatica-premium/arimasu-imasu-introduccion",
            "n5/gramatica-premium/tabla-arimasu-vs-imasu",
            "n5/gramatica-premium/estructura-ubicacion",
            "n5/gramatica-premium/posesion-con-arimasu",
            "n5/gramatica-premium/negativo-y-pasado",
            "n5/gramatica-premium/contraste-arimasu-imasu",
            "n5/gramatica-premium/arimasu-imasu-con-adjetivos",
            "n5/gramatica-premium/checklist-arimasu-imasu",
          ],
        },

        {
          type: "category",
          label: "Kanji premium",
          link: { type: "doc", id: "n5/kanji-premium/index" },
          items: [
            "n5/kanji-premium/introduccion-kanji-premium",
            "n5/kanji-premium/tabla-kanji-n5-core",
            "n5/kanji-premium/kanji-reconocimiento-vs-produccion",
            "n5/kanji-premium/kanji-y-anki-premium",
          ],
        },

        {
          type: "category",
          label: "Escucha premium",
          link: { type: "doc", id: "n5/escucha-premium/index" },
          items: [
            "n5/escucha-premium/introduccion-escucha-premium-n5",
            "n5/escucha-premium/escucha-guiada-01-rutina-diaria",
            "n5/escucha-premium/escucha-guiada-02-descripcion-simple",
            "n5/escucha-premium/estrategias-de-escucha-n5",
            "n5/escucha-premium/checklist-dominio-escucha-n5",
          ],
        },

        {
          type: "category",
          label: "Cultura",
          link: { type: "doc", id: "n5/cultura/index" },
          items: [
            "n5/cultura/contexto-y-omision",
            "n5/cultura/anime-y-manga-con-criterio-docente",
            "n5/cultura/cortesia-basica-y-neutralidad",
            "n5/cultura/pensamiento-japones-y-orden-de-la-frase",
            "n5/cultura/errores-culturales-tipicos-del-principiante",
            "n5/cultura/checklist-cultural-n5",
          ],
        },

        {
          type: "category",
          label: "Evaluaciones",
          link: { type: "doc", id: "n5/evaluaciones/index" },
          items: [
            "n5/evaluaciones/diagnostico-reinicio-a1",
            "n5/evaluaciones/diagnostico-reinicio-a1-resuelto",
            "n5/evaluaciones/n5-modulo-1-examen",
            "n5/evaluaciones/n5-modulo-1-examen-resuelto",
            "n5/evaluaciones/n5-modulo-2-examen",
            "n5/evaluaciones/n5-modulo-2-examen-resuelto",
            "n5/evaluaciones/n5-modulo-3-examen",
            "n5/evaluaciones/n5-modulo-3-examen-resuelto",
            "n5/evaluaciones/n5-modulo-4-examen",
            "n5/evaluaciones/n5-modulo-4-examen-resuelto",
            "n5/evaluaciones/n5-simulacro-completo",
            "n5/evaluaciones/n5-simulacro-completo-resuelto",
          ],
        },

        "n5/decision-paso-a-n4",
        "n5/diagnostico-debilidades-n5",
        "n5/cierre-formal-n5",
      ],
    },

    // =========================
    // JLPT N4 (COMPLETO y FUNCIONA)
    // =========================
    {
      type: "category",
      label: "JLPT N4",
      link: { type: "doc", id: "n4/index" },
      items: [
        "n4/roadmap-n4",

        {
          type: "category",
          label: "Módulo 01",
          link: { type: "doc", id: "n4/modulo-01/index" },
          items: [
            "n4/modulo-01/gramatica-n4-01-forma-te",
            "n4/modulo-01/vocabulario-n4-01",
            "n4/modulo-01/kanji-n4-01",
            "n4/modulo-01/practica-guiada-n4-01",
            "n4/modulo-01/checkpoint-n4-01",
          ],
        },
        {
          type: "category",
          label: "Módulo 02",
          link: { type: "doc", id: "n4/modulo-02/index" },
          items: [
            "n4/modulo-02/gramatica-n4-02-forma-te-aplicada",
            "n4/modulo-02/vocabulario-n4-02",
            "n4/modulo-02/kanji-n4-02",
            "n4/modulo-02/practica-guiada-n4-02",
            "n4/modulo-02/checkpoint-n4-02",
          ],
        },
        {
          type: "category",
          label: "Módulo 03",
          link: { type: "doc", id: "n4/modulo-03/index" },
          items: [
            "n4/modulo-03/gramatica-n4-03-razones",
            "n4/modulo-03/vocabulario-n4-03",
            "n4/modulo-03/kanji-n4-03",
            "n4/modulo-03/practica-guiada-n4-03",
            "n4/modulo-03/checkpoint-n4-03",
          ],
        },
        {
          type: "category",
          label: "Módulo 04",
          link: { type: "doc", id: "n4/modulo-04/index" },
          items: [
            "n4/modulo-04/gramatica-n4-04-comparaciones",
            "n4/modulo-04/vocabulario-n4-04",
            "n4/modulo-04/kanji-n4-04",
            "n4/modulo-04/practica-guiada-n4-04",
            "n4/modulo-04/checkpoint-n4-04",
          ],
        },
        {
          type: "category",
          label: "Módulo 05",
          link: { type: "doc", id: "n4/modulo-05/index" },
          items: [
            "n4/modulo-05/gramatica-n4-05-acciones-intencion",
            "n4/modulo-05/vocabulario-n4-05",
            "n4/modulo-05/kanji-n4-05",
            "n4/modulo-05/practica-guiada-n4-05",
            "n4/modulo-05/checkpoint-n4-05",
          ],
        },
        {
          type: "category",
          label: "Módulo 06",
          link: { type: "doc", id: "n4/modulo-06/index" },
          items: [
            "n4/modulo-06/gramatica-n4-06-experiencia-frecuencia",
            "n4/modulo-06/vocabulario-n4-06",
            "n4/modulo-06/kanji-n4-06",
            "n4/modulo-06/practica-guiada-n4-06",
            "n4/modulo-06/checkpoint-n4-06",
          ],
        },

        {
          type: "category",
          label: "Gramática premium",
          link: { type: "doc", id: "n4/gramatica-premium/index" },
          items: [
            "n4/gramatica-premium/forma-te-introduccion",
            "n4/gramatica-premium/forma-te-tabla-formacion",
            "n4/gramatica-premium/forma-te-usos-basicos",
            "n4/gramatica-premium/forma-te-permiso",
            "n4/gramatica-premium/forma-te-prohibicion",
            "n4/gramatica-premium/forma-te-peticiones",
            "n4/gramatica-premium/forma-te-acciones-simultaneas",
            "n4/gramatica-premium/forma-te-errores-tipicos",
            "n4/gramatica-premium/forma-te-checklist-dominio",
            "n4/gramatica-premium/forma-te-practica-transformaciones",
            "n4/gramatica-premium/forma-te-mini-patrones-frases",
            "n4/gramatica-premium/forma-te-rubrica-auto-correccion",
            "n4/gramatica-premium/forma-te-permiso-vs-capacidad",
            "n4/gramatica-premium/forma-te-prohibicion-vs-no-haga",
            "n4/gramatica-premium/forma-te-banco-ejemplos-anki",
            "n4/gramatica-premium/razones-introduccion",
            "n4/gramatica-premium/tabla-kara-vs-node",
            "n4/gramatica-premium/razones-orden-logico",
            "n4/gramatica-premium/razones-opinion-to-omoimasu",
            "n4/gramatica-premium/razones-errores-tipicos",
            "n4/gramatica-premium/razones-checklist",
            "n4/gramatica-premium/comparaciones-introduccion",
            "n4/gramatica-premium/tabla-yori-houga",
            "n4/gramatica-premium/comparaciones-yori-houga-formas",
            "n4/gramatica-premium/comparaciones-dotchira-ga",
            "n4/gramatica-premium/comparaciones-en-contexto-opinion",
            "n4/gramatica-premium/comparaciones-errores-tipicos",
            "n4/gramatica-premium/comparaciones-practica-transformaciones",
            "n4/gramatica-premium/comparaciones-mini-patrones-frases",
            "n4/gramatica-premium/comparaciones-checklist-dominio",
            "n4/gramatica-premium/experiencia-introduccion",
            "n4/gramatica-premium/tabla-ta-koto-aru",
            "n4/gramatica-premium/experiencia-vs-pasado-puntual",
            "n4/gramatica-premium/frecuencia-tabla-premium",
            "n4/gramatica-premium/experiencia-errores-tipicos",
            "n4/gramatica-premium/experiencia-checklist",
          ],
        },

        {
          type: "category",
          label: "Kanji premium",
          link: { type: "doc", id: "n4/kanji-premium/index" },
          items: [
            "n4/kanji-premium/kanji-n4-core-lista",
            "n4/kanji-premium/kanji-n4-por-frecuencia",
            "n4/kanji-premium/kanji-n4-verbos-clave",
            "n4/kanji-premium/kanji-n4-adjetivos-clave",
            "n4/kanji-premium/kanji-n4-sustantivos-clave",
            "n4/kanji-premium/kanji-reconocimiento-vs-produccion-n4",
            "n4/kanji-premium/kanji-errores-tipicos-n4",
            "n4/kanji-premium/kanji-y-srs-anki-n4",
            "n4/kanji-premium/kanji-checklist-dominio-n4",
          ],
        },

        {
          type: "category",
          label: "Lecturas premium",
          link: { type: "doc", id: "n4/lecturas-premium/index" },
          items: [
            "n4/lecturas-premium/introduccion-lecturas-premium-n4",
            "n4/lecturas-premium/lectura-guiada-01-vida-cotidiana",
            "n4/lecturas-premium/lectura-guiada-02-experiencia-y-opinion",
            "n4/lecturas-premium/lectura-guiada-03-comparacion-y-razones",
            "n4/lecturas-premium/analisis-gramatical-lectura",
            "n4/lecturas-premium/estrategias-lectura-jlpt-n4",
            "n4/lecturas-premium/checklist-dominio-lectura-n4",
          ],
        },

        {
          type: "category",
          label: "Cultura",
          link: { type: "doc", id: "n4/cultura/index" },
          items: [
            "n4/cultura/contexto-implicito-y-responsabilidad-del-oyente",
            "n4/cultura/neutralidad-evaluacion-y-opinion-en-japones",
            "n4/cultura/pensamiento-japones-y-logica-del-discurso-n4",
            "n4/cultura/anime-manga-y-registro-real-criterio-docente-n4",
            "n4/cultura/errores-culturales-del-estudiante-intermedio-n4",
            "n4/cultura/checklist-cultural-n4",
          ],
        },

        {
          type: "category",
          label: "Evaluaciones",
          link: { type: "doc", id: "n4/evaluaciones/index" },
          items: [
            "n4/evaluaciones/n4-modulo-01-examen",
            "n4/evaluaciones/n4-modulo-01-examen-resuelto",
            "n4/evaluaciones/n4-modulo-02-examen",
            "n4/evaluaciones/n4-modulo-02-examen-resuelto",
            "n4/evaluaciones/n4-modulo-03-examen",
            "n4/evaluaciones/n4-modulo-03-examen-resuelto",
            "n4/evaluaciones/n4-modulo-04-examen",
            "n4/evaluaciones/n4-modulo-04-examen-resuelto",
            "n4/evaluaciones/n4-modulo-05-examen",
            "n4/evaluaciones/n4-modulo-05-examen-resuelto",
            "n4/evaluaciones/n4-modulo-06-examen",
            "n4/evaluaciones/n4-modulo-06-examen-resuelto",
            "n4/evaluaciones/n4-simulacro-premium",
            "n4/evaluaciones/n4-simulacro-premium-resuelto",
          ],
        },

        "n4/cierre-formal-n4",
      ],
    },

    // =========================
    // JLPT N3 (EXPLÍCITO)
    // DocIds reales: n3/*
    // Estructura real en disco: 04-n3/*
    // =========================
    {
      type: "category",
      label: "JLPT N3",
      link: { type: "doc", id: "n3/index" },
      items: [

        // -------------------------
        // 00 - ORIENTACIÓN N3
        // -------------------------
        {
          type: "category",
          label: "Orientación N3",
          link: { type: "doc", id: "n3/orientacion/index" },
          items: [
            "n3/orientacion/introduccion-n3",
            "n3/orientacion/metodo-de-estudio-n3",
            "n3/orientacion/ritmo-y-carga-n3",
            "n3/orientacion/herramientas-n3",
            "n3/orientacion/bitacora-errores-n3",
            "n3/orientacion/evaluaciones-y-gates-n3",
          ],
        },

        // -------------------------
        // 01 - ROADMAP N3
        // -------------------------
        {
          type: "category",
          label: "Roadmap N3",
          link: { type: "doc", id: "n3/roadmap/index" },
          items: [
            "n3/roadmap/roadmap-n3",
          ],
        },

        // -------------------------
        // 02 - GRAMÁTICA PREMIUM N3
        // -------------------------
        {
          type: "category",
          label: "Gramática premium",
          link: { type: "doc", id: "n3/gramatica-premium/index" },
          items: [
            "n3/gramatica-premium/introduccion",

            "n3/gramatica-premium/conectores-logicos-introduccion",
            "n3/gramatica-premium/causa-contraste-y-concesion",
            "n3/gramatica-premium/condicion-y-restriccion",
            "n3/gramatica-premium/reformulacion-y-precision",
            "n3/gramatica-premium/conectores-errores-tipicos",
            "n3/gramatica-premium/conectores-practica-guiada",
            "n3/gramatica-premium/conectores-checklist-dominio",

            "n3/gramatica-premium/modalizacion-introduccion",
            "n3/gramatica-premium/probabilidad-y-suposicion",
            "n3/gramatica-premium/opinion-mitigada-y-reserva",
            "n3/gramatica-premium/grado-de-compromiso-del-hablante",
            "n3/gramatica-premium/modalizacion-errores-tipicos",
            "n3/gramatica-premium/modalizacion-practica-guiada",
            "n3/gramatica-premium/modalizacion-checklist-dominio",

            "n3/gramatica-premium/restriccion-introduccion",
            "n3/gramatica-premium/condiciones-no-absolutas",
            "n3/gramatica-premium/limites-y-excepciones",
            "n3/gramatica-premium/restriccion-en-contexto-real",
            "n3/gramatica-premium/restriccion-errores-tipicos",
            "n3/gramatica-premium/restriccion-practica-guiada",
            "n3/gramatica-premium/restriccion-checklist-dominio",

            "n3/gramatica-premium/reformulacion-introduccion",
            "n3/gramatica-premium/explicar-de-otra-forma",
            "n3/gramatica-premium/precisar-y-delimitar-informacion",
            "n3/gramatica-premium/guiar-al-interlocutor",
            "n3/gramatica-premium/reformulacion-errores-tipicos",
            "n3/gramatica-premium/reformulacion-practica-guiada",
            "n3/gramatica-premium/reformulacion-checklist-dominio",

            "n3/gramatica-premium/gramatica-premium-n3-sintesis",
            "n3/gramatica-premium/gramatica-premium-n3-checklist-global",
          ],
        },

        // -------------------------
        // 03 - KANJI PREMIUM N3
        // -------------------------
        {
          type: "category",
          label: "Kanji premium",
          link: { type: "doc", id: "n3/kanji-premium/index" },
          items: [
            "n3/kanji-premium/introduccion-kanji-premium-n3",
            "n3/kanji-premium/kanji-n3-sistema-y-funcion",
            "n3/kanji-premium/kanji-n3-core-lista",
            "n3/kanji-premium/kanji-n3-por-frecuencia-y-contexto",
            "n3/kanji-premium/kanji-n3-verbos-clave",
            "n3/kanji-premium/kanji-n3-adjetivos-y-estados",
            "n3/kanji-premium/kanji-n3-sustantivos-abstractos",
            "n3/kanji-premium/kanji-reconocimiento-vs-produccion-n3",
            "n3/kanji-premium/kanji-n3-combinaciones-y-patrones",
            "n3/kanji-premium/kanji-n3-errores-tipicos",
            "n3/kanji-premium/kanji-y-srs-anki-n3",
            "n3/kanji-premium/kanji-n3-checklist-dominio",
          ],
        },

        // -------------------------
        // 04 - LECTURAS PREMIUM N3
        // -------------------------
        {
          type: "category",
          label: "Lecturas premium",
          link: { type: "doc", id: "n3/lecturas-premium/index" },
          items: [
            "n3/lecturas-premium/introduccion-lecturas-premium-n3",
            "n3/lecturas-premium/lectura-guiada-01-texto-informativo",
            "n3/lecturas-premium/lectura-guiada-02-opinion-y-evaluacion",
            "n3/lecturas-premium/lectura-guiada-03-proceso-y-causa-efecto",
            "n3/lecturas-premium/lectura-guiada-04-contexto-social-y-sistema",
            "n3/lecturas-premium/analisis-gramatical-y-discursivo",
            "n3/lecturas-premium/estrategias-de-lectura-jlpt-n3",
            "n3/lecturas-premium/checklist-dominio-lectura-n3",
          ],
        },

        // -------------------------
        // 05 - ESCUCHA PREMIUM N3
        // -------------------------
        {
          type: "category",
          label: "Escucha premium",
          link: { type: "doc", id: "n3/escucha-premium/index" },
          items: [
            "n3/escucha-premium/introduccion-escucha-premium-n3",
            "n3/escucha-premium/escucha-guiada-01-explicacion",
            "n3/escucha-premium/escucha-guiada-02-conversacion-funcional",
            "n3/escucha-premium/escucha-guiada-03-proceso-y-decision",
            "n3/escucha-premium/escucha-guiada-04-opinion-y-evaluacion",
            "n3/escucha-premium/analisis-auditivo-y-discursivo",
            "n3/escucha-premium/estrategias-de-escucha-jlpt-n3",
            "n3/escucha-premium/checklist-dominio-escucha-n3",
          ],
        },

        // -------------------------
        // 06 - MÓDULOS (01..10) N3
        // -------------------------
        {
          type: "category",
          label: "Módulos N3",
          link: { type: "doc", id: "n3/modulos/index" },
          items: [
            {
              type: "category",
              label: "Módulo 01",
              link: { type: "doc", id: "n3/modulos/modulo-01/index" },
              items: [
                "n3/modulos/modulo-01/gramatica-n3-01",
                "n3/modulos/modulo-01/vocabulario-n3-01",
                "n3/modulos/modulo-01/kanji-n3-01",
                "n3/modulos/modulo-01/lectura-guiada-n3-01",
                "n3/modulos/modulo-01/escucha-guiada-n3-01",
                "n3/modulos/modulo-01/practica-integrada-n3-01",
                "n3/modulos/modulo-01/checkpoint-n3-01",
              ],
            },
            {
              type: "category",
              label: "Módulo 02",
              link: { type: "doc", id: "n3/modulos/modulo-02/index" },
              items: [
                "n3/modulos/modulo-02/gramatica-n3-02",
                "n3/modulos/modulo-02/vocabulario-n3-02",
                "n3/modulos/modulo-02/kanji-n3-02",
                "n3/modulos/modulo-02/lectura-guiada-n3-02",
                "n3/modulos/modulo-02/escucha-guiada-n3-02",
                "n3/modulos/modulo-02/practica-integrada-n3-02",
                "n3/modulos/modulo-02/checkpoint-n3-02",
              ],
            },
            {
              type: "category",
              label: "Módulo 03",
              link: { type: "doc", id: "n3/modulos/modulo-03/index" },
              items: [
                "n3/modulos/modulo-03/gramatica-n3-03",
                "n3/modulos/modulo-03/vocabulario-n3-03",
                "n3/modulos/modulo-03/kanji-n3-03",
                "n3/modulos/modulo-03/lectura-guiada-n3-03",
                "n3/modulos/modulo-03/escucha-guiada-n3-03",
                "n3/modulos/modulo-03/practica-integrada-n3-03",
                "n3/modulos/modulo-03/checkpoint-n3-03",
              ],
            },
            {
              type: "category",
              label: "Módulo 04",
              link: { type: "doc", id: "n3/modulos/modulo-04/index" },
              items: [
                "n3/modulos/modulo-04/gramatica-n3-04",
                "n3/modulos/modulo-04/vocabulario-n3-04",
                "n3/modulos/modulo-04/kanji-n3-04",
                "n3/modulos/modulo-04/lectura-guiada-n3-04",
                "n3/modulos/modulo-04/escucha-guiada-n3-04",
                "n3/modulos/modulo-04/practica-integrada-n3-04",
                "n3/modulos/modulo-04/checkpoint-n3-04",
              ],
            },
            {
              type: "category",
              label: "Módulo 05",
              link: { type: "doc", id: "n3/modulos/modulo-05/index" },
              items: [
                "n3/modulos/modulo-05/gramatica-n3-05",
                "n3/modulos/modulo-05/vocabulario-n3-05",
                "n3/modulos/modulo-05/kanji-n3-05",
                "n3/modulos/modulo-05/lectura-guiada-n3-05",
                "n3/modulos/modulo-05/escucha-guiada-n3-05",
                "n3/modulos/modulo-05/practica-integrada-n3-05",
                "n3/modulos/modulo-05/checkpoint-n3-05",
              ],
            },
            {
              type: "category",
              label: "Módulo 06",
              link: { type: "doc", id: "n3/modulos/modulo-06/index" },
              items: [
                "n3/modulos/modulo-06/gramatica-n3-06",
                "n3/modulos/modulo-06/vocabulario-n3-06",
                "n3/modulos/modulo-06/kanji-n3-06",
                "n3/modulos/modulo-06/lectura-guiada-n3-06",
                "n3/modulos/modulo-06/escucha-guiada-n3-06",
                "n3/modulos/modulo-06/practica-integrada-n3-06",
                "n3/modulos/modulo-06/checkpoint-n3-06",
              ],
            },
            {
              type: "category",
              label: "Módulo 07",
              link: { type: "doc", id: "n3/modulos/modulo-07/index" },
              items: [
                "n3/modulos/modulo-07/gramatica-n3-07",
                "n3/modulos/modulo-07/vocabulario-n3-07",
                "n3/modulos/modulo-07/kanji-n3-07",
                "n3/modulos/modulo-07/lectura-guiada-n3-07",
                "n3/modulos/modulo-07/escucha-guiada-n3-07",
                "n3/modulos/modulo-07/practica-integrada-n3-07",
                "n3/modulos/modulo-07/checkpoint-n3-07",
              ],
            },
            {
              type: "category",
              label: "Módulo 08",
              link: { type: "doc", id: "n3/modulos/modulo-08/index" },
              items: [
                "n3/modulos/modulo-08/gramatica-n3-08",
                "n3/modulos/modulo-08/vocabulario-n3-08",
                "n3/modulos/modulo-08/kanji-n3-08",
                "n3/modulos/modulo-08/lectura-guiada-n3-08",
                "n3/modulos/modulo-08/escucha-guiada-n3-08",
                "n3/modulos/modulo-08/practica-integrada-n3-08",
                "n3/modulos/modulo-08/checkpoint-n3-08",
              ],
            },
            {
              type: "category",
              label: "Módulo 09",
              link: { type: "doc", id: "n3/modulos/modulo-09/index" },
              items: [
                "n3/modulos/modulo-09/gramatica-n3-09",
                "n3/modulos/modulo-09/vocabulario-n3-09",
                "n3/modulos/modulo-09/kanji-n3-09",
                "n3/modulos/modulo-09/lectura-guiada-n3-09",
                "n3/modulos/modulo-09/escucha-guiada-n3-09",
                "n3/modulos/modulo-09/practica-integrada-n3-09",
                "n3/modulos/modulo-09/checkpoint-n3-09",
              ],
            },
            {
              type: "category",
              label: "Módulo 10",
              link: { type: "doc", id: "n3/modulos/modulo-10/index" },
              items: [
                "n3/modulos/modulo-10/gramatica-n3-10",
                "n3/modulos/modulo-10/vocabulario-n3-10",
                "n3/modulos/modulo-10/kanji-n3-10",
                "n3/modulos/modulo-10/lectura-guiada-n3-10",
                "n3/modulos/modulo-10/escucha-guiada-n3-10",
                "n3/modulos/modulo-10/practica-integrada-n3-10",
                "n3/modulos/modulo-10/checkpoint-n3-10",
              ],
            },
          ],
        },

        // -------------------------
        // 07 - CULTURA N3
        // -------------------------
        {
          type: "category",
          label: "Cultura N3",
          link: { type: "doc", id: "n3/cultura/index" },
          items: [
            "n3/cultura/contexto-social-y-implicitacion-n3",
            "n3/cultura/lenguaje-indirecto-y-responsabilidad-difusa",
            "n3/cultura/toma-de-decision-y-armonia-social",
            "n3/cultura/reglas-sociales-limites-y-excepciones",
            "n3/cultura/textos-institucionales-y-lectura-cultural",
            "n3/cultura/checklist-cultural-n3",
          ],
        },

        // -------------------------
        // 08 - EVALUACIONES N3
        // -------------------------
        {
          type: "category",
          label: "Evaluaciones N3",
          link: { type: "doc", id: "n3/evaluaciones/index" },
          items: [
            "n3/evaluaciones/diagnostico-integracion-modulos",
            "n3/evaluaciones/diagnostico-integracion-avanzada",
            "n3/evaluaciones/evaluacion-lectura-n3",
            "n3/evaluaciones/evaluacion-escucha-n3",
            "n3/evaluaciones/evaluacion-cultura-y-pragmatica-n3",
            "n3/evaluaciones/simulacro-premium-n3",
            "n3/evaluaciones/simulacro-premium-n3-resuelto",
          ],
        },

        // -------------------------
        // 99 - CIERRE N3
        // -------------------------
        {
          type: "category",
          label: "Cierre N3",
          link: { type: "doc", id: "n3/cierre/index" },
          items: [
            "n3/cierre/cierre-formal-n3",
            "n3/cierre/diagnostico-pre-n2",
          ],
        },
      ],
    },


    // =========================
    // JLPT N2 / N1
    // =========================
    {
      type: "category",
      label: "JLPT N2",
      items: [{ type: "doc", id: "n2/index" }],
    },
    {
      type: "category",
      label: "JLPT N1",
      items: [{ type: "doc", id: "n1/index" }],
    },

    // =========================
    // RECURSOS
    // =========================
    {
      type: "category",
      label: "Recursos",
      link: { type: "doc", id: "recursos/index" },
      items: [
        "recursos/bibliografia",
        "recursos/links-oficiales-jlpt",
        "recursos/lectura-tadoku",
        "recursos/canales-y-audio",
      ],
    },

    // =========================
    // HABILIDADES TRANSVERSALES
    // =========================
    {
      type: "category",
      label: "Habilidades transversales",
      link: { type: "doc", id: "habilidades-transversales/index" },
      items: [
        "habilidades-transversales/lectura-academica",
        "habilidades-transversales/escucha-natural",
        "habilidades-transversales/pensamiento-en-japones",
        "habilidades-transversales/escritura-reflexiva",
        "habilidades-transversales/diccionarios-japoneses",
      ],
    },
  ],
};

export default sidebars;
