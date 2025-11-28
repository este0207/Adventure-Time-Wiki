import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function BrawlerInfoPage({ params }: Props) {
  const { id } = await params;

  const res = await fetch(`https://api.brawlify.com/v1/brawlers/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.BRAWL_API_KEY}`,
    },
    cache: "no-store",
  });

  if (!res.ok) return notFound();

  const brawler = await res.json();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md mt-8 flex flex-col ">
      {/* Titre */}
      <h1 className="text-4xl font-bold mb-4 border-b pb-2">{brawler.name}</h1>

      {/* Image */}
      <div className="flex justify-center mb-6">
        <img
          src={brawler.imageUrl}
          alt={brawler.name}
          className="w-48 h-48 object-contain"
        />
      </div>

      {/* Informations générales */}
      <table className="w-full mb-6 border border-gray-300">
        <tbody>
          <tr className="border-b border-gray-300">
            <th className="text-left p-2 bg-gray-100 w-1/3">Classe</th>
            <td className="p-2">{brawler.class.name}</td>
          </tr>
          <tr className="border-b border-gray-300">
            <th className="text-left p-2 bg-gray-100">Rareté</th>
            <td className="p-2">{brawler.rarity.name}</td>
          </tr>
          <tr className="border-b border-gray-300">
            <th className="text-left p-2 bg-gray-100">Description</th>
            <td className="p-2">{brawler.description}</td>
          </tr>
        </tbody>
      </table>

      {/* Star Powers */}
      <h2 className="text-2xl font-semibold mb-2 border-b pb-1">Star Powers</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
        {brawler.starPowers.map((sp: any) => (
          <div key={sp.id} className="text-center p-2 border border-gray-300 rounded-md bg-gray-50">
            <img src={sp.imageUrl} alt={sp.name} className="w-16 h-16 mx-auto mb-1" />
            <p className="font-medium">{sp.name}</p>
            <p className="text-sm">{sp.description}</p>
          </div>
        ))}
      </div>

      {/* Gadgets */}
      <h2 className="text-2xl font-semibold mb-2 border-b pb-1">Gadgets</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
        {brawler.gadgets.map((g: any) => (
          <div key={g.id} className="text-center p-2 border border-gray-300 rounded-md bg-gray-50">
            <img src={g.imageUrl} alt={g.name} className="w-16 h-16 mx-auto mb-1" />
            <p className="font-medium">{g.name}</p>
            <p className="text-sm">{g.description}</p>
          </div>
        ))}
      </div>

      {/* Retour à la liste */}
      <div className="mt-6">
        <a href="/characters" className="text-blue-600 hover:underline">
          ← Retour à la liste des Brawlers
        </a>
      </div>
    </div>
  );
}
