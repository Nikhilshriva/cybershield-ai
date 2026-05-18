import type { Metadata } from "next";
import "./globals.css";

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  UserButton
} from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "CyberShield",
  description: "Premium AI Cybersecurity Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <ClerkProvider>

      <html lang="en">

        <body>

          <header className="fixed top-0 right-0 z-50 p-6 flex gap-4">

            <SignInButton />

            <SignUpButton />

            <UserButton />

          </header>

          {children}

        </body>

      </html>

    </ClerkProvider>

  );
}