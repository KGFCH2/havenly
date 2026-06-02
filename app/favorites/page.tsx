import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function FavoritesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-bold">Favorites</h1>

        <p className="mt-4 text-muted-foreground">
          Your saved homes and experiences will appear here.
        </p>
      </section>

      <Footer />
    </main>
  );
}