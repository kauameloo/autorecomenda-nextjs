import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AutoRecomenda</h3>
            <p className="text-muted-foreground">
              Encontre as melhores oficinas automotivas com base em avaliações e feedback de clientes.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/oficinas" className="text-muted-foreground hover:text-primary">
                  Oficinas
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-primary">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-muted-foreground hover:text-primary">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Contato</h4>
            <address className="not-italic text-muted-foreground">
              <p>Rua das Oficinas, 123</p>
              <p>Cidade dos Motores, CM</p>
              <p>CEP: 12345-678</p>
              <p>Email: contato@autorecomenda.com</p>
              <p>Tel: (11) 1234-5678</p>
            </address>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2023 AutoRecomenda. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}