import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
// import SignOutButton from "@/components/SignOutButton";
import Link from "next/link";
// import Header from "@/components/Header";

export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Remove Header instance */}
      {/* 
      <Header /> 
      */}
      {/* Remove the outer padding div, apply padding directly to content sections */}
      {/* <div className="p-12 md:p-24 w-full flex flex-col items-center"> */}

      {/* Center this specific section and add top padding */}
      <div className="relative flex place-items-center pt-12 md:pt-24 before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="text-4xl font-bold">Poker Management Dashboard</h1>
      </div>

      {/* Center this section and add padding */}
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left p-12 md:p-24 self-center">
        <Link
          href="/players"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Players{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Manage your list of players.
          </p>
        </Link>

        <Link
          href="/events"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Events{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            View past poker events and create new ones.
          </p>
        </Link>
      </div>
      {/* </div> Close the removed outer padding div */}
    </main>
  );
}
