"use client"

import React, { useRef, useState } from 'react'
import Image from 'next/image';

const memeGenerate = ({ searchParams }: { searchParams: { id: string; urls: string; box_count: number; } }) => {

    const [meme, setMeme] = useState<string | null>(null)
    const inp1 = useRef<HTMLInputElement>(null)
    const inp2 = useRef<HTMLInputElement>(null)
    const inp3 = useRef<HTMLInputElement>(null)
    const inp4 = useRef<HTMLInputElement>(null)


    const generateMemes = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        console.log(inp1.current?.value)
        console.log(inp2.current?.value)

        const data = await fetch(`https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=abasitkhan&password=basit1215&text0=${inp1.current?.value}&text1=${inp2.current?.value}`, { method: 'POST' })
        const res = await data.json()
        console.log(res)
        setMeme(res.data.url)
        console.log(meme)

    }

    return (
        <>
            <h1 className="mt-8 text-3xl font-bold text-gray-800 text-center">
                Generate Meme 😅
            </h1>
    
            <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
    
                <div className="flex justify-center mb-6">
                    <Image
                        src={searchParams.urls}
                        width={300}
                        height={300}
                        alt='meme'
                        className="rounded-lg shadow-md object-contain"
                    />
                </div>
    
                <form onSubmit={generateMemes} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Enter text 1"
                        ref={inp1}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Enter text 2"
                        ref={inp2}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:from-blue-400 hover:to-indigo-500 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Create Meme
                    </button>
                </form>
    
                <h1 className="mt-8 text-2xl font-semibold text-gray-800 text-center">
                    Your Generated Meme 😂🤣
                </h1>
    
                {meme ? (
                    <div className="flex justify-center mt-4">
                        <Image
                            alt='meme'
                            width={300}
                            height={300}
                            src={meme}
                            className="rounded-lg shadow-lg object-contain"
                        />
                    </div>
                ) : (
                    <h1 className="mt-4 text-xl font-semibold text-red-500 text-center">
                        No Meme Generated...
                    </h1>
                )}
            </div>
        </>
    )
  
}

export default memeGenerate












// "use client"

// import React, { useRef, useState } from 'react'
// import Image from 'next/image';

// const memeGenerate = ({ searchParams }: { searchParams: { id: string; urls: string; box_count: number; } }) => {

//     const [meme, setMeme] = useState<string | null>(null)
//     const inp1 = useRef<HTMLInputElement>(null)
//     const inp2 = useRef<HTMLInputElement>(null)
//     const inp3 = useRef<HTMLInputElement>(null)
//     const inp4 = useRef<HTMLInputElement>(null)


//     const generateMemes = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault()
//         console.log(inp1.current?.value)
//         console.log(inp2.current?.value)
//         console.log(inp3.current?.value)
//         console.log(inp4.current?.value)

//         const data = await fetch(`https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=abasitkhan&password=basit1215&text0=${inp1.current?.value}&text1=${inp2.current?.value}&text2=${inp3.current?.value}&text3=${inp4.current?.value}`, { method: 'POST' })
//         const res = await data.json()
//         console.log(res)
//         setMeme(res.data.url)
//         console.log(meme)

//     }

//     return (
//         <>
//             <div>
//                 <Image
//                     src={searchParams.urls}
//                     width={300}
//                     height={300}
//                     alt='meme'
//                 />
//                 {/* <div>
//                     {
//                      if(searchParams.box_count === 2){
//                         <form onSubmit={generateMemes}>
//                             <input type="text" placeholder='Text 01' ref={inp1} />
//                             <input type="text" placeholder='Text 02' ref={inp2} />
//                             <button type='submit'>Generate</button>
//                         </form>
//                     }
//                     }
//                 </div> */}


//                 <div>
//                     <form onSubmit={generateMemes}>
//                         {/* Show input fields based on box_count */}
//                         {searchParams.box_count >= 1 && (
//                             <input type="text" placeholder="Text 01" ref={inp1} />
//                         )}
//                         {searchParams.box_count >= 2 && (
//                             <input type="text" placeholder="Text 02" ref={inp2} />
//                         )}
//                         {searchParams.box_count >= 3 && (
//                             <input type="text" placeholder="Text 03" ref={inp3} />
//                         )}
//                         {searchParams.box_count >= 4 && (
//                             <input type="text" placeholder="Text 04" ref={inp4}/>
//                         )}
//                         {/* Add more inputs if needed */}
//                         <button type='submit'>Generate</button>
//                     </form>
//                 </div>



//                 <h1>Yours Meme</h1>
//                 {meme ? (
//                     <div>
//                         <Image
//                             alt='meme'
//                             width={300}
//                             height={300}
//                             src={meme}
//                         />
//                     </div>
//                 ) : (<h1>No Meme Generate...</h1>)

//                 }
//             </div>
//         </>
//     )
// }

// export default memeGenerate