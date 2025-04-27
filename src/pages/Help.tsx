import React from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const Help = () => (
  <Layout>
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-4">Help & Support</h1>
        <p className="text-muted-foreground mb-6">Find answers to common questions, contact support, or browse our knowledge base.</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">How can we help you?</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Check the <span className="text-purple-400 font-medium">Knowledge Base</span> for FAQs.</li>
              <li>Submit a ticket via the <span className="text-purple-400 font-medium">Support Tickets</span> page.</li>
              <li>Email us at <span className="text-purple-400">support@example.com</span></li>
            </ul>
          </CardContent>
        </Card>
        {/* You can add a sidebar card here if needed for extra info or links */}
      </div>
    </div>
  </Layout>
);

export default Help;
