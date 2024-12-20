import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


type CadastrarOficinaModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCadastrar: (oficina: any) => void;
};

export default function CadastrarOficinaModal({
  isOpen,
  onClose,
  onCadastrar,
}: CadastrarOficinaModalProps) {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [horarioFunc, setHorarioFunc] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const novaOficina = {
      nome,
      telefone,
      endereco,
      horarioFunc,
      statusParceria: "A",
      mediaAvaliacao: 4.5,
    };
    onCadastrar(novaOficina);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Cadastrar Nova Oficina</DialogTitle>
          <DialogDescription>
            Preencha os detalhes da nova oficina parceira.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome da Oficina</Label>
            <Input
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="endereco">Endereço</Label>
            <Input
              id="endereco"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone</Label>
            <Input
              id="telefone"
              value={telefone}
              placeholder="Ex: (11) 91227-0909"
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="horarioFunc">Horário de Funcionamento</Label>
            <Input
              id="horarioFunc"
              value={horarioFunc}
              placeholder="Ex: 08:00-17:00"
              onChange={(e) => setHorarioFunc(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Cadastrar Oficina
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
