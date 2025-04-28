
import React from "react";
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

const payments = [
  {
    id: "INV-001",
    date: "2025-04-15",
    amount: "$150.00",
    status: "paid",
    description: "Monthly Maintenance Fee",
  },
  {
    id: "INV-002",
    date: "2025-03-15",
    amount: "$150.00",
    status: "paid",
    description: "Monthly Maintenance Fee",
  },
  {
    id: "INV-003",
    date: "2025-02-15",
    amount: "$150.00",
    status: "paid",
    description: "Monthly Maintenance Fee",
  },
  {
    id: "INV-004",
    date: "2025-01-15",
    amount: "$150.00",
    status: "paid",
    description: "Monthly Maintenance Fee",
  },
  {
    id: "INV-005",
    date: "2024-12-15",
    amount: "$250.00",
    status: "paid",
    description: "System Upgrade Service",
  },
];
const Innvoice = () => {
  const link = document.createElement('a');
  link.href = '/downloads/innvoice.png'; // Make sure this is the correct path
  link.download = 'innvoice.png'; // The name you want the file to be downloaded as
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const Billing = () => {
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
                  <Button className="w-full">
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
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" /> Annual Statement (2024)
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" /> Tax Certificate (2024)
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" /> Warranty Information
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="payment" className="w-full max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="payment">Make a Payment</TabsTrigger>
            <TabsTrigger value="methods">Payment Methods</TabsTrigger>
          </TabsList>
          <TabsContent value="payment" className="pt-6">
            <PaymentForm />
          </TabsContent>
          <TabsContent value="methods" className="pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Saved Payment Methods</CardTitle>
                <CardDescription>
                  Manage your saved payment methods
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-md bg-blue-100 flex items-center justify-center">
                      <img
                        src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/visa.svg"
                        className="h-6 w-6"
                        alt="Visa"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-muted-foreground">
                        Expires 06/2028
                      </p>
                    </div>
                  </div>
                  <Badge>Default</Badge>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-md bg-red-100 flex items-center justify-center">
                      <img
                        src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mastercard.svg"
                        className="h-6 w-6"
                        alt="Mastercard"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Mastercard ending in 5555</p>
                      <p className="text-sm text-muted-foreground">
                        Expires 09/2027
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Set Default
                  </Button>
                </div>

                <Button className="w-full">
                  <Plus className="mr-2 h-4 w-4" /> Add New Payment Method
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Billing;
