export default function Footer() {
  return (
    <footer className="mt-16 border-t pt-6 text-sm text-gray-500">
      <p>
        © {new Date().getFullYear()} EcoTech Reviews Europe
      </p>
      <p className="mt-2">
        This site contains affiliate links. We may earn a commission at no extra cost to you.
      </p>
    </footer>
  );
}
