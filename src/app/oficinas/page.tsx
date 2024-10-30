"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, MapPin, Phone, Clock, Wrench } from "lucide-react";
import AgendarServicoModal from "../../components/AgendarServicoModal/AgendarServicoModal";
import CadastrarOficinaModal from "../../components/CadastrarOficinaModal/CadastrarOficinaModal";

type Oficina = {
  id: number;
  nome: string;
  avaliacao: number;
  endereco: string;
  telefone: string;
  horario: string;
  especialidades: string[];
};

const oficinasIniciais: Oficina[] = [
  {
    id: 1,
    nome: "Oficina do João",
    avaliacao: 4.5,
    endereco: "Rua A, 123 - Centro",
    telefone: "(11) 1234-5678",
    horario: "Seg-Sex: 8h-18h, Sáb: 8h-12h",
    especialidades: ["Motor", "Freios", "Suspensão"],
  },
  {
    id: 2,
    nome: "Mecânica Expressa",
    avaliacao: 4.2,
    endereco: "Av. B, 456 - Jardim Europa",
    telefone: "(11) 2345-6789",
    horario: "Seg-Sáb: 7h-20h",
    especialidades: ["Elétrica", "Ar Condicionado", "Injeção Eletrônica"],
  },
  {
    id: 3,
    nome: "Auto Center Silva",
    avaliacao: 4.8,
    endereco: "Rua C, 789 - Vila Nova",
    telefone: "(11) 3456-7890",
    horario: "Seg-Sex: 8h-19h, Sáb: 9h-15h",
    especialidades: ["Funilaria", "Pintura", "Mecânica Geral"],
  },
];

export default function Oficinas() {
  const [oficinas, setOficinas] = useState<Oficina[]>(oficinasIniciais);
  const [searchTerm, setSearchTerm] = useState("");
  const [agendarModalOpen, setAgendarModalOpen] = useState(false);
  const [cadastrarModalOpen, setCadastrarModalOpen] = useState(false);
  const [selectedOficina, setSelectedOficina] = useState<Oficina | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);

  const filteredOficinas = oficinas.filter(
    (oficina) =>
      oficina.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      oficina.especialidades.some((esp) =>
        esp.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const handleAgendarClick = (oficina: Oficina) => {
    setSelectedOficina(oficina);
    setAgendarModalOpen(true);
  };

  const handleCadastrarOficina = (novaOficina: Omit<Oficina, "id">) => {
    const id = oficinas.length + 1;
    setOficinas([...oficinas, { ...novaOficina, id }]);
  };

  // Simula o login do usuário
  const handleLogin = (user: { email: string; role: string }) => {
    setUserRole(user.role);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Oficinas Recomendadas</h1>
        {userRole === "admin" && (
          <Button onClick={() => setCadastrarModalOpen(true)}>
            Cadastrar Oficina
          </Button>
        )}
      </div>
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Buscar por nome ou especialidade..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md mx-auto"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOficinas.map((oficina) => (
          <Card key={oficina.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{oficina.nome}</span>
                <Badge variant="secondary" className="flex items-center">
                  <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                  {oficina.avaliacao.toFixed(1)}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  {oficina.endereco}
                </p>
                <p className="flex items-center text-muted-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  {oficina.telefone}
                </p>
                <p className="flex items-center text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2" />
                  {oficina.horario}
                </p>
                <div className="flex items-center">
                  <Wrench className="w-4 h-4  mr-2 text-muted-foreground" />
                  <div className="flex flex-wrap gap-1">
                    {oficina.especialidades.map((esp, index) => (
                      <Badge key={index} variant="outline">
                        {esp}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <Button
                className="w-full mt-4"
                onClick={() => handleAgendarClick(oficina)}
              >
                Agendar Serviço
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedOficina && (
        <AgendarServicoModal
          isOpen={agendarModalOpen}
          onClose={() => setAgendarModalOpen(false)}
          oficinaNome={selectedOficina.nome}
        />
      )}
      <CadastrarOficinaModal
        isOpen={cadastrarModalOpen}
        onClose={() => setCadastrarModalOpen(false)}
        onCadastrar={handleCadastrarOficina}
      />
    </div>
  );
}
