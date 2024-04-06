import React, { useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import ProofModal from "./ProofModal";

export function ItemCard({ product }) {

    const [showAlternative, setShowAlternative] = useState(false);

    const toggleAlternative = () => {
        setShowAlternative(!showAlternative);
    };

    return (
        <Card className={`max-w-[24rem] overflow-hidden`}>

            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                {showAlternative ? <img className="w-100 h-100" src={product.logoAlternative} alt={product.alternative} /> : <img className="w-100 h-100" src={product.logo} alt={product.name} />}
                
            </CardHeader>

            <CardBody>
                <Typography variant="h4" color="blue-gray">
                {showAlternative ? product.alternative : product.name}
                </Typography>
            </CardBody>

            <CardFooter className="flex items-center justify-between">
            {showAlternative ? (
                    <Button className="rounded-full flex-grow" variant="gradient" onClick={toggleAlternative}>
                        Go Back
                    </Button>
                ) : (
                    <>
                        <ProofModal product={product}/>

                        {product.alternative ? 
                        <Button className="rounded-full" variant="outlined" onClick={toggleAlternative}>
                            Alternative
                        </Button> : "" }
                    </>
                )}
            </CardFooter>
        
        </Card>
    );
}
