import { useSEO } from "@/hooks/useSEO";

const PrivacyPolicy = () => {
  useSEO({
    title: "Política de Privacidad - Cytek",
    description: "Política de privacidad y protección de datos de Cytek. Conoce cómo protegemos tu información personal."
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/95 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-card rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-foreground mb-8">Política de Privacidad</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Información General</h2>
              <p className="mb-4">
                En Cytek, nos comprometemos a proteger la privacidad de nuestros usuarios y clientes. 
                Esta política de privacidad explica cómo recopilamos, utilizamos y protegemos su información personal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Información que Recopilamos</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-foreground">Información Personal:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nombre y apellidos</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Número de teléfono</li>
                  <li>Información de la empresa</li>
                  <li>Datos de facturación</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Uso de la Información</h2>
              <p className="mb-4">Utilizamos su información personal para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proporcionar nuestros servicios de consultoría tecnológica</li>
                <li>Comunicarnos con usted sobre proyectos y servicios</li>
                <li>Procesar pagos y transacciones</li>
                <li>Enviar información relevante sobre nuestros servicios</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Protección de Datos</h2>
              <p className="mb-4">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger 
                su información personal contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Compartir Información</h2>
              <p className="mb-4">
                No vendemos, alquilamos ni compartimos su información personal con terceros, 
                excepto cuando sea necesario para proporcionar nuestros servicios o cuando 
                la ley lo requiera.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Sus Derechos</h2>
              <p className="mb-4">Tiene derecho a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acceder a su información personal</li>
                <li>Rectificar datos inexactos</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Solicitar la portabilidad de sus datos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies</h2>
              <p className="mb-4">
                Utilizamos cookies para mejorar su experiencia en nuestro sitio web. 
                Puede configurar su navegador para rechazar cookies, pero esto puede 
                afectar la funcionalidad del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contacto</h2>
              <p className="mb-4">
                Si tiene preguntas sobre esta política de privacidad o desea ejercer 
                sus derechos, puede contactarnos en:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-medium">Email: info@cytek.es</p>
                <p className="font-medium">Teléfono: +34 912 345 678</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Cambios en esta Política</h2>
              <p className="mb-4">
                Nos reservamos el derecho de actualizar esta política de privacidad. 
                Los cambios serán publicados en esta página con la fecha de la última actualización.
              </p>
              <p className="text-sm text-muted-foreground">
                Última actualización: {new Date().toLocaleDateString('es-ES')}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;