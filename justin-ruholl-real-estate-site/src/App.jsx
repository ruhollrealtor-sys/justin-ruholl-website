import React from 'react';

export default function App() {
  const sold = [
    { address: "1203 W Temple Ave, Effingham, IL", price: "$225,500", date: "09/05/2025", beds: 3, baths: 3, sqft: 1500, role: "Listing Agent" },
    { address: "1009 N Henrietta St, Effingham, IL", price: "$205,000", date: "08/08/2025", beds: 3, baths: 2, sqft: 1345, role: "Dual Agent" },
    { address: "510 W Clinton Ave, Effingham, IL", price: "$176,900", date: "04/04/2025", beds: 2, baths: 1, sqft: 1308, role: "Buyer's Agent" },
    { address: "1022 Penguin St, Effingham, IL", price: "$289,900", date: "07/07/2025", beds: 3, baths: 2, sqft: 1800, role: "Buyer's Agent" },
    { address: "1009 E Grove Ave, Effingham, IL", price: "$190,000", date: "07/08/2025", beds: 3, baths: 2, sqft: 1685, role: "Buyer's Agent" },
    { address: "907 Flame Ave, Effingham, IL", price: "$202,000", date: "09/19/2025", beds: 3, baths: 2, sqft: 1432, role: "Listing Agent" },
  ];

  const pending = [
    { address: "1010 E Grove Ave, Effingham, IL", price: "Pending", role: "Dual Agent" },
    { address: "916 Piatt Ave, Mattoon, IL", price: "Pending", role: "Buyer's Agent" }
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1>Justin Ruholl</h1>
          <p>RE/MAX Key Advantage • Effingham, IL</p>
        </div>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <a href="#sold">Sold</a>
          <a href="#pending">Pending</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="sold">
        <h2>Recently Sold</h2>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {sold.map((p, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #ddd', borderRadius: '12px', padding: '1rem' }}>
              <h3>{p.address}</h3>
              <p style={{ color: '#b91c1c', fontWeight: 'bold' }}>{p.price}</p>
              <p>{p.beds} bed • {p.baths} bath • {p.sqft.toLocaleString()} SF</p>
              <p style={{ fontSize: '0.8rem', color: '#666' }}>{p.role} • Sold {p.date}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pending" style={{ marginTop: '3rem' }}>
        <h2>Under Contract</h2>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {pending.map((p, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #ddd', borderRadius: '12px', padding: '1rem' }}>
              <h3>{p.address}</h3>
              <p style={{ color: '#b91c1c', fontWeight: 'bold' }}>{p.price}</p>
              <p style={{ fontSize: '0.8rem', color: '#666' }}>{p.role}</p>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #ddd', textAlign: 'center', fontSize: '0.8rem' }}>
        <p>© {new Date().getFullYear()} Justin Ruholl | RE/MAX Key Advantage | All Rights Reserved</p>
        <p>Licensed REALTOR® in the State of Illinois | License # 475.212245 | Equal Housing Opportunity</p>
      </footer>
    </div>
  );
}
