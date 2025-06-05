import { checkUser } from '@/lib/checkUser';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import Link from 'next/link';

export default async function Navbar() {
  const user = await checkUser();
  console.log('Current User:', user);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
                SleepTracker
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-purple-600 text-sm sm:text-base font-medium px-2 sm:px-3 py-1 sm:py-2 transition"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-gray-700 hover:text-purple-600 text-sm sm:text-base font-medium px-2 sm:px-3 py-1 sm:py-2 transition"
            >
              About
            </Link>

            {/* Auth Buttons */}
            <SignedOut>
              <SignInButton>
                <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-sm sm:text-base transition">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <div className="ml-2">
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
