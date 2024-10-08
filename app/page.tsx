import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface Memes {
    name: string;
    url: string;
    id: string
}

const Meme = async() => {

    // const [memes, setMemes] = useState<any>([])

    // useEffect(() => {

    //     axios('https://api.imgflip.com/get_memes')
    //         .then((res) => {
    //             console.log(res.data.data.memes)
    //             setMemes(res.data.data.memes)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })

    // }, [])




    const data = await fetch('https://api.imgflip.com/get_memes')
    const res = await data.json()
    console.log(res.data);
    const meme = await res.data.memes
    console.log(meme);

    return (
        <>

            <h1>Meme</h1>
            {meme.map((item: Memes) => (
                <div key={item.id}>
                    <Image
                    src={item.url}
                    alt={item.name}
                    width={200}
                    height={200}
                    />
                    <p>{item.name}</p>
                    <Link href={{
                        pathname: "createMeme/",
                        query:{
                            url: item.url,
                            id: item.id,

                        }
                    }}>Generate Meme</Link>
                </div>
            ))
            }

        </>
    )
}

export default Meme