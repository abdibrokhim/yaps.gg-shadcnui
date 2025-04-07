import { WRAPPEDS } from "../data"
import { notFound } from "next/navigation"
import WrappedClient from "./WrappedClient"

// Define params as a Promise that resolves to { slug: string }
export default async function ThingPage({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
  // Await the params promise to get the actual params object
  const params = await paramsPromise;
  
  // Find thing by slug using a synchronous callback
  const wrapped = WRAPPEDS.find(
    (wrapped) => wrapped.uid === params.slug
  );
  
  if (!wrapped) {
    notFound();
  }
  
  return <WrappedClient wrapped={wrapped} />;
}