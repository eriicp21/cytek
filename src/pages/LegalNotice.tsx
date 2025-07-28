import { useSEO } from "@/hooks/useSEO";

const LegalNotice = () => {
  useSEO({
    title: "Aviso Legal - Cytek",
    description: "Aviso legal de Cytek. Información sobre términos de uso, responsabilidades y condiciones legales."
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/95 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-card rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-foreground mb-8">Aviso Legal</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Datos de la Empresa</h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-2">
                <p><span className="font-medium text-foreground">Razón Social:</span> Cytek</p>
                <p><span className="font-medium text-foreground">Email:</span> contacto@cytek.es</p>
                <p><span className="font-medium text-foreground">Teléfono:</span> +34 633 145 270</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Objeto y Alcance</h2>
              <p className="mb-4">
                El presente aviso legal regula el uso del sitio web www.cytek.es, propiedad de 
                Cytek Consultoría Tecnológica S.L. El acceso y uso de este sitio web implica 
                la aceptación plena de las condiciones establecidas en este aviso legal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Condiciones de Uso</h2>
              <div className="space-y-4">
                <p>El usuario se compromete a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Hacer un uso correcto del sitio web</li>
                  <li>No utilizar el sitio para actividades ilícitas o contrarias a la moral</li>
                  <li>No dañar, inutilizar o sobrecargar el sitio web</li>
                  <li>No introducir virus o códigos maliciosos</li>
                  <li>Respetar los derechos de propiedad intelectual</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Propiedad Intelectual</h2>
              <p className="mb-4">
                Todos los contenidos del sitio web, incluyendo textos, imágenes, diseños, logotipos, 
                código fuente y cualquier otro material, están protegidos por derechos de propiedad 
                intelectual e industrial de Cytek o de terceros que han autorizado su uso.
              </p>
              <p>
                Queda prohibida la reproducción, distribución, comunicación pública o transformación 
                de dichos contenidos sin autorización expresa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Exclusión de Responsabilidades</h2>
              <div className="space-y-4">
                <p>Cytek no se hace responsable de:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>La continuidad y disponibilidad del sitio web</li>
                  <li>Los daños ocasionados por fallos técnicos o interrupciones del servicio</li>
                  <li>El uso que los usuarios hagan del sitio web</li>
                  <li>Los contenidos de sitios web de terceros enlazados</li>
                  <li>La presencia de virus u otros elementos dañinos</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Enlaces Externos</h2>
              <p className="mb-4">
                El sitio web puede contener enlaces a sitios web de terceros. Cytek no controla 
                ni se hace responsable del contenido de dichos sitios web externos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Protección de Datos</h2>
              <p className="mb-4">
                El tratamiento de datos personales se rige por nuestra Política de Privacidad, 
                que cumple con el Reglamento General de Protección de Datos (RGPD) y la 
                Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Modificaciones</h2>
              <p className="mb-4">
                Cytek se reserva el derecho de modificar el presente aviso legal sin previo aviso. 
                Las modificaciones entrarán en vigor desde su publicación en el sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Legislación Aplicable</h2>
              <p className="mb-4">
                Este aviso legal se rige por la legislación española. Para cualquier controversia 
                que pudiera derivarse del acceso o uso del sitio web, las partes se someten a 
                los Juzgados y Tribunales de Madrid.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contacto</h2>
              <p className="mb-4">
                Para cualquier consulta relacionada con este aviso legal, puede contactar con nosotros:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-medium">Email: contacto@cytek.es</p>
                <p className="font-medium">Teléfono: +34 633 145 270</p>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Última actualización: {new Date().toLocaleDateString('es-ES')}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;