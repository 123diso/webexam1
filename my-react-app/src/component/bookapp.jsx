import { useEffect, useState } from "react";

const Applibros = () => {
    const [datas, setData] = useState([]);
    const [card, setCard] = useState([]);



    useEffect(() => {
        if(reach){
        fetch(`https://openlibrary.org/search.json?q=${reach}&limit=10}`)
            .then((res) => res.json())
            .then((data) => setData(data)); 
        }
    }, []);

    const addlist = (produ) => {
        setCard((prev)=>{
            prev.find((i)=>(i.idx, produ.i))
            return [...dev, {...produ}]

        })
        alert("Libro agregado a la lista");
    };
    

    return (
        <>
            <p>Libros</p>
            <ul>
                {datas.map((book, idx) => (
                    <li key={idx}>
                        {book.title} {book.author_name }
                    </li>
                ))}
            </ul>

            {card}

            <button onClick={addlist}>Agregar a la lista</button>
            <input onChange={()=>serBut()}></input>
        </>
    );
};

export default Applibros;