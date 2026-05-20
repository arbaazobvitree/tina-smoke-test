import { client } from "@/tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";

// 1. Test Static Generation Paths
export async function generateStaticParams() {
  const connection = await client.queries.sandboxConnection();
  
  // Explicitly type 'e' or let TypeScript infer it by casting the array map
  return connection.data.sandboxConnection.edges?.map((e: any) => ({
    slug: e?.node?._sys.filename,
  })) || [];
}

// 2. Test Dynamic Page Fetching (Updated for Next.js 15 Promise resolution)
export default async function SandboxPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Must await params in modern Next.js
  
  const result = await client.queries.sandbox({
    relativePath: `${slug}.mdx`,
  });

  const { title, testImage, body } = result.data.sandbox;

  return (
    <main className="p-8 max-w-xl mx-auto bg-neutral-50 text-neutral-900">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      
      {/* Test Cloudinary Raw Rendering */}
      {testImage && (
        <img src={testImage} alt={title} className="w-full h-64 object-cover my-4" />
      )}
      
      <div className="prose">
        <TinaMarkdown content={body} />
      </div>
    </main>
  );
}