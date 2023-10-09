import { getPages } from "@/sanity/sanity-utils";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import type { Page } from "@/types/Page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Awesome Site",
  description: "Site about my awesomeness",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  function moveContactToEnd(pages: Page[]) {
    const titlesOnly = pages.map((element) => element.title);
    const contactIndex = titlesOnly.indexOf("Contact");

    if (contactIndex !== -1) {
      const contactPage = pages.splice(contactIndex, 1)[0];
      pages.push(contactPage);
    }

    return pages;
  }
  const pages = await getPages();
  const sortedPages = moveContactToEnd(pages);

  return (
    <html lang="en">
      <body className={`max-w-3xl mx-auto py-10 ${inter.className}`}>
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl drop-shadow font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"
          >
            Nadya
          </Link>
          <div className="flex items-center gap-5 text-gray-600 text-sm">
            {sortedPages.map((page) => {
              return (
                <Link
                  key={page._id}
                  href={page.slug}
                  className="hover:underline"
                >
                  {page.title}
                </Link>
              );
            })}
          </div>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
