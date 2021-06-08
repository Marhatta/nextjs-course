import Link from 'next/link';
function ClientsPage() {
  return (
    <div>
      <h1>All clients</h1>
      <ul>
        <li>
          <Link href="/clients/eternus">Eternus</Link>
        </li>
        <li>
          <Link href="/clients/accenture">Accenture</Link>
        </li>
      </ul>
    </div>
  );
}

export default ClientsPage;
