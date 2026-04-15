import { posts } from "@/data/posts";
import ProductCard from "@/components/ProductCard";

export default function BlogPost({ params }: any) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return <div>Post not found</div>;

  return (
    <article className="py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">{post.title}</h1>

      <p className="mt-6 text-gray-700 whitespace-pre-line">
        {post.content}
      </p>

      {/* Affiliate section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Recommended Product
        </h2>

        <ProductCard
          name="Solar Power Bank 26800mAh"
          description="Reliable eco-friendly charger for outdoor use."
          link="https://your-affiliate-link.com"
        />
      </div>
    </article>
  );
}
