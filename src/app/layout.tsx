import { Footer } from "@/components/Footer";
import "./globals.css";

import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import Providers from "@/components/layout/providers";
import { auth } from "@/auth/auth";
import { Toaster } from "@/components/ui/toaster";


interface RootLayoutProps extends PropsWithChildren {}

export default function RootLayout({ children }: RootLayoutProps) {
  const session = auth
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          
        )}
      ><div className="min-h-screen">
        <Toaster />
         <Providers session={session}>
        {children}
        <Footer />
        </Providers>
        </div>
      </body>
    </html>
  );
}
