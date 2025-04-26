
import React from "react";
import { Layout } from "@/components/Layout";
import { CreateTicketForm } from "@/components/CreateTicketForm";
import { ChatBot } from "@/components/ChatBot";

const NewTicket = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Create New Support Ticket</h1>
        <CreateTicketForm />
      </div>
      <ChatBot />
    </Layout>
  );
};

export default NewTicket;
