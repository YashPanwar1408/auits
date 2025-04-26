
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Legend
} from "recharts";

const energyData = [
  { name: 'Jan', production: 4000, consumption: 2400 },
  { name: 'Feb', production: 3000, consumption: 1398 },
  { name: 'Mar', production: 5000, consumption: 3800 },
  { name: 'Apr', production: 2780, consumption: 3908 },
  { name: 'May', production: 4890, consumption: 4800 },
  { name: 'Jun', production: 3390, consumption: 3800 },
];

const ticketsData = [
  { name: 'Mon', tickets: 4 },
  { name: 'Tue', tickets: 3 },
  { name: 'Wed', tickets: 2 },
  { name: 'Thu', tickets: 7 },
  { name: 'Fri', tickets: 5 },
  { name: 'Sat', tickets: 1 },
  { name: 'Sun', tickets: 0 },
];

const savingsData = [
  { name: 'Jan', savings: 340 },
  { name: 'Feb', savings: 380 },
  { name: 'Mar', savings: 420 },
  { name: 'Apr', savings: 450 },
  { name: 'May', savings: 470 },
  { name: 'Jun', savings: 500 },
];

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-full md:col-span-2">
        <CardHeader>
          <CardTitle>Solar Energy Production & Consumption</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={energyData}>
                <defs>
                  <linearGradient id="colorProduction" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b57ff" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8b57ff" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorConsumption" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#399eff" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#399eff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="production" stroke="#8b57ff" fillOpacity={1} fill="url(#colorProduction)" />
                <Area type="monotone" dataKey="consumption" stroke="#399eff" fillOpacity={1} fill="url(#colorConsumption)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Support Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ticketsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="tickets" fill="#8b57ff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Energy Cost Savings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={savingsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  formatter={(value: number) => [`$${value}`, 'Savings']}
                />
                <Line 
                  type="monotone" 
                  dataKey="savings" 
                  stroke="#399eff" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>System Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-lg bg-gradient-to-br from-solar-50 to-solar-100 dark:from-solar-900 dark:to-solar-800">
              <p className="text-sm text-muted-foreground">Current Output</p>
              <h3 className="text-2xl font-bold">4.8 kWh</h3>
              <p className="text-sm text-emerald-600">↑ 12% from average</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-br from-auits-50 to-auits-100 dark:from-auits-900 dark:to-auits-800">
              <p className="text-sm text-muted-foreground">Efficiency Rate</p>
              <h3 className="text-2xl font-bold">96.2%</h3>
              <p className="text-sm text-emerald-600">↑ 2.1% from last month</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
              <p className="text-sm text-muted-foreground">Total Savings</p>
              <h3 className="text-2xl font-bold">$2,580</h3>
              <p className="text-sm text-emerald-600">Since installation</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
