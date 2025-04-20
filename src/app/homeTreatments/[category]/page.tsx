import Link from 'next/link'
import { Treatments } from './Treatment'
import { notFound } from 'next/navigation'

interface Props {
  // Next.js 15 now hands you params as a Promise
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return Treatments.map((t) => ({ category: t.category }))
}

export default async function CategoryPage({ params }: Props) {
  //await the params promise
  const { category } = await params

  //now you can safely lookup:
  const cat = Treatments.find((t) => t.category === category)
  if (!cat) return notFound()

  return (
    <div className="main mt-4 mx-4 md:mx-8 mb-4">
      <header className="bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg p-8 mb-8 flex flex-col md:flex-row items-center">
        <div className="flex-shrink-0 text-6xl md:text-8xl mb-4 md:mb-0">
          {cat.icon}
        </div>
        <div className="md:ml-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">{cat.name}</h1>
          <p className="mt-2 text-lg md:text-xl opacity-90">
            {cat.description}
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cat.sublinks.map((sub) => {
          const disease = sub.link;
          return (
            <Link
              key={disease}
              href={`/treatments/${category}/${disease}`}
              className="block border rounded-lg p-6 hover:shadow-lg transition"
            >
              {sub.name}
            </Link>
          );
        })}
      </div>
    </div>
  )
}
