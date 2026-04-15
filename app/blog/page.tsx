import Link from "next/link";
import { posts } from "@/data/posts";

export default function BlogPage() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold mb-6">Latest Reviews</h1>

      <div className="grid gap-6">
        {posts.map((post) => (
          <div key={post.slug} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>

            <Link
              href={`/blog/${post.slug}`}
              className="text-green-600 mt-3 inline-block"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
