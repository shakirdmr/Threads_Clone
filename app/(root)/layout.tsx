import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";

export const metadata = {
    title:"Threads",
    description:"A next.js 13 app"
}


const inter = Inter({subsets:["latin"]});

export default function  RootLayout(
    {children}:{children: React.ReactNode}
){
 
    return (
        <ClerkProvider>

            <html lang="eng">
                <body className={` ${inter.className} bg-dark-1 text-white`}>
                   
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}