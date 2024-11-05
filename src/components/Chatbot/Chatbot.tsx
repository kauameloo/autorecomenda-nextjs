"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Declaração global para a propriedade watsonAssistantChatOptions
declare global {
  interface Window {
    watsonAssistantChatOptions?: {
      integrationID: string;
      region: string;
      serviceInstanceID: string;
      onLoad: (instance: any) => Promise<void>;
      clientVersion?: string;
    };
  }
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "9a938362-4320-453a-9a10-d990339142d0",
      region: "au-syd",
      serviceInstanceID: "02f1329d-64d2-4b81-b7d7-4d63be2345be",
      onLoad: async (instance: any) => {
        await instance.render();
      },
    };
    setTimeout(function () {
      const t = document.createElement("script");
      t.src =
        "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
        (window.watsonAssistantChatOptions?.clientVersion || "latest") +
        "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
    });
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <Card className="w-80">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chatbot</CardTitle>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <X size={16} />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="h-64 overflow-y-auto mb-4 bg-muted p-2 rounded">
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
      )}
    </div>
  );
}
