import { SectionHeading } from "./common";
import Cover from "./cover";
import Footer from "./footer";

// Custom 404 page
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Cover />
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4 mt-6">
          <SectionHeading title="404 - Page Not Found" />
          <p className="mb-3 text-gray-700 dark:text-gray-300 text-lg text-center">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="mb-3 text-gray-700 dark:text-gray-300 text-lg text-center">
            <a href="/" className="text-blue-600 underline hover:text-blue-800">
              Go back home
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
