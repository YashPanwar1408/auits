
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Search, FileText, Download, ExternalLink } from "lucide-react";

const faqs = [
  {
    id: "q1",
    question: "How do I read my solar production metrics?",
    answer: "You can find your solar production metrics on your dashboard. The system tracks daily, monthly, and yearly production. Click on any chart to see detailed information and export the data if needed.",
    tags: ["dashboard", "metrics", "solar-production"],
  },
  {
    id: "q2",
    question: "What should I do if my system stops producing power?",
    answer: "If your system stops producing power, first check if there's a power outage in your area. Next, check if the system displays any error codes. You can refer to the error codes section in the user manual. If the issue persists, create a support ticket from your account.",
    tags: ["troubleshooting", "power-issues", "maintenance"],
  },
  {
    id: "q3",
    question: "How often should I clean my solar panels?",
    answer: "In most areas, solar panels should be cleaned 2-4 times per year. However, this depends on your local environment. If you live in a dusty area or somewhere with heavy pollen, more frequent cleaning might be necessary. You can schedule a maintenance visit through the 'Services' section.",
    tags: ["maintenance", "cleaning", "solar-panels"],
  },
  {
    id: "q4",
    question: "Can I add more panels to my existing system?",
    answer: "Yes, most AUITS solar systems are designed to be expandable. The feasibility depends on your current system's capacity and your property's specifications. Contact our sales team through the app to schedule an assessment for system expansion.",
    tags: ["expansion", "installation", "solar-panels"],
  },
  {
    id: "q5",
    question: "What do the different error codes mean?",
    answer: "Error codes provide diagnostic information about your system. Common codes include E01 (Communication Error), E13 (Inverter Overheating), and E25 (Grid Connection Issue). For a complete list, refer to the 'Error Codes' section in the Documentation tab.",
    tags: ["troubleshooting", "errors", "diagnostics"],
  },
];

const guides = [
  {
    id: "g1",
    title: "Getting Started with Your Solar System",
    description: "Learn the basics of operating and monitoring your AUITS solar system.",
    icon: FileText,
  },
  {
    id: "g2",
    title: "Understanding Your Energy Production Reports",
    description: "A detailed guide to interpreting the data in your energy production reports.",
    icon: FileText,
  },
  {
    id: "g3",
    title: "Maintenance Best Practices",
    description: "Tips and schedules for maintaining optimal system performance.",
    icon: FileText,
  },
  {
    id: "g4",
    title: "Troubleshooting Common Issues",
    description: "Step-by-step guides to resolve common problems with your solar system.",
    icon: FileText,
  },
];

const documents = [
  {
    id: "d1",
    title: "User Manual",
    description: "Complete user manual for your AUITS solar system",
    type: "PDF",
    size: "4.2 MB",
  },
  {
    id: "d2",
    title: "Installation Guide",
    description: "Technical details about your solar system installation",
    type: "PDF",
    size: "2.8 MB",
  },
  {
    id: "d3",
    title: "Warranty Information",
    description: "Details about your product warranty and coverage",
    type: "PDF",
    size: "1.3 MB",
  },
  {
    id: "d4",
    title: "Technical Specifications",
    description: "Detailed specifications of your solar panels and inverter",
    type: "PDF",
    size: "3.5 MB",
  },
];

export function KnowledgeBase() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <Input
          className="pl-10"
          placeholder="Search for answers, guides, or documents..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="faqs" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="faqs">FAQs</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="faqs" className="space-y-4 pt-4">
          <Accordion type="single" collapsible className="w-full">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>{faq.answer}</p>
                      <div className="flex flex-wrap gap-2">
                        {faq.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-end">
                        <Button variant="ghost" size="sm">
                          Was this helpful?
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))
            ) : (
              <p className="text-center text-muted-foreground py-4">
                No FAQs match your search query. Try a different search term.
              </p>
            )}
          </Accordion>
        </TabsContent>

        <TabsContent value="guides" className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guides.map((guide) => (
              <Card key={guide.id} className="overflow-hidden">
                <div className="bg-gradient-to-r from-solar-600 to-auits-600 h-2" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <guide.icon className="h-5 w-5" />
                    {guide.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {guide.description}
                  </CardDescription>
                  <Button size="sm">Read Guide</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="documents" className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documents.map((doc) => (
              <Card key={doc.id}>
                <CardHeader>
                  <CardTitle>{doc.title}</CardTitle>
                  <CardDescription>{doc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-2">
                        {doc.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {doc.size}
                      </span>
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="icon">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
