"use client";

import axios from "@/lib/axios";
import Image from "next/image";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const Integration = () => {
const [productData, setProductData] = useState<Product[]>([]);    
    const handleApiCall = async () => {
        try{
            const response = await axios.get("https://fakestoreapi.com/products");
            console.log(response.data);
            setProductData(response.data);

        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        handleApiCall();
    },[])
    return (
        <div className="max-w-7xl my-14 mx-auto">
             <h1 className="text-center mt-[100px] mb-[60px] text-6xl">Api Integration</h1>
            <div className="grid grid-cols-3 gap-4 w-full">
                {productData.map((product: Product) => (
                    <>
                    <div className='service_box p-5 rounded-lg min-h-[300px] flex flex-col justify-center w-full' key={product.id}>
                        <Image className="w-full h-[250px] object-contain" src={product.image} alt={product.title} width={250} height={250} />
                        <h2 className="text-[14px] font-medium">{product.title}</h2>
                        <p className="text-[16px] font-bold text-[#007bff]">${product.price.toFixed(2)}</p>
                    </div>
                    </>
                ))}
            </div>
        </div>
    )
};

export default Integration