import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[720px] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#4cd7f6]">404</p>
      <h1 className="mt-3 text-4xl font-black tracking-normal text-white">Page not found</h1>
      <p className="mt-3 text-[#c2c6d6]">
        The page you are looking for may have moved or is not available.
      </p>
      <Link
        className="mt-6 rounded-md bg-[#adc6ff] px-5 py-3 text-sm font-black text-[#00285d] transition hover:bg-white"
        href="/"
      >
        Back home
      </Link>
    </section>
  );
}
