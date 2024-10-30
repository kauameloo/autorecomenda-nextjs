"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-80">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chatbot</CardTitle>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <X size={16} />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="h-64 overflow-y-auto mb-4 bg-muted p-2 rounded">
              {/* Aqui você adicionaria a lógica do chatbot */}
              <p>Olá! Como posso ajudar você hoje?</p>
            </div>
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Digite sua mensagem..."
                className="flex-grow"
              />
              <Button size="sm">Enviar</Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="rounded-full h-12 w-12"
        >
          <MessageCircle size={24} />
        </Button>
      )}
    </div>
  );
}
