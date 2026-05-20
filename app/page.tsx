import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 max-w-xl mx-auto text-neutral-900 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-2">TinaCMS Smoke Test</h1>
      <p className="text-neutral-600 mb-6">
        If you see this page, the root static server is running correctly.
      </p>
      
      <Link 
        href="/sandbox/hello-world/" 
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition"
      >
        Go to Sandbox Test Page →
      </Link>
    </main>
  );
}