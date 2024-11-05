"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, MapPin, Phone, Clock } from "lucide-react";
import AgendarServicoModal from "../../components/AgendarServicoModal/AgendarServicoModal";
import CadastrarOficinaModal from "../../components/CadastrarOficinaModal/CadastrarOficinaModal";
import { useAuth } from "../../context/AuthContext";

type Oficina = {
  id: number;
  nome: string;
  mediaAvaliacao: number;
  endereco: string;
  telefone: string;
  horarioFunc: string;
  statusParceria: string;
};

export default function Oficinas() {
  const { user } = useAuth();
  const [oficinas, setOficinas] = useState<Oficina[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [agendarModalOpen, setAgendarModalOpen] = useState(false);
  const [cadastrarModalOpen, setCadastrarModalOpen] = useState(false);
  const [selectedOficina, setSelectedOficina] = useState<Oficina | null>(null);

  const fetchOficinas = async () => {
    try {
      const response = await fetch("/api/oficinas");
      if (!response.ok) throw new Error("Erro ao buscar oficinas");

      const data: Oficina[] = await response.json();
      const oficinasAtivas = data.filter(
        (oficina) => oficina.statusParceria === "A"
      );
      setOficinas(oficinasAtivas);
    } catch (error) {
      console.error("Erro ao carregar oficinas:", error);
    }
  };

  useEffect(() => {
    fetchOficinas();
  }, []);

  const filteredOficinas = oficinas.filter((oficina) =>
    oficina.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAgendarClick = (oficina: Oficina) => {
    setSelectedOficina(oficina);
    setAgendarModalOpen(true);
  };

  const handleCadastrarOficina = async (
    novaOficina: Omit<Oficina, "id" | "statusParceria">
  ) => {
    try {
      const response = await fetch("/api/oficinas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...novaOficina, statusParceria: "A" }),
      });

      if (!response.ok) throw new Error("Erro ao cadastrar oficina");

      // Após o cadastro bem-sucedido, atualize a lista de oficinas
      await fetchOficinas();
    } catch (error) {
      console.error("Erro ao cadastrar nova oficina:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Oficinas Recomendadas</h1>
        {user?.role === "admin" && (
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
                  {oficina.mediaAvaliacao.toFixed(1)}
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
                  {oficina.horarioFunc}
                </p>
              </div>
              <Button
                className="w-full mt-4"
                onClick={() => handleAgendarClick(oficina)}
              >
                Agendar Serviço (em desenvolvimento)
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
