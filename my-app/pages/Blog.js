import Navigation from './Navigation'
import Head from 'next/head'

export const getStaticProps = async () => {
    const res = await fetch(" https://jsonplaceholder.typicode.com/albums")
    const data = await res.json();
   return {
         props: {
             data,
 }
    }
}

const Blog = ({ data }) => {
    console.log('7848374',data)


    return (
        <div>
            <Head>
                <title>this is my blog</title>
            </Head>
            <Navigation/>
            {/* learn getStaticProps ,getstaticpath and implement */}

   {
         data.map((x) => {
                    return (
                        <>
                        <div>
                            <p>{x.userId}</p>
                            <p>{x.id}</p>
                            <p>{x.title}</p>
                            </div>
                             </>
                    )
                })
            }

        </div>
    )
}

export default Blog

