import React from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const Settings = () => (
  <Layout>
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-4">Settings</h1>
        <p className="text-muted-foreground mb-6">Manage your account settings and preferences below.</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">User Preferences</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input type="text" className="w-full rounded bg-[#23233b] p-2 text-white" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input type="email" className="w-full rounded bg-[#23233b] p-2 text-white" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm mb-1">Theme</label>
                <select className="w-full rounded bg-[#23233b] p-2 text-white">
                  <option>Dark</option>
                  <option>Light</option>
                </select>
              </div>
            </div>
            <button className="mt-6 px-6 py-2 rounded bg-purple-600 hover:bg-purple-700 font-semibold">Save Changes</button>
          </CardContent>
        </Card>
        {/* You can add a sidebar card here if needed for extra info or links */}
      </div>
    </div>
  </Layout>
);

export default Settings;
