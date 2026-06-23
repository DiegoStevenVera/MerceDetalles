import { useEffect, useMemo, useState } from "react";
import {
  addOns,
  addonDiscounts,
  brand,
  categories,
  gallery,
  packages,
  services
} from "./data";

const assetBase = import.meta.env.BASE_URL;

const navItems = [
  ["Catalogo", "#catalogo"],
  ["Especialidades", "#servicios"],
  ["Paquetes", "#paquetes"],
  ["Contacto", "#contacto"]
];

const specialtyStyles = ["rose", "gold", "sage", "blush", "pearl", "petal"];

function whatsappUrl(message = brand.whatsappMessage) {
  return `https://wa.me/${brand.phone}?text=${encodeURIComponent(message)}`;
}

function bestDiscount(count) {
  return addonDiscounts
    .filter((rule) => count >= rule.minItems)
    .sort((a, b) => b.discount - a.discount)[0];
}

function useScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-reveal");

    const elements = [...document.querySelectorAll("[data-reveal]")];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { rootMargin: "0px 0px -14% 0px", threshold: 0.16 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove("js-reveal");
    };
  }, []);
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#inicio">
        Saltar al contenido
      </a>
      <nav className="nav shell" aria-label="Navegacion principal">
        <a className="brand-lockup" href="#inicio" aria-label="Inicio Mercedetalles">
          <img src={`${assetBase}assets/img/logo-mercedetalles.png`} alt="" />
          <span>Mercedetalles</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-controls="site-menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
          <span className="sr-only">Abrir menu</span>
        </button>

        <div className={`nav-links ${open ? "is-open" : ""}`} id="site-menu">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-quote" href={whatsappUrl()} target="_blank" rel="noreferrer">
            Cotizar
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="screen hero" id="inicio">
      <div className="shell hero-layout">
        <div className="hero-copy motion-rise" data-reveal="up">
          <p className="hero-kicker">Decoraciones en Lima con detalles hechos con carino</p>
          <h1>Creamos momentos bonitos para celebrar contigo.</h1>
          <p>
            Preparamos decoraciones, tortas, bocaditos, recuerdos y detalles especiales para que
            tu fiesta se vea tal como la imaginaste.
          </p>
          <div className="action-row">
            <a className="button button-primary" href={whatsappUrl()} target="_blank" rel="noreferrer">
              Cotizar por WhatsApp
            </a>
            <a className="button button-ghost" href="#catalogo">
              Ver trabajos
            </a>
          </div>
        </div>

        <div className="hero-photos motion-rise" data-reveal="right" aria-label="Decoraciones destacadas">
          <img
            className="hero-photo hero-photo-main"
            src={`${assetBase}assets/img/gallery/kichi-kids-web.jpg`}
            alt="Decoracion infantil con arco de globos pastel y mesa tematica"
            width="1200"
            height="1600"
            fetchPriority="high"
          />
          <img
            className="hero-photo hero-photo-overlap"
            src={`${assetBase}assets/img/gallery/sirena-zoe-01-web.jpg`}
            alt="Decoracion de sirena con globos y luces"
            width="1600"
            height="1200"
          />
          <div className="detail-note">
            <span>Hecho con detalle</span>
            <strong>para cada celebracion</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="screen story-screen" aria-label="Presentacion">
      <div className="shell story-layout" data-reveal="up">
        <div className="story-card">
          <span>Mercedetalles</span>
          <h2>Tu idea, nuestra mesa bonita.</h2>
        </div>
        <div className="story-copy">
          <p>
            Nos cuentas la tematica, el espacio y lo que quieres incluir. Te ayudamos a ordenar
            opciones para que la decoracion, la torta, los bocaditos y los recuerdos se sientan
            parte de la misma celebracion.
          </p>
          <a href={whatsappUrl("Hola Mercedetalles, quisiera contarles mi idea de evento.")}>
            Contar mi idea
          </a>
        </div>
      </div>
    </section>
  );
}

function Catalog() {
  const [active, setActive] = useState("Todos");
  const visibleGallery = useMemo(
    () => (active === "Todos" ? gallery : gallery.filter((item) => item.category === active)),
    [active]
  );

  return (
    <section className="screen catalog-screen" id="catalogo">
      <div className="shell section-layout">
        <div className="section-intro" data-reveal="left">
          <span className="soft-label">Catalogo de trabajos</span>
          <h2>Ideas reales para imaginar tu proxima fiesta.</h2>
          <p>
            Revisa decoraciones anteriores y filtra por celebracion. Para agregar fotos nuevas,
            edita el arreglo <code>gallery</code> en <code>src/data.js</code>.
          </p>
          <div className="filter-row" aria-label="Filtros del catalogo">
            {categories.map((category) => (
              <button
                className={active === category ? "is-active" : ""}
                key={category}
                type="button"
                aria-pressed={active === category}
                onClick={() => setActive(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="catalog-mosaic" data-reveal="right">
          {visibleGallery.map((item, index) => (
            <article className={index === 0 ? "work-card is-large" : "work-card"} key={item.title}>
              <img
                src={item.image}
                alt={item.title}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                width="1600"
                height="1200"
              />
              <div>
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="screen services-screen" id="servicios">
      <div className="shell service-layout">
        <div className="section-intro" data-reveal="left">
          <span className="soft-label">Nuestras especialidades</span>
          <h2>Detalles que hacen que la fiesta se sienta completa.</h2>
          <p>
            Puedes pedir solo decoracion o sumar los detalles que hacen que la fiesta se sienta
            mas completa.
          </p>
        </div>
        <div className="service-board">
          {services.map((service, index) => (
            <article
              className={`service-item specialty-${specialtyStyles[index % specialtyStyles.length]}`}
              key={service.title}
              data-reveal="up"
              style={{ "--delay": `${index * 70}ms` }}
            >
              <img
                className="service-item-media"
                src={service.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                width="1600"
                height="1200"
              />
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Packages() {
  const [selected, setSelected] = useState([]);
  const discount = bestDiscount(selected.length);
  const selectedNames = selected.map((index) => addOns[index].name).join(", ");
  const quoteMessage = selected.length
    ? `Hola Mercedetalles, quisiera cotizar una decoracion con estos adicionales: ${selectedNames}.`
    : brand.whatsappMessage;

  function toggleAddon(index) {
    setSelected((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index]
    );
  }

  return (
    <section className="screen packages-screen" id="paquetes">
      <div className="shell package-layout">
        <div className="section-intro package-intro" data-reveal="up">
          <span className="soft-label">Paquetes editables</span>
          <h2>Empieza con una decoracion y suma lo que necesitas.</h2>
          <p>
            Los precios quedan listos para actualizarse en <code>src/data.js</code>. Mientras mas
            adicionales sumes, mayor descuento reciben esos adicionales.
          </p>
        </div>

        <div className="package-grid" data-reveal="up">
          {packages.map((item) => (
            <article className={`package-card ${item.featured ? "featured" : ""}`} key={item.name}>
              <span className="package-size">{item.size}</span>
              {item.featured ? <span className="package-badge">Mas pedido</span> : null}
              <h3>{item.name}</h3>
              <strong>{item.price ?? item.priceLabel}</strong>
              <p>{item.description}</p>
              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="quote-builder" data-reveal="up">
          <div>
            <span className="soft-label">Arma tu idea</span>
            <h3>Adicionales para cotizar mas rapido</h3>
          </div>
          <div className="addon-grid">
            {addOns.map((addon, index) => (
              <label className="addon" key={addon.name}>
                <input
                  type="checkbox"
                  checked={selected.includes(index)}
                  onChange={() => toggleAddon(index)}
                />
                <span>
                  <strong>{addon.name}</strong>
                  <small>{addon.price ?? addon.priceLabel}</small>
                </span>
              </label>
            ))}
          </div>
          <div className="quote-total">
            <span>{selected.length} seleccionados</span>
            <strong>{discount ? discount.label : "Listo para cotizar"}</strong>
            <a className="button button-primary" href={whatsappUrl(quoteMessage)} target="_blank" rel="noreferrer">
              Enviar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="screen contact-screen" id="contacto">
      <div className="shell contact-layout" data-reveal="up">
        <div>
          <span className="soft-label">Cotiza tu evento</span>
          <h2>Cuentanos que quieres celebrar.</h2>
          <p>
            Escribenos con la fecha, distrito, cantidad aproximada de invitados y tematica. Te
            ayudamos a elegir una opcion bonita y posible para tu espacio.
          </p>
        </div>
        <div className="contact-panel">
          <a className="button button-primary" href={whatsappUrl()} target="_blank" rel="noreferrer">
            Escribir por WhatsApp
          </a>
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
          <a href={brand.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <span>{brand.city}</span>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <Catalog />
        <Services />
        <Packages />
        <Contact />
      </main>
      <footer className="footer shell">
        <span>Mercedetalles</span>
        <span>Decoraciones, tortas, bocaditos y mas en Lima.</span>
      </footer>
    </>
  );
}
