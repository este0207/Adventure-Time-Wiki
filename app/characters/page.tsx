import Link from "next/link";


export default async function CharactersPage() {
  const res = await fetch("https://api.brawlify.com/v1/brawlers", {
    headers: {
      Authorization: `Bearer ${process.env.BRAWL_API_KEY}`,
    },
    cache: "no-store",
  });

  const data = await res.json();
  const brawlers = data.list.reverse() || [];

  if (!brawlers || !Array.isArray(brawlers)) {
    return <div>Impossible de récupérer les brawlers.</div>;
  }

  return (
    <div className="container1 flex items-center justify-center flex-col">
      <h1 className="p-2 text-2xl text-white">Liste des Brawlers</h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {brawlers.map((brawler: any) => (
          <Link
            key={brawler.id}
            href={`/brawlerInfo/${brawler.id}`}
            className="text-white inline-block transition-transform duration-400 hover:scale-110"
          >
            <div className="card p-4 rounded-lg shadow-md flex flex-col items-center">
              <h2>{brawler.name}</h2>
              <img src={brawler.imageUrl} alt={brawler.name} width={120} height={120} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
