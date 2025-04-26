
import React from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { TicketList } from "@/components/TicketList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChatBot } from "@/components/ChatBot";
import { useNavigate } from "react-router-dom";

const Tickets = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Support Tickets</h1>
            <p className="text-muted-foreground">
              View and manage your support requests
            </p>
          </div>
          <Button onClick={() => navigate("/tickets/new")}>
            <Plus className="h-4 w-4 mr-1" /> New Ticket
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tickets..."
              className="pl-8"
            />
          </div>
          <Button variant="outline">Filter</Button>
          <Button variant="outline">Sort</Button>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All Tickets</TabsTrigger>
            <TabsTrigger value="open">Open</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="resolved">Resolved</TabsTrigger>
            <TabsTrigger value="closed">Closed</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="pt-6">
            <TicketList />
          </TabsContent>
          <TabsContent value="open" className="pt-6">
            <TicketList />
          </TabsContent>
          <TabsContent value="in-progress" className="pt-6">
            <TicketList />
          </TabsContent>
          <TabsContent value="resolved" className="pt-6">
            <TicketList />
          </TabsContent>
          <TabsContent value="closed" className="pt-6">
            <TicketList />
          </TabsContent>
        </Tabs>
      </div>
      <ChatBot />
    </Layout>
  );
};

export default Tickets;
