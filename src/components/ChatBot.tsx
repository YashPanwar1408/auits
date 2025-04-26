
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, X, Send, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m your AUITS solar assistant. How can I help you today?',
      sender: 'bot'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: 'user'
    };
    
    setMessages(prev => [...prev, newMessage]);
    setMessage('');
    setIsTyping(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const responses = [
        "Thanks for your message! I'd be happy to help with your solar energy questions.",
        "I understand you have a question about your solar panels. What specific information would you like to know?",
        "Your solar system is operating at optimal efficiency! Is there anything else you'd like to know?",
        "Let me check on the status of your support ticket. It's currently being reviewed by our technical team.",
        "I can help you schedule a maintenance check for your solar panels. When would be a good time?"
      ];
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responses[Math.floor(Math.random() * responses.length)],
        sender: 'bot'
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button 
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
            size="icon"
          >
            <MessageSquare className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`} />
            <X className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`} />
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          className="w-[350px] sm:w-[380px] p-0 mr-6 mb-6" 
          side="top" 
          align="end"
        >
          <Card className="border-0 shadow-none">
            <div className="bg-primary text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AUITS Solar Assistant</h3>
                    <p className="text-xs opacity-80">Online</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:bg-white/20"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div 
              className="h-[300px] overflow-y-auto p-4 flex flex-col gap-3 chat-container"
            >
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`chat-bubble ${msg.sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'}`}
                >
                  {msg.content}
                </div>
              ))}
              {isTyping && (
                <div className="chat-bubble chat-bubble-bot flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Typing...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-3 border-t flex gap-2">
              <Input 
                placeholder="Type your message..." 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button size="icon" onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </PopoverContent>
      </Popover>
    </>
  );
};
