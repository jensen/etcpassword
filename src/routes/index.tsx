import Generator from "~/components/Generator";

export default function Index() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <h1 className="mb-6 font-extrabold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-400">
        /etc/passwd
      </h1>
      <section className="w-80 p-4 flex items-center bg-white shadow-2xl rounded-sm">
        <Generator />
      </section>
    </main>
  );
}
