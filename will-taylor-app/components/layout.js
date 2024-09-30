
import Link from 'next/link';

export default function Layout( { children, home } ) {
    return (
        <div>
          <header>
              <h1>Basic Next.js App from Will connecting to firebase!</h1>
              <p>Here I am playing!</p>
          </header>
          <main>
            {children}
          </main>
          {!home && (
              <Link href="/" className="btn btn-primary mt-3">
                ← Back to home
              </Link>
            )
          }
          <footer>
            <p>The footer</p>
          </footer>
        </div>
      );
}