import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-2">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Bem-vindo ao AutoRecomenda
      </h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Encontre as melhores oficinas automotivas com base em avaliações e
        feedback de clientes.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Button asChild size="lg">
          <Link href="/oficinas">Ver Oficinas</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/sobre">Saiba Mais</Link>
        </Button>
      </div>
    </div>
  );
}
