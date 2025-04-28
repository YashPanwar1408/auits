import React, { useEffect, useState, useRef } from "react";
import { Layout } from "@/components/Layout";
import { PaymentForm } from "@/components/PaymentForm";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileText, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

const Innvoice = () => {
  const link = document.createElement('a');
  link.href = '/downloads/innvoice.png'; // Make sure this is the correct path
  link.download = 'innvoice.png'; // The name you want the file to be downloaded as
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const Annual = () => {
  const link = document.createElement('a');
  link.href = '/downloads/Annual.pdf'; // Make sure this is the correct path
  link.download = 'Annual Statement.pdf'; // The name you want the file to be downloaded as
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const Tax = () => {
  const link = document.createElement('a');
  link.href = '/downloads/Tax.pdf'; // Make sure this is the correct path
  link.download = 'Tax Statement.pdf'; // The name you want the file to be downloaded as
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const Warranty = () => {
  const link = document.createElement('a');
  link.href = '/downloads/Warranty.pdf'; // Make sure this is the correct path
  link.download = 'Warranty.pdf'; // The name you want the file to be downloaded as
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Billing = () => {
  const { user } = useAuth();
  const [payments, setPayments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("payment");
  const paymentSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchPayments = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("payments")
        .select("*")
        .eq("user_id", user?.id)
        .order("created_at", { ascending: false });
      setPayments(data || []);
      setLoading(false);
    };
    if (user) fetchPayments();
  }, [user]);

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Billing & Payments</h1>
          <p className="text-muted-foreground">
            Manage your payments and view transaction history
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>
                View all your past transactions and invoices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.id}</TableCell>
                      <TableCell>{payment.date}</TableCell>
                      <TableCell>{payment.description}</TableCell>
                      <TableCell>{payment.amount}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            payment.status === "paid"
                              ? "bg-green-500 hover:bg-green-600 text-white"
                              : "bg-yellow-500 hover:bg-yellow-600 text-white"
                          }
                        >
                          {payment.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button onClick={Innvoice} variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Billing Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Current Plan</span>
                  <span className="font-medium">Premium Maintenance</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Billing Cycle</span>
                  <span className="font-medium">Monthly</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Next Payment</span>
                  <span className="font-medium">May 15, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount Due</span>
                  <span className="font-medium">$150.00</span>
                </div>

                <div className="pt-4">
                  <Button className="w-full" onClick={() => {
                    setActiveTab("payment");
                    setTimeout(() => {
                      paymentSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 100);
                  }}>
                    <Plus className="mr-2 h-4 w-4" /> Make a Payment
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Billing Documents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button onClick={Annual} variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" /> Annual Statement (2024)
                </Button>
                <Button onClick={Tax} variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" /> Tax Certificate (2024)
                </Button>
                <Button  onClick={Warranty} variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" /> Warranty Information
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div ref={paymentSectionRef}></div>
        <Tabs defaultValue="payment" className="w-full max-w-3xl mx-auto" value={activeTab}>
          <TabsList className="w-full">
            <TabsTrigger value="payment">Make a Payment</TabsTrigger>
          </TabsList>
          <TabsContent value="payment" className="pt-6">
            <PaymentForm />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Billing;
