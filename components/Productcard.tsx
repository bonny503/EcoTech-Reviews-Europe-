type Props = {
  name: string;
  description: string;
  link: string;
};

export default function ProductCard({ name, description, link }: Props) {
  return (
    <div className="border rounded-xl p-4 shadow-sm">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600 mt-2">{description}</p>

      <a
        href={link}
        target="_blank"
        className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded"
      >
        Check Price
      </a>
    </div>
  );
}
