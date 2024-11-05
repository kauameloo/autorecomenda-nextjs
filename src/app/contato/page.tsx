import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContatoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Entre em Contato</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Formulário de Contato</CardTitle>
            <CardDescription>
              Preencha o formulário abaixo para entrar em contato conosco.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="nome">Nome</Label>
                <Input id="nome" placeholder="Seu nome" />
              </div>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
              <div>
                <Label htmlFor="mensagem">Mensagem</Label>
                <Textarea id="mensagem" placeholder="Sua mensagem" />
              </div>
              <Button type="submit">Enviar Mensagem</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Torne-se um Parceiro</CardTitle>
            <CardDescription>
              Descubra os benefícios de ser um parceiro AutoRecomenda.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Aumento de visibilidade para sua oficina</li>
              <li>Acesso a uma base de clientes em crescimento</li>
              <li>Sistema de avaliações para construir sua reputação</li>
              <li>Ferramentas de gestão para otimizar seus serviços</li>
              <li>Suporte dedicado da equipe AutoRecomenda</li>
              <li>Oportunidades de treinamento e desenvolvimento</li>
            </ul>
            <p className="mb-4">
              Junte-se à rede AutoRecomenda e faça parte da revolução na
              manutenção automotiva. Estamos sempre em busca de oficinas de
              qualidade para atender nossos clientes.
            </p>
            <Button>Saiba Mais Sobre Parcerias</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
