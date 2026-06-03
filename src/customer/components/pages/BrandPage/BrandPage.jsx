import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const toTitleCase = (slug) =>
  slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

const BrandPage = () => {
  const { brandSlug } = useParams();
  const brandName = toTitleCase(brandSlug || "brand");

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-indigo-600 py-20 px-6 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-200 mb-2">
          Brand
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{brandName}</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
          Discover the full collection from {brandName} — curated style for every occasion.
        </p>
      </section>

      {/* Coming soon */}
      <section className="flex flex-col items-center justify-center py-24 px-6 text-center">
        <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-12 py-16 max-w-lg w-full">
          <p className="text-xl font-semibold text-gray-700">
            {brandName} products coming soon
          </p>
          <p className="mt-3 text-sm text-gray-500">
            We&rsquo;re adding the full {brandName} catalogue. Check back shortly or
            browse our other collections in the meantime.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BrandPage;
