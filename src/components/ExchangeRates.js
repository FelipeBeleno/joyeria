// This is a Server Component, meaning it will fetch data on the server,
// improving SEO and initial load time.

async function getExchangeRates() {
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/USD', {
      next: { revalidate: 3600 } 
    });
    
    if (!res.ok) throw new Error('Failed to fetch rates');

    const data = await res.json();
    const usdToCop = data.rates.COP;
    const usdToEur = data.rates.EUR;
    const eurToCop = usdToCop / usdToEur;

    return {
      usdToCop: new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(usdToCop),
      eurToCop: new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(eurToCop),
    };
  } catch (error) {
    console.error("Error fetching rates:", error);
    return null;
  }
}

export default async function ExchangeRates() {
  const rates = await getExchangeRates();

  return (
    <div className="rates-glass-widget">
      <div className="rate-box">
        <span className="rate-label">Dólar (USD)</span>
        {rates ? (
          <span className="rate-value">{rates.usdToCop}</span>
        ) : (
          <span className="rate-value text-secondary" style={{ fontSize: '1.5rem'}}>No disponible</span>
        )}
      </div>
      
      <div className="rate-divider"></div>

      <div className="rate-box">
        <span className="rate-label">Euro (EUR)</span>
        {rates ? (
          <span className="rate-value">{rates.eurToCop}</span>
        ) : (
          <span className="rate-value text-secondary" style={{ fontSize: '1.5rem'}}>No disponible</span>
        )}
      </div>
    </div>
  );
}
