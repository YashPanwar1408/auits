
import React, { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Eye, Download, FileText, Settings, User, Ticket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserDashboard = () => {
  const { user, profile } = useAuth();
  const [tickets, setTickets] = useState<any[]>([]);
  const [payments, setPayments] = useState<any[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetchUserTickets();
      fetchUserPayments();
    }
  }, [user]);

  const fetchUserTickets = async () => {
    try {
      const { data, error } = await supabase
        .from('tickets')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching tickets:', error);
        return;
      }

      setTickets(data || []);
    } catch (error) {
      console.error('Error in fetchUserTickets:', error);
    }
  };

  const fetchUserPayments = async () => {
    try {
      const { data, error } = await supabase
        .from('payments')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching payments:', error);
        return;
      }

      setPayments(data || []);
    } catch (error) {
      console.error('Error in fetchUserPayments:', error);
    }
  };

  const getInitials = (name: string) => {
    if (!name) return "U";
    return name.split(' ').map(part => part[0]).join('').toUpperCase();
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">User Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your profile, tickets, and payments
            </p>
          </div>
          <Button onClick={() => navigate('/settings')}>
            <Settings className="h-4 w-4 mr-1" /> Account Settings
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>User Profile</CardTitle>
              <CardDescription>Your account information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={user?.user_metadata?.avatar_url || profile?.avatar_url} />
                    <AvatarFallback className="text-xl bg-primary text-primary-foreground">
                      {getInitials(user?.user_metadata?.full_name || `${profile?.first_name || ''} ${profile?.last_name || ''}`)}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex-grow space-y-2">
                  <div>
                    <span className="text-muted-foreground">Name:</span>
                    <div className="font-medium">
                      {user?.user_metadata?.full_name || `${profile?.first_name || ''} ${profile?.last_name || ''}` || 'Not specified'}
                    </div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Email:</span>
                    <div className="font-medium">{user?.email || profile?.email || 'Not specified'}</div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" onClick={() => navigate('/settings')}>
                      <User className="h-4 w-4 mr-1" /> Edit Profile
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Account Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="tickets" className="w-full">
                <TabsList>
                  <TabsTrigger value="tickets">Support Tickets</TabsTrigger>
                  <TabsTrigger value="payments">Payment History</TabsTrigger>
                </TabsList>
                
                <TabsContent value="tickets" className="pt-6">
                  {tickets.length > 0 ? (
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Ticket ID</TableHead>
                            <TableHead>Issue</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Priority</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {tickets.map((ticket) => (
                            <TableRow key={ticket.id}>
                              <TableCell className="font-medium">
                                {ticket.id.substring(0, 8).toUpperCase()}
                              </TableCell>
                              <TableCell>{ticket.title}</TableCell>
                              <TableCell>
                                {new Date(ticket.created_at).toLocaleDateString()}
                              </TableCell>
                              <TableCell>
                                <Badge
                                  variant="outline"
                                  className={
                                    ticket.status === "open"
                                      ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                                      : ticket.status === "in-progress"
                                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                                      : ticket.status === "resolved"
                                      ? "bg-green-500 hover:bg-green-600 text-white"
                                      : "bg-gray-500 hover:bg-gray-600 text-white"
                                  }
                                >
                                  {ticket.status.replace("-", " ")}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge
                                  variant="outline"
                                  className={
                                    ticket.priority === "high"
                                      ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                                      : ticket.priority === "medium"
                                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                      : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                  }
                                >
                                  {ticket.priority}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <Button size="sm" variant="ghost">
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  ) : (
                    <div className="text-center py-8 border rounded-md">
                      <Ticket className="mx-auto h-12 w-12 text-muted-foreground mb-3" />
                      <h3 className="text-lg font-medium mb-1">No Tickets Found</h3>
                      <p className="text-muted-foreground mb-4">You haven't created any support tickets yet.</p>
                      <Button onClick={() => navigate('/tickets/new')}>
                        Create New Ticket
                      </Button>
                    </div>
                  )}
                  {tickets.length > 0 && (
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" onClick={() => navigate('/tickets')}>
                        View All Tickets
                      </Button>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="payments" className="pt-6">
                  {payments.length > 0 ? (
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Payment ID</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Purpose</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {payments.map((payment) => (
                            <TableRow key={payment.id}>
                              <TableCell className="font-medium">
                                {payment.razorpay_payment_id || payment.id.substring(0, 8).toUpperCase()}
                              </TableCell>
                              <TableCell>
                                {new Intl.NumberFormat('en-IN', {
                                  style: 'currency',
                                  currency: payment.currency || 'INR',
                                }).format(payment.amount)}
                              </TableCell>
                              <TableCell>
                                {new Date(payment.created_at).toLocaleDateString()}
                              </TableCell>
                              <TableCell>
                                {payment.payment_purpose || 'System Maintenance'}
                              </TableCell>
                              <TableCell>
                                <Badge
                                  variant="outline"
                                  className={
                                    payment.status === "paid" || payment.status === "completed"
                                      ? "bg-green-500 hover:bg-green-600 text-white"
                                      : payment.status === "pending"
                                      ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                                      : payment.status === "failed"
                                      ? "bg-red-500 hover:bg-red-600 text-white"
                                      : "bg-gray-500 hover:bg-gray-600 text-white"
                                  }
                                >
                                  {payment.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <Button size="sm" variant="ghost">
                                  <Download className="h-4 w-4" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  ) : (
                    <div className="text-center py-8 border rounded-md">
                      <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-3" />
                      <h3 className="text-lg font-medium mb-1">No Payments Found</h3>
                      <p className="text-muted-foreground mb-4">You haven't made any payments yet.</p>
                      <Button onClick={() => navigate('/billing')}>
                        Make a Payment
                      </Button>
                    </div>
                  )}
                  {payments.length > 0 && (
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" onClick={() => navigate('/billing')}>
                        View All Payments
                      </Button>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
