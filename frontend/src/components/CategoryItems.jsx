import { ItemCard } from "./ItemCard";

export default function CategoryItems({ categoryName }) {

    //fetch des données mel bd selon categoryName==> products
    //products.map((product) => <ItemCard product={product}/>)

    return (
        <>
            <h1>{categoryName}</h1>
            <div className="ml-20 grid grid-cols-3 gap-x-3 gap-y-5">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>

        </>

    )
}