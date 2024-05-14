import React from 'react'
import prisma from '@/lib/prisma'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
}
from '@/components/ui/card'








export async function Shoes() {
const data = await prisma.shoes.findMany();

    return(
        <div className=''>
     <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
      {
        data.map((items) =>(
            <Card className='' key={items.id}>
        <CardContent key={items.id} className=''>
            <CardTitle>{items.name}</CardTitle>
            <img src={items.image} width={400} height={200} />
            
            <CardTitle>{items.price}</CardTitle>
            <CardTitle>{items.seller}</CardTitle>
        </CardContent>
        </Card>
        ))
      }
     </div>
     </div>
    
    )

}
const Hero = async () => {
 return(
    <div>
     <Shoes />
    </div>
 )
    
}

export default Hero



