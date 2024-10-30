"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { User } from "lucide-react";
import LoginModal from "../LoginModal/LoginModal";

export default function Navigation() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [user, setUser] = useState<{ email: string; role: string } | null>(
    null
  );

  const handleLogin = (userData: { email: string; role: string }) => {
    setUser(userData);
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          AutoRecomenda
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          <Link
            href="/oficinas"
            className="hover:text-secondary-foreground transition-colors"
          >
            Oficinas
          </Link>
          <Link
            href="/sobre"
            className="hover:text-secondary-foreground transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="/contato"
            className="hover:text-secondary-foreground transition-colors"
          >
            Contato
          </Link>
          {user ? (
            <div className="flex items-center space-x-2">
              <span>Olá, {user.email}</span>
              <Button variant="secondary" onClick={handleLogout}>
                Sair
              </Button>
            </div>
          ) : (
            <Button
              variant="secondary"
              className="flex items-center space-x-2"
              onClick={() => setIsLoginModalOpen(true)}
            >
              <User size={18} />
              <span>Conta</span>
            </Button>
          )}
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="bg-primary-foreground text-primary hover:bg-secondary hover:text-primary"
            >
              <User className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-background text-foreground">
            <SheetHeader>
              <SheetTitle className="text-primary">Menu</SheetTitle>
              <SheetDescription>Navegue pelo AutoRecomenda</SheetDescription>
            </SheetHeader>
            <div className="flex flex-col space-y-4 mt-4">
              <Link
                href="/oficinas"
                className="text-foreground hover:text-primary"
              >
                Oficinas
              </Link>
              <Link
                href="/sobre"
                className="text-foreground hover:text-primary"
              >
                Sobre
              </Link>
              <Link
                href="/contato"
                className="text-foreground hover:text-primary"
              >
                Contato
              </Link>
              {user ? (
                <>
                  <span>Olá, {user.email}</span>
                  <Button onClick={handleLogout}>Sair</Button>
                </>
              ) : (
                <Button onClick={() => setIsLoginModalOpen(true)}>Conta</Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </nav>
  );
}
