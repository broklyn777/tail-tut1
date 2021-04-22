import Head from 'next/head';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';

import { blogPosts } from '../lib/data';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       
      </main>

      <div className="space-y-4">
        {blogPosts.map((item) => (
          <BlogListItem key={item.slug} {...item} />
         
        ))}
      </div>
    </div>
  );
}

function BlogListItem({ slug, title, skribent, date, content}) {
  return (
     <div className="border border-black-200 hover:border-blue-500 hover:bg-blue-100 shadow-xs hover:shadow-md rounded-md p-4 transition duration-300 ease-in-out">
            <div>
              <Link href={`/blog/${slug}`}>
                <a className="font-bold capitalize">{title}</a>
              </Link>
            </div>
            <div className="text-gray-600 text-sm">{format(parseISO(date), 'dd MMMM , uuu')}
</div>
            <div>{content}</div>
            <div className=""> {skribent} </div>
          </div>
  )

}

