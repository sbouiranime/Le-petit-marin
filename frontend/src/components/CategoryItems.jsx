import React, { useContext, useEffect, useState } from "react";
import { ItemCard } from "./ItemCard";
import SearchTermContext from "../SearchTermContext";

export default function CategoryItems({ categoryName }) {

    const [productData, setProductData] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { searchTerm, setSearchTerm } = useContext(SearchTermContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/product/showCategoryProducts/${categoryName}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const responseData = await response.json();
                setProductData(responseData);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        const fetchAll = async () => {
            try {
                const response = await fetch("http://localhost:8080/product/getProducts");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const responseData = await response.json();
                setProductData(responseData);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        if (categoryName === "All") {
            fetchAll();
        } else {
            fetchData();
        }
    }, [categoryName]);

    useEffect(() => {
        if (productData) {
            setFilteredData(productData);
        }
    }, [productData]);

    useEffect(() => {
        if (searchTerm && productData) {
            const filteredSearch = productData.filter((product) => 
            product.name.toLowerCase().startsWith(searchTerm.toLowerCase())
        );            console.log(filteredData);
            setFilteredData(filteredSearch);
        } else {
            setFilteredData(productData);
        }
    }, [searchTerm, productData]);

    return (
        <>
            <h1>{categoryName}</h1>
            <div className="ml-20 grid grid-cols-3 gap-x-3 gap-y-5 ">
                {isLoading ? <div> Loading ...</div> :
                    filteredData && filteredData.map((product) => (
                        <ItemCard key={product.id} product={product} />
                    ))}
            </div>
        </>
    );
}
