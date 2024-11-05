'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

type AgendarServicoModalProps = {
  isOpen: boolean
  onClose: () => void
  oficinaNome: string
}

export default function AgendarServicoModal({ isOpen, onClose, oficinaNome }: AgendarServicoModalProps) {
  const [date, setDate] = useState<Date>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Agendamento enviado")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Agendar Serviço</DialogTitle>
          <DialogDescription>
            Preencha os detalhes para agendar um serviço na {oficinaNome}.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome</Label>
            <Input id="nome" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone</Label>
            <Input id="telefone" type="tel" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="servico">Tipo de Serviço</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o serviço" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="revisao">Revisão Geral</SelectItem>
                <SelectItem value="oleo">Troca de Óleo</SelectItem>
                <SelectItem value="freios">Manutenção de Freios</SelectItem>
                <SelectItem value="suspensao">Suspensão</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Data Preferencial</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={`w-full justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Selecione uma data</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <Label htmlFor="detalhes">Detalhes Adicionais</Label>
            <Textarea id="detalhes" placeholder="Descreva o problema ou serviço necessário" />
          </div>
          <Button type="submit" className="w-full">Enviar Agendamento</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}