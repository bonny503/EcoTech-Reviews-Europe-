export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 border-b">
      <h1 className="text-xl font-bold text-green-600">
        EcoTech Reviews
      </h1>
      <div className="space-x-6">
        <a href="/" className="hover:text-green-600">Home</a>
        <a href="/blog" className="hover:text-green-600">Blog</a>
      </div>
    </nav>
  );
}
