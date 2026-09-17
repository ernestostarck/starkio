import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad — Starkio Labs",
  description:
    "Cómo Starkio Labs SpA recopila, usa, conserva y protege los datos personales de quienes visitan este sitio o completan el formulario de contacto, conforme a la Ley N° 19.628 y la Ley N° 21.719.",
};

const toc = [
  ["responsable", "Responsable del tratamiento"],
  ["s1", "1. Introducción y alcance"],
  ["s2", "2. Datos personales que recopilamos"],
  ["s3", "3. Finalidad y base legal del tratamiento"],
  ["s4", "4. Política de cookies"],
  ["s5", "5. Transferencia internacional de datos"],
  ["s6", "6. Conservación de los datos"],
  ["s7", "7. Derechos del titular de los datos"],
  ["s8", "8. Medidas de seguridad"],
  ["s9", "9. Menores de edad"],
  ["s10", "10. Consentimiento y revocación"],
  ["s11", "11. Modificaciones a esta política"],
  ["s12", "12. Encargados del tratamiento (subprocesadores)"],
  ["s13", "13. Marco legal aplicable"],
  ["s14", "14. Contacto y Encargado de Protección de Datos"],
] as const;

const subprocessors = [
  { name: "Google LLC", purpose: "Analítica web (GA4)", country: "EE.UU.", guarantee: "DPF / DPA" },
  { name: "Vercel Inc.", purpose: "Hosting e infraestructura", country: "EE.UU.", guarantee: "DPA / SOC2" },
  { name: "Resend Inc.", purpose: "Envío de correos transaccionales", country: "EE.UU.", guarantee: "DPA" },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-void px-6 py-24">
      <div className="max-w-3xl mx-auto text-starkio-cloud/70">
        <Link href="/" className="text-sm text-starkio-purple hover:underline">
          ← Volver al inicio
        </Link>

        <p className="text-xs text-starkio-purple tracking-widest mt-8 mb-3 font-mono">
          STARKIO LABS SPA
        </p>
        <h1 className="text-display-md font-bold text-starkio-cloud mb-3">
          Política de Privacidad y Uso de Cookies
        </h1>
        <p className="text-sm text-starkio-cloud/40 mb-12">
          Versión 1.0 · Vigente desde 15 de septiembre de 2026
        </p>

        {/* Tabla de contenidos */}
        <nav aria-label="Contenidos de la política" className="mb-14 border border-white/10 rounded-xl p-6">
          <p className="text-xs text-starkio-cloud/40 tracking-widest mb-4">CONTENIDOS</p>
          <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm list-decimal list-inside">
            {toc.map(([id, label]) => (
              <li key={id} className="marker:text-starkio-cloud/30">
                <a href={`#${id}`} className="hover:text-starkio-cloud transition-colors">
                  {label.replace(/^\d+\.\s/, "")}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-14 text-sm leading-relaxed">
          <section id="responsable">
            <h2 className="text-lg font-semibold text-starkio-cloud mb-4">
              Información del Responsable del Tratamiento
            </h2>
            <div className="overflow-x-auto border border-white/10 rounded-xl">
              <table className="w-full text-left text-xs">
                <tbody>
                  {[
                    ["Nombre", "Starkio Labs SpA"],
                    ["RUT", "[COMPLETAR ANTES DE PUBLICAR]"],
                    ["Dirección", "Santiago, Región Metropolitana, Chile"],
                    ["Contacto", "privacidad@starkio.io"],
                    ["Sitio web", "https://starkio.io"],
                    ["DPO / Encargado", "Ernesto Arturo Starck Hernández"],
                    ["Marco legal", "Ley N° 19.628 · Ley N° 21.719 · GDPR (referencial)"],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-b border-white/5 last:border-0">
                      <td className="px-4 py-3 text-starkio-cloud/40 font-medium whitespace-nowrap">{label}</td>
                      <td className="px-4 py-3 text-starkio-cloud/70">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-red-400">
              El RUT queda pendiente de completar antes de publicar este sitio.
            </p>
          </section>

          <section id="s1">
            <h2 className="text-lg font-semibold text-starkio-cloud mb-3">
              1. Introducción y alcance
            </h2>
            <p className="mb-3">
              La presente Política de Privacidad y Uso de Cookies (en adelante,
              &quot;la Política&quot;) describe cómo Starkio Labs SpA (en adelante,
              &quot;Starkio&quot;, &quot;nosotros&quot; o &quot;el Responsable&quot;) recopila, utiliza,
              almacena, comparte y protege los datos personales de los usuarios
              que visitan y utilizan el sitio web{" "}
              <a href="https://starkio.io" className="text-starkio-purple hover:underline">
                https://starkio.io
              </a>{" "}
              (en adelante, &quot;el Sitio&quot;).
            </p>
            <p className="mb-3">
              Esta Política se aplica a todas las personas que interactúan con
              el Sitio, independientemente del dispositivo o ubicación
              geográfica desde la cual accedan. Al navegar por el Sitio, el
              usuario acepta las prácticas descritas en este documento.
            </p>
            <p>
              Starkio está comprometida con la protección de la privacidad de
              sus usuarios y el cumplimiento de la legislación chilena
              vigente, en particular la Ley N° 19.628 sobre Protección de la
              Vida Privada y la Ley N° 21.719 que moderniza el marco de
              protección de datos personales en Chile, así como los estándares
              internacionales relevantes.
            </p>
          </section>

          <section id="s2">
            <h2 className="text-lg font-semibold text-starkio-cloud mb-3">
              2. Datos personales que recopilamos
            </h2>

            <h3 className="text-sm font-semibold text-starkio-cloud/90 mb-2">
              2.1 Datos que el usuario nos proporciona directamente
            </h3>
            <ul className="list-disc list-inside space-y-1.5 mb-5">
              <li>Formulario de contacto: nombre completo</li>
              <li>Formulario de contacto: dirección de correo electrónico</li>
              <li>Formulario de contacto: contenido del mensaje o consulta enviada</li>
              <li>Cualquier información adicional que el usuario incluya voluntariamente en su comunicación</li>
            </ul>

            <h3 className="text-sm font-semibold text-starkio-cloud/90 mb-2">
              2.2 Datos recopilados automáticamente
            </h3>
            <p className="mb-2">
              Cuando el usuario visita el Sitio, recopilamos de forma
              automática ciertos datos técnicos necesarios para el correcto
              funcionamiento del servicio:
            </p>
            <ul className="list-disc list-inside space-y-1.5 mb-5">
              <li>Dirección IP y datos de geolocalización aproximada</li>
              <li>Tipo y versión del navegador web</li>
              <li>Sistema operativo y dispositivo utilizado</li>
              <li>Páginas visitadas, tiempo de permanencia y acciones realizadas</li>
              <li>URL de referencia (desde dónde llegó el usuario al Sitio)</li>
              <li>Fecha y hora de la visita</li>
              <li>Identificadores de cookies y tecnologías similares de rastreo</li>
            </ul>

            <h3 className="text-sm font-semibold text-starkio-cloud/90 mb-2">
              2.3 Datos que no recopilamos
            </h3>
            <p>
              Starkio no solicita ni almacena datos sensibles o especialmente
              protegidos según la ley, tales como datos de salud, origen
              étnico, opiniones políticas, afiliación sindical, creencias
              religiosas, datos biométricos o información sobre la vida
              sexual de los usuarios. Si el usuario incluye voluntariamente
              este tipo de datos en sus comunicaciones, serán tratados con la
              máxima confidencialidad y eliminados una vez atendida la
              consulta.
            </p>
          </section>

          <section id="s3">
            <h2 className="text-lg font-semibold text-starkio-cloud mb-3">
              3. Finalidad y base legal del tratamiento
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-starkio-cloud/90 mb-1">
                  3.1 Atención de consultas y comunicaciones
                </h3>
                <p>
                  <span className="text-starkio-cloud/50">Finalidad:</span>{" "}
                  Responder a los mensajes enviados a través del formulario de
                  contacto del Sitio.{" "}
                  <span className="text-starkio-cloud/50">Base legal:</span>{" "}
                  Consentimiento del titular al completar y enviar el
                  formulario. Interés legítimo en la gestión de comunicaciones
                  corporativas.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-starkio-cloud/90 mb-1">
                  3.2 Análisis y mejora del Sitio
                </h3>
                <p>
                  <span className="text-starkio-cloud/50">Finalidad:</span>{" "}
                  Comprender cómo los usuarios interactúan con el Sitio para
                  mejorar su funcionamiento, contenido y experiencia de
                  usuario.{" "}
                  <span className="text-starkio-cloud/50">Base legal:</span>{" "}
                  Consentimiento del usuario a través del banner de cookies.
                  Interés legítimo en la mejora continua del servicio.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-starkio-cloud/90 mb-1">
                  3.3 Seguridad y prevención de fraude
                </h3>
                <p>
                  <span className="text-starkio-cloud/50">Finalidad:</span>{" "}
                  Detectar, prevenir e investigar actividades fraudulentas,
                  abusos o vulneraciones de seguridad que afecten al Sitio o a
                  sus usuarios.{" "}
                  <span className="text-starkio-cloud/50">Base legal:</span>{" "}
                  Interés legítimo del Responsable en proteger la integridad
                  de su infraestructura y la seguridad de los usuarios.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-starkio-cloud/90 mb-1">
                  3.4 Cumplimiento de obligaciones legales
                </h3>
                <p>
                  <span className="text-starkio-cloud/50">Finalidad:</span>{" "}
                  Atender requerimientos de autoridades competentes y cumplir
                  con obligaciones legales aplicables.{" "}
                  <span className="text-starkio-cloud/50">Base legal:</span>{" "}
                  Cumplimiento de obligaciones legales aplicables al
                  Responsable.
                </p>
              </div>
            </div>
          </section>

          <section id="s4">
            <h2 className="text-lg font-semibold text-starkio-cloud mb-3">
              4. Política de cookies
            </h2>

            <h3 className="text-sm font-semibold text-starkio-cloud/90 mb-2">
              4.1 ¿Qué son las cookies?
            </h3>
            <p className="mb-5">
              Las cookies son pequeños archivos de texto que los sitios web
              almacenan en el dispositivo del usuario cuando este los visita.
              Permiten que el sitio recuerde información sobre la visita para
              facilitar la navegación y personalizar la experiencia. Las
              cookies pueden ser propias (establecidas por el Sitio) o de
              terceros (establecidas por servicios externos).
            </p>

            <h3 className="text-sm font-semibold text-starkio-cloud/90 mb-2">
              4.2 Tipos de cookies que utilizamos
            </h3>
            <div className="space-y-4 mb-5">
              <div>
                <p className="font-medium text-starkio-cloud/80 mb-1">
                  A) Cookies estrictamente necesarias
                </p>
                <p className="mb-2">
                  Imprescindibles para el funcionamiento básico del Sitio. No
                  pueden desactivarse sin afectar funcionalidades esenciales.
                  No requieren consentimiento previo del usuario.
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>session_id:</strong> mantiene la sesión activa. Duración: sesión.</li>
                  <li><strong>csrf_token:</strong> protege contra falsificación de solicitudes. Duración: sesión.</li>
                  <li><strong>cookie_consent:</strong> almacena preferencias de cookies. Duración: 12 meses.</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-starkio-cloud/80 mb-1">
                  B) Cookies analíticas o de rendimiento
                </p>
                <p className="mb-2">Requieren consentimiento previo.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>_ga, _ga_XXXXXX</strong> (Google Analytics 4): distingue usuarios y sesiones. Proveedor: Google LLC. Duración: 2 años / 24 horas.</li>
                  <li><strong>_gid</strong> (Google Analytics): distingue usuarios durante 24 horas.</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-starkio-cloud/80 mb-1">
                  C) Cookies de funcionalidad
                </p>
                <p className="mb-2">Requieren consentimiento previo.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>lang:</strong> almacena el idioma seleccionado. Duración: 12 meses.</li>
                  <li><strong>theme:</strong> almacena la preferencia de modo claro/oscuro. Duración: 12 meses.</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-starkio-cloud/80 mb-1">
                  D) Cookies de marketing y publicidad
                </p>
                <p>
                  En la versión actual del Sitio, Starkio no utiliza cookies
                  de publicidad comportamental ni de retargeting. Si esto
                  cambia en el futuro, esta Política será actualizada y se
                  solicitará el consentimiento explícito del usuario.
                </p>
              </div>
            </div>

            <h3 className="text-sm font-semibold text-starkio-cloud/90 mb-2">
              4.3 Cookies de terceros
            </h3>
            <p className="mb-2">
              El Sitio puede integrar servicios de terceros que establecen sus
              propias cookies. Starkio no controla estas cookies y recomienda
              revisar las políticas de privacidad de cada proveedor:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-5">
              <li>
                Google Analytics (Google LLC):{" "}
                <a href="https://policies.google.com/privacy" className="text-starkio-purple hover:underline">
                  policies.google.com/privacy
                </a>
              </li>
              <li>
                Vercel (infraestructura de hosting):{" "}
                <a href="https://vercel.com/legal/privacy-policy" className="text-starkio-purple hover:underline">
                  vercel.com/legal/privacy-policy
                </a>
              </li>
              <li>
                Resend (servicio de correo electrónico):{" "}
                <a href="https://resend.com/privacy" className="text-starkio-purple hover:underline">
                  resend.com/privacy
                </a>
              </li>
            </ul>

            <h3 className="text-sm font-semibold text-starkio-cloud/90 mb-2">
              4.4 Gestión y control de cookies
            </h3>
            <p className="mb-2">
              El usuario puede gestionar sus preferencias de cookies en
              cualquier momento a través de:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>El panel de preferencias de cookies disponible en el Sitio.</li>
              <li>La configuración del navegador (Chrome, Firefox, Safari, Edge).</li>
              <li>
                Herramientas de opt-out específicas:{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  className="text-starkio-purple hover:underline"
                >
                  Google Analytics Opt-out Add-on
                </a>
                .
              </li>
            </ul>
            <p>
              La desactivación de cookies no estrictamente necesarias puede
              afectar la experiencia de navegación y la disponibilidad de
              ciertas funcionalidades del Sitio.
            </p>
          </section>

          <section id="s5">
            <h2 className="text-lg font-semibold text-starkio-cloud mb-3">
              5. Transferencia internacional de datos
            </h2>
            <p className="mb-3">
              Algunos de los proveedores de servicios que utiliza Starkio
              tienen su sede o procesan datos fuera de Chile, en particular en
              los Estados Unidos de América (Google LLC, Vercel Inc., Resend
              Inc.). Estas transferencias internacionales se realizan bajo las
              siguientes garantías:
            </p>
            <ul className="list-disc list-inside space-y-1.5 mb-3">
              <li>Proveedores adheridos al Data Privacy Framework (UE–EE.UU.) o con cláusulas contractuales estándar equivalentes.</li>
              <li>Contratos de procesamiento de datos (DPA) firmados con cada proveedor.</li>
              <li>Evaluaciones de impacto sobre transferencias (TIA) cuando el marco normativo así lo requiere.</li>
            </ul>
            <p>
              El usuario puede solicitar más información sobre las garantías
              específicas aplicadas a cada transferencia contactando al
              Encargado de Protección de Datos en{" "}
              <a href="mailto:privacidad@starkio.io" className="text-starkio-purple hover:underline">
                privacidad@starkio.io
              </a>
              .
            </p>
          </section>

          <section id="s6">
            <h2 className="text-lg font-semibold text-starkio-cloud mb-3">
              6. Conservación de los datos
            </h2>
            <p className="mb-3">
              Los datos personales serán conservados únicamente durante el
              tiempo necesario para cumplir con la finalidad para la que
              fueron recopilados, aplicando los siguientes plazos
              orientativos:
            </p>
            <ul className="list-disc list-inside space-y-1.5 mb-3">
              <li>Datos de formulario de contacto: hasta 24 meses desde la última comunicación.</li>
              <li>Datos de navegación y cookies analíticas: hasta 26 meses desde la última actividad registrada.</li>
              <li>Registros de seguridad y logs de acceso: hasta 12 meses, salvo requerimiento legal.</li>
              <li>Preferencias de cookies: 12 meses desde el otorgamiento del consentimiento.</li>
            </ul>
            <p>
              Transcurridos estos plazos, los datos serán eliminados de forma
              segura o anonimizados para su uso con fines estadísticos, de
              modo que no sea posible identificar al titular.
            </p>
          </section>

          <section id="s7">
            <h2 className="text-lg font-semibold text-starkio-cloud mb-3">
              7. Derechos del titular de los datos
            </h2>
            <p className="mb-2">
              De acuerdo con la legislación chilena vigente (Ley N° 19.628 y
              Ley N° 21.719), el titular de los datos personales tiene los
              siguientes derechos:
            </p>
            <ul className="list-disc list-inside space-y-1.5 mb-5">
              <li><strong>Acceso:</strong> conocer qué datos trata Starkio, su origen, finalidad y período de conservación.</li>
              <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos o desactualizados.</li>
              <li><strong>Cancelación (supresión):</strong> solicitar la eliminación de datos cuando ya no sean necesarios.</li>
              <li><strong>Oposición:</strong> oponerse al tratamiento en determinadas circunstancias.</li>
              <li><strong>Portabilidad:</strong> recibir los datos en un formato estructurado y de uso común.</li>
              <li><strong>Retirar el consentimiento</strong> en cualquier momento, sin afectar la licitud del tratamiento previo.</li>
              <li><strong>No ser objeto de decisiones automatizadas</strong> que produzcan efectos jurídicos significativos.</li>
            </ul>

            <h3 className="text-sm font-semibold text-starkio-cloud/90 mb-2">
              7.1 Cómo ejercer sus derechos
            </h3>
            <p className="mb-2">
              Para ejercer cualquiera de los derechos anteriores, el titular
              puede escribir a{" "}
              <a href="mailto:privacidad@starkio.io" className="text-starkio-purple hover:underline">
                privacidad@starkio.io
              </a>
              . La solicitud debe incluir: nombre completo, copia de cédula de
              identidad o documento equivalente, descripción clara del derecho
              que desea ejercer y, si corresponde, los datos específicos a los
              que se refiere la solicitud.
            </p>
            <p className="mb-5">
              Starkio responderá en un plazo máximo de{" "}
              <strong>30 días hábiles</strong> desde su recepción. En caso de
              solicitudes complejas, este plazo podrá extenderse por 30 días
              adicionales, informando al titular de dicha extensión y sus
              motivos.
            </p>

            <h3 className="text-sm font-semibold text-starkio-cloud/90 mb-2">
              7.2 Reclamaciones ante la autoridad competente
            </h3>
            <p>
              Si el titular considera que el tratamiento de sus datos infringe
              la legislación vigente y Starkio no ha atendido
              satisfactoriamente su solicitud, puede presentar una reclamación
              ante el{" "}
              <a
                href="https://www.consejotransparencia.cl"
                className="text-starkio-purple hover:underline"
              >
                Consejo para la Transparencia
              </a>{" "}
              o la autoridad de protección de datos competente según la Ley N°
              21.719 una vez entre en vigor su órgano de control.
            </p>
          </section>

          <section id="s8">
            <h2 className="text-lg font-semibold text-starkio-cloud mb-3">
              8. Medidas de seguridad
            </h2>
            <p className="mb-4">
              Starkio implementa medidas técnicas y organizativas apropiadas
              para proteger los datos personales contra el acceso no
              autorizado, la pérdida, alteración, divulgación o destrucción
              accidental o ilícita.
            </p>

            <h3 className="text-sm font-semibold text-starkio-cloud/90 mb-2">
              8.1 Medidas técnicas
            </h3>
            <ul className="list-disc list-inside space-y-1.5 mb-5">
              <li>Cifrado de datos en tránsito mediante TLS 1.2 o superior (HTTPS en todo el Sitio).</li>
              <li>Cifrado de datos en reposo en los sistemas de almacenamiento utilizados.</li>
              <li>Acceso restringido a los datos, aplicando el principio de mínimo privilegio.</li>
              <li>Uso de proveedores de infraestructura certificados (Vercel, con certificaciones SOC 2 Tipo II).</li>
              <li>Monitoreo continuo de accesos y registro de logs de seguridad.</li>
              <li>Actualizaciones periódicas de software y parches de seguridad.</li>
            </ul>

            <h3 className="text-sm font-semibold text-starkio-cloud/90 mb-2">
              8.2 Medidas organizativas
            </h3>
            <ul className="list-disc list-inside space-y-1.5 mb-3">
              <li>Política interna de manejo de datos personales para el personal de Starkio.</li>
              <li>Evaluaciones periódicas de riesgos y auditorías de seguridad.</li>
              <li>Contratos de encargado del tratamiento con todos los proveedores que acceden a datos personales.</li>
              <li>Procedimiento de notificación de brechas de seguridad en un plazo no superior a 72 horas desde su detección.</li>
            </ul>
            <p>
              En caso de producirse una brecha de seguridad que afecte a los
              datos personales de los usuarios, Starkio notificará a los
              titulares afectados en el menor tiempo posible, conforme a las
              obligaciones establecidas por la legislación aplicable.
            </p>
          </section>

          <section id="s9">
            <h2 className="text-lg font-semibold text-starkio-cloud mb-3">
              9. Menores de edad
            </h2>
            <p className="mb-3">
              El Sitio no está dirigido a menores de 14 años y Starkio no
              recopila conscientemente datos personales de menores de dicha
              edad sin el consentimiento expreso de sus padres, madres o
              tutores legales. Si Starkio detecta que ha recopilado datos de
              un menor sin el consentimiento correspondiente, procederá a su
              eliminación inmediata.
            </p>
            <p>
              Los usuarios entre 14 y 18 años podrán utilizar el Sitio con el
              conocimiento y, cuando proceda, la asistencia de sus
              representantes legales.
            </p>
          </section>

          <section id="s10">
            <h2 className="text-lg font-semibold text-starkio-cloud mb-3">
              10. Consentimiento y revocación
            </h2>
            <p className="mb-2">
              El consentimiento para el tratamiento de datos basado en cookies
              no esenciales se obtiene a través del banner de cookies que
              aparece al momento de la primera visita al Sitio. Este
              consentimiento:
            </p>
            <ul className="list-disc list-inside space-y-1.5 mb-3">
              <li>Es libre, específico, informado e inequívoco.</li>
              <li>Se obtiene mediante una acción afirmativa clara (no mediante casillas pre-marcadas ni por el simple hecho de navegar).</li>
              <li>Puede retirarse en cualquier momento, accediendo al panel de preferencias de cookies del Sitio.</li>
              <li>Es granular: el usuario puede aceptar o rechazar cada categoría de cookies de forma independiente.</li>
            </ul>
            <p>
              El rechazo de cookies no esenciales no impedirá el acceso al
              contenido del Sitio, aunque puede afectar algunas
              funcionalidades opcionales.
            </p>
          </section>

          <section id="s11">
            <h2 className="text-lg font-semibold text-starkio-cloud mb-3">
              11. Modificaciones a esta política
            </h2>
            <p className="mb-2">
              Starkio se reserva el derecho a modificar la presente Política
              en cualquier momento para adaptarla a cambios legislativos,
              jurisprudenciales, o de las prácticas del sector. Las
              modificaciones serán notificadas al usuario mediante:
            </p>
            <ul className="list-disc list-inside space-y-1.5 mb-3">
              <li>Publicación de la nueva versión en el Sitio, indicando la fecha de actualización y el número de versión.</li>
              <li>Aviso visible en el banner de cookies cuando los cambios afecten materialmente al tratamiento de datos.</li>
              <li>Comunicación por correo electrónico a los usuarios afectados por los cambios.</li>
            </ul>
            <p>
              Se recomienda revisar periódicamente esta Política. El uso
              continuado del Sitio tras la publicación de cambios implica la
              aceptación de la Política actualizada.
            </p>
          </section>

          <section id="s12">
            <h2 className="text-lg font-semibold text-starkio-cloud mb-3">
              12. Encargados del tratamiento (subprocesadores)
            </h2>
            <p className="mb-4">
              Starkio puede compartir datos personales con terceros que
              actúan como encargados del tratamiento, únicamente para las
              finalidades descritas en esta Política y bajo las debidas
              garantías contractuales:
            </p>
            <div className="overflow-x-auto border border-white/10 rounded-xl mb-4">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-starkio-cloud/40">
                    <th className="px-4 py-3 font-medium">Proveedor</th>
                    <th className="px-4 py-3 font-medium">Finalidad</th>
                    <th className="px-4 py-3 font-medium">País</th>
                    <th className="px-4 py-3 font-medium">Garantías</th>
                  </tr>
                </thead>
                <tbody>
                  {subprocessors.map((row) => (
                    <tr key={row.name} className="border-b border-white/5 last:border-0">
                      <td className="px-4 py-3 whitespace-nowrap">{row.name}</td>
                      <td className="px-4 py-3">{row.purpose}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{row.country}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{row.guarantee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Starkio no vende, alquila ni cede datos personales a terceros
              con fines comerciales propios de éstos.
            </p>
          </section>

          <section id="s13">
            <h2 className="text-lg font-semibold text-starkio-cloud mb-3">
              13. Marco legal aplicable
            </h2>
            <p className="mb-2">
              La presente Política se rige por la legislación chilena, en
              particular:
            </p>
            <ul className="list-disc list-inside space-y-1.5 mb-3">
              <li>Ley N° 19.628 sobre Protección de la Vida Privada (y sus modificaciones).</li>
              <li>Ley N° 21.719 que moderniza la normativa de datos personales en Chile.</li>
              <li>Ley N° 19.223 relativa a delitos informáticos.</li>
              <li>Ley N° 20.285 sobre Acceso a la Información Pública (en lo que corresponda).</li>
            </ul>
            <p>
              Para aspectos no regulados por la legislación chilena o cuando
              los tratamientos afecten a usuarios en la Unión Europea, Starkio
              toma como referencia el Reglamento General de Protección de
              Datos (RGPD/GDPR), sin que ello implique una sujeción formal a
              dicho Reglamento.
            </p>
          </section>

          <section id="s14">
            <h2 className="text-lg font-semibold text-starkio-cloud mb-4">
              14. Contacto y Encargado de Protección de Datos
            </h2>
            <div className="overflow-x-auto border border-white/10 rounded-xl mb-4">
              <table className="w-full text-left text-xs">
                <tbody>
                  {[
                    ["Nombre", "Ernesto Arturo Starck Hernández"],
                    ["Cargo", "Encargado de Protección de Datos (DPO)"],
                    ["Email", "privacidad@starkio.io"],
                    ["Dirección", "Santiago, Región Metropolitana, Chile"],
                    ["Horario de atención", "Lunes a viernes, 9:00 a 18:00 hrs. (hora de Chile)"],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-b border-white/5 last:border-0">
                      <td className="px-4 py-3 text-starkio-cloud/40 font-medium whitespace-nowrap">{label}</td>
                      <td className="px-4 py-3 text-starkio-cloud/70">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Nos comprometemos a responder a todas las solicitudes dentro de
              los plazos legalmente establecidos y con la diligencia que
              merece la protección de sus datos personales.
            </p>
          </section>

          <p className="text-xs text-starkio-cloud/30 pt-6 border-t border-white/5">
            Starkio Labs SpA — Santiago de Chile, 15 de septiembre de 2026.
            Versión 1.0 · starkio.io/privacidad
          </p>
        </div>
      </div>
    </main>
  );
}
