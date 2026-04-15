import Link from "next/link";

export default function Home() {
  return (
    <section className="py-12 text-center">
      <h1 className="text-4xl font-bold">
        EcoTech Reviews Europe
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        Find the best eco-friendly gadgets to save energy and money.
      </p>

      <div className="mt-8">
        <Link
          href="/blog"
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Explore Reviews
        </Link>
      </div>
    </section>
  );
}
