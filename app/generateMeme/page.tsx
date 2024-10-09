"use client"

import React, { useRef, useState } from 'react'
import Image from 'next/image';

const memeGenerate = ({ searchParams }: { searchParams: { id: string; url: string } }) => {

    const [meme, setMeme] = useState<string | null>(null)
    const inp1 = useRef<HTMLInputElement>(null)
    const inp2 = useRef<HTMLInputElement>(null)


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
            <div>
                <Image
                    src={searchParams.url}
                    width={300}
                    height={300}
                    alt='meme'
                />

                <form onSubmit={generateMemes}>
                    <input type="text" placeholder='Text 01' ref={inp1} />
                    <input type="text" placeholder='Text 02' ref={inp2} />
                    <button type='submit'>Generate</button>
                </form>

                <h1>Yours Meme</h1>
                {meme ? (
                    <div>
                        <Image
                            alt='meme'
                            width={300}
                            height={300}
                            src={meme}
                        />
                    </div>
                ) : (<h1>No Meme Generate...</h1>)

                }
            </div>
        </>
    )
}

export default memeGenerate



















// "use client"

// import React, { useRef, useState } from 'react'
// import Image from 'next/image';

// const memeGenerate = ({ searchParams }: { searchParams: { id: string; url: string } }) => {

//   const [meme, setMeme] = useState<string | null>(null)
//   const inp1 = useRef<HTMLInputElement>(null)
//   const inp2 = useRef<HTMLInputElement>(null)

//   const generateMemes = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()

//     const formData = new URLSearchParams();
//     formData.append('template_id', searchParams.id);
//     formData.append('username', 'abasitkhan');
//     formData.append('password', '#WHZ&2KsNaw6*wP');
//     formData.append('text0', inp1.current?.value || '');
//     formData.append('text1', inp2.current?.value || '');

//     try {
//       const data = await fetch(`https://api.imgflip.com/caption_image`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: formData.toString(),
//       });

//       const res = await data.json();
//       console.log(res);

//       if (res.success) {
//         setMeme(res.data.url);  // Check if success is true
//       } else {
//         console.error("Error generating meme: ", res.error_message);
//       }

//     } catch (error) {
//       console.error("Error with the fetch request: ", error);
//     }
//   }

//   return (
//     <div>
//       <Image
//         src={searchParams.url}
//         width={300}
//         height={300}
//         alt='meme'
//       />

//       <form onSubmit={generateMemes}>
//         <input type="text" placeholder='Text 01' ref={inp1} />
//         <input type="text" placeholder='Text 02' ref={inp2} />
//         <button>Generate</button>
//       </form>

//       <h1>Yours Meme</h1>
//       {meme ? (
//         <div>
//           <Image
//             alt='meme'
//             width={300}
//             height={300}
//             src={meme}
//           />
//         </div>
//       ) : (
//         <h1>No Meme Generated...</h1>
//       )}
//     </div>
//   )
// }

// export default memeGenerate;









































// "use client"

// import React, { useRef, useState } from 'react'
// import Image from 'next/image';

// const memeGenerate = ({ searchParams }: { searchParams: { id: string; url: string } }) => {

//   const [meme, setMeme] = useState<string | null>(null)
//   const [count, setCount] = useState<string | null>(null)
//   const inp1 = useRef<HTMLInputElement>(null)
//   const inp2 = useRef<HTMLInputElement>(null)

//   const generateMemes = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()

//     const formData = new URLSearchParams();
//     formData.append('template_id', searchParams.id);
//     formData.append('username', 'abasitkhan');
//     formData.append('password', '#WHZ&2KsNaw6*wP');
//     formData.append('text0', inp1.current?.value || '');
//     formData.append('text1', inp2.current?.value || '');

//     try {
//       const data = await fetch(`https://api.imgflip.com/caption_image`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: formData.toString(),  // Form data ko body mein bhejna hai
//       });

//       const res = await data.json();
//       if (res.success) {
//         setMeme(res.data.url);  // Meme URL ko set karo
//         setCount(res.data.box_count); // Agar count ka bhi zarurat ho
//       } else {
//         console.error("Error generating meme: ", res.error_message);
//       }
//     } catch (error) {
//       console.error("Error with the fetch request: ", error);
//     }
//   }

//   return (
//     <>
//       <div className='text-center mt-3 flex justify-center items-center'>
//         <Image src={searchParams.url} width={300} height={300} alt='meme' />
//       </div>

//       <form onSubmit={generateMemes} className='justify-center items-center text-center'>
//         <input
//           type="text"
//           placeholder="Text 1"
//           className="input input-bordered input-primary w-full max-w-xs mt-6"
//           ref={inp1}
//         /><br />
//         <input
//           type="text"
//           placeholder="Text 2"
//           className="input input-bordered input-primary w-full max-w-xs mt-3"
//           ref={inp2}
//         /><br />
//         <button className='btn btn-warning mt-4'>Generate</button>
//       </form>

//       <h1 className='text-center text-2xl font-semibold mt-7'>Your Meme</h1>

//       {meme ? (
//         <div className='flex justify-center item-center mt-7'>
//           <Image src={meme} width={300} height={300} alt='meme' />
//         </div>
//       ) : (
//         <h1 className='text-center'>No Meme Generated...</h1>
//       )}
//     </>
//   )
// }

// export default memeGenerate;















// "use client"

// import Image from 'next/image';
// import React, { useRef, useState } from 'react'

// const CreateMeme = ({ searchParams }: { searchParams: { id: string; url: string } }) => {
//     // console.log(searchParams);
//     const [meme, setMeme] = useState<string | null>(null);
//     const text1 = useRef<HTMLInputElement>(null)
//     const text2 = useRef<HTMLInputElement>(null)


//     const createMeme = async (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault()
//         console.log(text1.current?.value);
//         console.log(text2.current?.value);

//         const data = await fetch(`https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=abasitkhan&password=basit1215&text0=${text1.current?.value}&text1=${text2.current?.value}`, {
//             method: 'POST'
//         })
//         const response = await data.json()
//         console.log(response);
//         setMeme(response.data.url)

//     }

//     return (
//         <>
//             <div>CreateMeme</div>
//             <Image src={searchParams.url} width={200} height={200} alt='meme' />

//             <form onSubmit={createMeme}>
//                 <input type="text" placeholder='enter text 1' ref={text1} />
//                 <input type="text" placeholder='enter text 2' ref={text2} />
//                 <button type='submit'>create meme</button>
//             </form>

//             {meme ? <Image src={meme} width={200} height={200} alt='meme' /> : null}
//         </>
//     )
// }

// export default CreateMeme 