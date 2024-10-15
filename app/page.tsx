import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface Memes {
    name: string;
    url: string;
    id: string;
    box_count: number;
}

const Meme = async () => {

    const data = await fetch('https://api.imgflip.com/get_memes')
    const res = await data.json()
    console.log(res.data);
    const meme = await res.data.memes
    console.log(meme);

    return (
        <>
            <div className='bg-gray-900 min-h-screen'>
                <div className=" container mx-auto p-4 pb-10 ">
                    
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-300 ">Memes 😂</h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 " >
                        {meme.map((item: Memes) => (
                            <div key={item.id} className="border rounded-lg shadow-lg overflow-hidden bg-gray-300">
                                <Image
                                    src={item.url}
                                    alt="meme"
                                    width={200}
                                    height={200}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 text-center">
                                    <div>
                                        <p className="text-lg font-semibold text-gray-700">{item.name}</p>
                                    </div>
                                    <div className='flex items-end justify-end'>
                                        <Link href={{
                                            pathname: "generateMeme",
                                            query: {
                                                urls: item.url,
                                                id: item.id,
                                                box_count: item.box_count
                                            }
                                        }} className="mt-2 inline-block bg-gradient-to-r from-gray-700 to-slate-900 text-white font-bold py-2  w-full rounded-lg shadow-lg hover:from-gray-600 hover:to-slate-800 hover:shadow-xl transition-all duration-300 transform ">
                                            Generate Meme
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );

}

export default Meme