
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Ticket {
  id: string;
  title: string;
  date: string;
  status: "open" | "in-progress" | "resolved" | "closed";
  priority: "low" | "medium" | "high";
}

const tickets: Ticket[] = [
  {
    id: "TICKET-1234",
    title: "Solar panel not generating expected output",
    date: "2025-04-15",
    status: "open",
    priority: "high",
  },
  {
    id: "TICKET-1233",
    title: "Inverter showing error code E-13",
    date: "2025-04-12",
    status: "in-progress",
    priority: "high",
  },
  {
    id: "TICKET-1232",
    title: "Request for system maintenance",
    date: "2025-04-10",
    status: "in-progress",
    priority: "medium",
  },
  {
    id: "TICKET-1231",
    title: "Question about monthly report",
    date: "2025-04-05",
    status: "resolved",
    priority: "low",
  },
  {
    id: "TICKET-1230",
    title: "Battery backup system inquiry",
    date: "2025-03-28",
    status: "closed",
    priority: "medium",
  },
];

const statusColors = {
  open: "bg-yellow-500 hover:bg-yellow-600",
  "in-progress": "bg-blue-500 hover:bg-blue-600",
  resolved: "bg-green-500 hover:bg-green-600",
  closed: "bg-gray-500 hover:bg-gray-600",
};

const priorityVariants = {
  low: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
};

export const TicketList = () => {
  const navigate = useNavigate();

  return (
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
              <TableCell className="font-medium">{ticket.id}</TableCell>
              <TableCell>{ticket.title}</TableCell>
              <TableCell>{ticket.date}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={`${statusColors[ticket.status]} text-white`}
                >
                  {ticket.status.replace("-", " ")}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={priorityVariants[ticket.priority]}
                >
                  {ticket.priority}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate(`/tickets/${ticket.id}`)}
                  >
                    <Eye className="h-4 w-4 mr-1" /> View
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate(`/tickets/${ticket.id}`)}
                  >
                    <MessageSquare className="h-4 w-4 mr-1" /> Respond
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
