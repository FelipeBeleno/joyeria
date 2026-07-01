import { Suspense } from 'react';
import ExchangeRates from '@/components/ExchangeRates';
import Image from 'next/image';

export default function Home() {
  const whatsappNumber = "573143223129";
  const whatsappMessage = encodeURIComponent("Hola, me gustaría recibir información sobre la compra/venta de oro y plata.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-layout">
        <div className="hero-text-side">
          <h1 className="title-massive">
            Compra y Venta de <br />
            <span className="text-gold-highlight">Oro y Plata</span> <br />
            en Bogotá
          </h1>
          <p className="hero-description">
            Ofrecemos la tasa más competitiva del mercado con pago inmediato y absoluta discreción.
            Valoramos sus joyas, monedas y lingotes con la máxima precisión y transparencia.
          </p>
          
          <div className="action-buttons">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-luxury">
              Cotizar ahora
            </a>
            <a href="#contacto" className="btn-ghost">
              Ubicación
            </a>
          </div>

          <Suspense fallback={<div className="rates-glass-widget" style={{ minHeight: '100px', display: 'flex', justifyContent: 'center' }}><span className="rate-value" style={{ fontSize: '1.2rem' }}>Obteniendo tasas en vivo...</span></div>}>
            <ExchangeRates />
          </Suspense>
        </div>
        
        <div className="hero-image-side">
          <Image 
            src="/hero-bg.png" 
            alt="Lingotes de Oro y Monedas de Plata" 
            fill
            priority
            fetchPriority="high"
            quality={60}
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 992px) 100vw, 50vw"
          />
          <div className="hero-image-overlay"></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">El Estándar de la Excelencia</h2>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">⚖️</div>
              <h3>Tasas Competitivas</h3>
              <p>Monitoreamos los mercados internacionales al segundo para garantizarle la máxima rentabilidad en cada transacción.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h3>Máxima Privacidad</h3>
              <p>Operamos bajo estrictos estándares de confidencialidad en un entorno seguro y exclusivo para nuestros clientes.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Liquidez Inmediata</h3>
              <p>Procesos ágiles de tasación y desembolso al instante, adaptándonos a sus necesidades financieras con prontitud.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="contact-section section-padding">
        <div className="container">
          <h2 className="section-title">Visítenos en Bogotá</h2>
          
          <div className="contact-layout">
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Sede Principal</h3>
                  <p>Av. Cra. 91 #136-12<br/>Suba, Bogotá, Colombia</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h3>Contacto Directo</h3>
                  <a href="tel:+573143223129">+57 314 322 3129</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">💬</div>
                <div>
                  <h3>Atención Inmediata</h3>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-primary)' }}>
                    Escríbanos por WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <div className="map-wrapper" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--bg-primary)', padding: '3rem', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🗺️</div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-montserrat)' }}>Llega sin complicaciones</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>Abre la ubicación exacta en tu aplicación de mapas favorita.</p>
              <a 
                href="https://maps.google.com/maps?q=Av.+Cra.+91+%23136-12,+Suba,+Bogot%C3%A1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-ghost"
              >
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Compra y Venta de Oro y Plata Bogotá. Excelencia y Confianza.</p>
        </div>
      </footer>
    </main>
  );
}
