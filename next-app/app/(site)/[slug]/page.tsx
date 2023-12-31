import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div>
      <div>
        <h1 className="text-5xl drop-shadow font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          {page.title}
        </h1>
        <div className="text-lg text-gary-700 mt-10">
          <PortableText value={page.content} />
        </div>
      </div>
    </div>
  );
}
