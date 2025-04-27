
import React from "react";
import { Layout } from "@/components/Layout";
import { DashboardStats } from "@/components/DashboardStats";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Bell, CheckCircle, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Here's an overview of your solar system
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => navigate("/tickets/new")}>
              <Plus className="h-4 w-4 mr-1" /> New Ticket
            </Button>
          </div>
        </div>

        <DashboardStats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Tabs defaultValue="alerts" className="lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="alerts">System Alerts</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            <TabsContent value="alerts" className="space-y-4">
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    <div className="flex items-center gap-4 p-4">
                      <div className="h-10 w-10 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center text-yellow-600 dark:text-yellow-300">
                        <AlertCircle className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Inverter Warning</h4>
                        <p className="text-sm text-muted-foreground">
                          Inverter temperature higher than normal. Consider scheduling a check-up.
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground">10min ago</div>
                    </div>
                    <div className="flex items-center gap-4 p-4">
                      <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-300">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">System Maintenance Completed</h4>
                        <p className="text-sm text-muted-foreground">
                          The scheduled maintenance was completed successfully.
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground">2h ago</div>
                    </div>
                    <div className="flex items-center gap-4 p-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300">
                        <Bell className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Firmware Update Available</h4>
                        <p className="text-sm text-muted-foreground">
                          A new firmware update (v2.3.1) is available for your system.
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground">1d ago</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notifications" className="space-y-4">
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    <div className="flex items-center gap-4 p-4">
                      <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300">
                        <Bell className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Support Ticket Updated</h4>
                        <p className="text-sm text-muted-foreground">
                          Ticket #1234 has been updated with a new response.
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground">3h ago</div>
                    </div>
                    <div className="flex items-center gap-4 p-4">
                      <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300">
                        <Bell className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Invoice Generated</h4>
                        <p className="text-sm text-muted-foreground">
                          Your monthly invoice for April 2025 is now available.
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground">2d ago</div>
                    </div>
                    <div className="flex items-center gap-4 p-4">
                      <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300">
                        <Bell className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Scheduled Maintenance</h4>
                        <p className="text-sm text-muted-foreground">
                          Reminder: Your scheduled maintenance is tomorrow at 10:00 AM.
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground">1w ago</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Commonly used features and actions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button 
                variant="outline" 
                className="w-full justify-start text-left"
                onClick={() => navigate("/tickets/new")}
              >
                <Plus className="h-4 w-4 mr-2" /> Create New Support Ticket
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start text-left"
                onClick={() => navigate("/knowledge")}
              >
                <AlertCircle className="h-4 w-4 mr-2" /> Access Knowledge Base
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start text-left"
                onClick={() => navigate("/billing")}
              >
                <Bell className="h-4 w-4 mr-2" /> View Payment History
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start text-left"
                onClick={() => navigate("/settings")}
              >
                <CheckCircle className="h-4 w-4 mr-2" /> Update User Profile
              </Button>
            </CardContent>
          </Card>
        </div>

      </div>
    </Layout>
  );
};

export default Dashboard;
