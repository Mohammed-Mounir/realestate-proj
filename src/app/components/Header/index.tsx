import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header({
  breadcrumbs = [],
}: {
  breadcrumbs?: { href: string; label: string }[];
}) {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-4 sm:mx-6 lg:mx-8 mt-4">
        <div className="bg-black/80 backdrop-blur-sm rounded-lg shadow-lg">
          <div className="flex items-center space-x-2 h-14 px-4">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              <Image
                src="/images/logo.webp"
                alt="Logo"
                height={0}
                width={150}
                style={{ height: '30px', width: 'auto' }}
              />
            </Link>
            {breadcrumbs.map((item, index) => (
              <div key={item.href} className="flex items-center">
                <ChevronRight className="w-5 h-5 text-gray-400" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="ml-2 text-white font-medium">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="ml-2 text-gray-500 hover:text-gray-700 font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
