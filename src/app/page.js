"use client";

import Image from 'next/image';
import { Gem, Scale, ShieldCheck, MapPin, Phone, Map, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const whatsappNumber = "573143223129";
  const whatsappMessage = encodeURIComponent("Hola, me gustaría recibir información sobre la compra/venta de oro y plata.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-layout">
        <motion.div
          className="hero-text-side"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-logo-925">
            <div className="logo-numbers">925</div>
            <div style={{ marginLeft: '1rem', lineHeight: 1.2, fontWeight: 'bold', fontSize: '1.2rem' }}>
              EXPERTOS <br />
              EN JOYAS <br />
              DE PLATA
            </div>
          </div>

          <h1 className="title-massive" style={{ marginTop: '2rem' }}>
            EXPERTOS EN <br />
            <span className="text-gold-highlight">JOYAS DE PLATA</span> <br />
            925
          </h1>
          <p className="hero-description" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>
            Cada momento especial <br />
            se convierte en joya, <br />
            sorprende a quienes más amas
          </p>

          <div style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            marginBottom: '3rem',
            fontWeight: 500,
            borderLeft: '3px solid #fff',
            paddingLeft: '1rem',
            lineHeight: 1.5
          }}>
            También somos especialistas en <br />
            <span style={{ color: '#fff', fontWeight: 700 }}>Compra y Venta de Oro y Plata</span>
          </div>

          <div className="action-buttons">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-luxury" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <MessageCircle size={24} />
              ¡TE ESPERAMOS!
            </a>
          </div>
        </motion.div>

        <div className="hero-image-side">
          <div className="hexagon-grid">
            <motion.div
              className="hexagon hex-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="hexagon-inner">
                <Image src="/silver-ring.png" alt="Anillo de plata" fill style={{ objectFit: 'cover' }} />
              </div>
            </motion.div>
            <motion.div
              className="hexagon hex-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="hexagon-inner">
                <Image src="/silver-necklace.png" alt="Collar de plata" fill style={{ objectFit: 'cover' }} />
              </div>
            </motion.div>
            <motion.div
              className="hexagon hex-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="hexagon-inner">
                <Image src="/silver-bracelet.png" alt="Pulsera de plata" fill style={{ objectFit: 'cover' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits / Services Section */}
      <section className="benefits-section">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Nuestros Servicios</h2>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon"><Gem size={48} strokeWidth={1.5} /></div>
              <h3>Joyería en Plata 925</h3>
              <p>Ofrecemos un amplio y hermoso catálogo de joyas en Plata 925 con diseños exclusivos, perfectos para regalar o lucir en cualquier ocasión.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon"><Scale size={48} strokeWidth={1.5} /></div>
              <h3>Compra de Oro y Plata</h3>
              <p>Compramos tus piezas de oro y plata. Realizamos una valoración justa, precisa y transparente de tus metales con pago inmediato.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon"><ShieldCheck size={48} strokeWidth={1.5} /></div>
              <h3>Garantía y Confianza</h3>
              <p>Más de 20 años de experiencia nos respaldan. Todas nuestras piezas de joyería cuentan con garantía de por vida sobre el material para tu total tranquilidad.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="contact-section section-padding">
        <div className="container">
          <h2 className="section-title">Visítenos en Bogotá</h2>

          <div className="contact-layout">
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon"><MapPin size={32} strokeWidth={1.5} color="var(--bg-primary)" /></div>
                <div>
                  <h3 style={{ margin: '0 0 0.5rem 0' }}>Sedes Suba</h3>
                  <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                    Centro Comercial Centro Suba Local L5-120<br />
                    Centro Comercial Centro Suba Local L11-012<br />
                    Cra 91#136-12 Batery
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><Phone size={32} strokeWidth={1.5} color="var(--bg-primary)" /></div>
                <div>
                  <h3 style={{ margin: '0 0 0.5rem 0' }}>Contacto Directo</h3>
                  <a href="tel:+573143223129" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>+57 314 322 3129</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><MessageCircle size={32} strokeWidth={1.5} color="var(--bg-primary)" /></div>
                <div>
                  <h3 style={{ margin: '0 0 0.5rem 0' }}>Atención Inmediata</h3>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    Escríbanos por WhatsApp
                  </a>
                </div>
              </div>


            </div>

            <div className="map-wrapper" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--bg-primary)', padding: '3rem', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}><Map size={64} strokeWidth={1} color="#fff" /></div>
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
          <p>&copy; {new Date().getFullYear()} 925 Expertos en Joyas de Plata. Garantía de por vida sobre el material.</p>
        </div>
      </footer>
    </main>
  );
}
