import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-4/5 mx-auto text-center my-8">
      <header>
        <h1 className="text-6xl font-semibold font-sans">
          <Link href="/">
            <a className="text-black hover:text-gray-600">RPG da Discórdia</a>
          </Link>
        </h1>

        <nav className="my-6 text-2xl">
          <ul className="flex flex-row justify-center space-x-4">
            <li>
              <Link href="/starwars">
                <a>Star Wars</a>
              </Link>
            </li>

            <li>
              <Link href="/quest">
                <a>Quest</a>
              </Link>
            </li>

            <li>
              <Link href="/witcher">
                <a>Witcher</a>
              </Link>
            </li>

            <li>
              <Link href="/dnd">
                <a>D&D</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
