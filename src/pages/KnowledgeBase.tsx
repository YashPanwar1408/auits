
import React from "react";
import { Layout } from "@/components/Layout";
import { KnowledgeBase as KnowledgeBaseComponent } from "@/components/KnowledgeBase";


const KnowledgeBasePage = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Knowledge Base</h1>
          <p className="text-muted-foreground">
            Find answers to common questions and access helpful resources
          </p>
        </div>

        <KnowledgeBaseComponent />
      </div>
      
    </Layout>
  );
};

export default KnowledgeBasePage;
