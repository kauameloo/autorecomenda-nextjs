import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Shield, Wrench } from "lucide-react";

export default function SobrePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Sobre o AutoRecomenda
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <p className="text-lg mb-4">
            AutoRecomenda é uma plataforma inovadora de classificação de
            oficinas automotivas que visa conectar os melhores serviços
            automotivos aos clientes. Fundada em 2024, nossa missão é construir
            um ambiente seguro e confiável para todos os motoristas, garantindo
            qualidade, transparência e facilidade para o consumidor.
          </p>
          <p className="text-lg mb-4">
            Com uma rede cuidadosamente selecionada de oficinas altamente
            recomendadas, garantimos que você encontre os melhores serviços para
            cuidar do seu veículo. Nosso compromisso é assegurar a confiança e a
            satisfação dos nossos clientes, oferecendo uma plataforma que
            simplifica a busca por serviços automotivos de qualidade.
          </p>
          <p className="text-lg">
            Na AutoRecomenda, acreditamos que cada motorista merece ter acesso a
            serviços automotivos confiáveis e de alta qualidade. É por isso que
            trabalhamos incansavelmente para criar parcerias com as melhores
            oficinas, implementar sistemas de avaliação transparentes e fornecer
            informações detalhadas para ajudar você a tomar a melhor decisão
            para o seu veículo.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/ilustracao-oficina.jpg"
            alt="Equipe AutoRecomenda"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-6 text-center">
        Nossos Valores
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          {
            icon: <CheckCircle className="h-8 w-8 mb-2 text-primary" />,
            title: "Qualidade",
            description: "Comprometidos com a excelência em todos os serviços",
          },
          {
            icon: <Users className="h-8 w-8 mb-2 text-primary" />,
            title: "Confiança",
            description:
              "Construindo relacionamentos duradouros com clientes e parceiros",
          },
          {
            icon: <Shield className="h-8 w-8 mb-2 text-primary" />,
            title: "Segurança",
            description:
              "Priorizando a proteção e tranquilidade dos nossos usuários",
          },
          {
            icon: <Wrench className="h-8 w-8 mb-2 text-primary" />,
            title: "Inovação",
            description: "Sempre buscando melhorias e soluções criativas",
          },
        ].map((value, index) => (
          <Card key={index}>
            <CardContent className="flex flex-col items-center text-center p-6">
              {value.icon}
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p>{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-3xl font-semibold mb-6 text-center">Nossa Equipe</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          {
            name: "Caike Dametto",
            role: "CEO & Fundador",
            image: "/images/caike.jpeg",
          },
          {
            name: "Kauã de Melo Rodrigues",
            role: "CTO",
            image: "/images/kaua.png",
          },
          {
            name: "Guilherme Janunzzi",
            role: "Gerente de Parcerias",
            image: "/images/gui.jpeg",
          },
        ].map((member, index) => (
          <Card key={index}>
            <CardContent className="flex flex-col items-center text-center p-6">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Junte-se à nossa rede de oficinas parceiras
        </h2>
        <p className="text-lg mb-6">
          Seja parte da revolução na manutenção automotiva. Aumente sua
          visibilidade e conecte-se com mais clientes.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/contato">Torne-se um Parceiro</Link>
        </Button>
      </div>
    </div>
  );
}
