'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type CadastrarOficinaModalProps = {
  isOpen: boolean
  onClose: () => void
  onCadastrar: (oficina: any) => void
}

export default function CadastrarOficinaModal({ isOpen, onClose, onCadastrar }: CadastrarOficinaModalProps) {
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [telefone, setTelefone] = useState('')
  const [horario, setHorario] = useState('')
  const [especialidades, setEspecialidades] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const novaOficina = {
      nome,
      endereco,
      telefone,
      horario,
      especialidades: especialidades.split(',').map(esp => esp.trim()),
      avaliacao: 0 // Inicialmente sem avaliação
    }
    onCadastrar(novaOficina)
    onClose()
  }

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
            <Input id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="endereco">Endereço</Label>
            <Input id="endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone</Label>
            <Input id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="horario">Horário de Funcionamento</Label>
            <Input id="horario" value={horario} onChange={(e) => setHorario(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="especialidades">Especialidades (separadas por vírgula)</Label>
            <Textarea 
              id="especialidades" 
              value={especialidades} 
              onChange={(e) => setEspecialidades(e.target.value)} 
              required 
            />
          </div>
          <Button type="submit" className="w-full">Cadastrar Oficina</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}