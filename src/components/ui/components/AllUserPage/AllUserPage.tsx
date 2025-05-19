"use client"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Badge } from "@/components/ui/badge";
  import { Card } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Pencil, Trash2 } from "lucide-react";
  
  type Member = {
    depertment: string;
    email: string;
    isBlocked: boolean;
    name: string;
    phone: string;
    role: string;
    roll: string;
    session: string;
  };
  
  function MembersTable({ members }: { members: Member[] }) {
    const handleUpdate = (member: Member) => {
      // Add your update logic here
      console.log("Update member:", member);
    };
  
    const handleDelete = (member: Member) => {
      // Add your delete logic here
      console.log("Delete member:", member);
    };
  
    return (
      <Card className="bg-slate-900/50 backdrop-blur-sm border-0 shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-6">
            Astronomy Club Members
          </h2>
          <div className="rounded-lg overflow-hidden">
            <Table className="text-slate-300 border-0">
              <TableHeader className="bg-slate-800/50">
                <TableRow className="hover:bg-transparent border-0">
                  <TableHead className="text-slate-300 font-medium">Name</TableHead>
                  <TableHead className="text-slate-300 font-medium">Department</TableHead>
                  <TableHead className="text-slate-300 font-medium">Email</TableHead>
                  <TableHead className="text-slate-300 font-medium">Phone</TableHead>
                  <TableHead className="text-slate-300 font-medium">Roll</TableHead>
                  <TableHead className="text-slate-300 font-medium">Session</TableHead>
                  <TableHead className="text-slate-300 font-medium">Role</TableHead>
                  <TableHead className="text-slate-300 font-medium">Status</TableHead>
                  <TableHead className="text-slate-300 font-medium">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members.map((member) => (
                  <TableRow
                    key={member.email}
                    className="border-0 hover:bg-slate-800/30 transition-colors"
                  >
                    <TableCell className="font-medium text-white">
                      {member.name}
                    </TableCell>
                    <TableCell className="text-slate-400">{member.depertment}</TableCell>
                    <TableCell className="text-slate-400">{member.email}</TableCell>
                    <TableCell className="text-slate-400">{member.phone}</TableCell>
                    <TableCell className="text-slate-400">{member.roll}</TableCell>
                    <TableCell className="text-slate-400">{member.session}</TableCell>
                    <TableCell>
                      <Badge
                        variant={member.role === "admin" ? "default" : "secondary"}
                        className={
                          member.role === "admin"
                            ? "bg-indigo-600/80 hover:bg-indigo-600"
                            : "bg-slate-700/50 hover:bg-slate-700 text-gray-200"
                        }
                      >
                        {member.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={member.isBlocked ? "destructive" : "default"}
                        className={!member.isBlocked ? "bg-emerald-600/80 hover:bg-emerald-600" : ""}
                      >
                        {member.isBlocked ? "Blocked" : "Active"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-slate-300 hover:text-indigo-400 hover:bg-slate-700/50 p-2"
                          onClick={() => handleUpdate(member)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-slate-300 hover:text-red-400 hover:bg-slate-700/50 p-2"
                          onClick={() => handleDelete(member)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </Card>
    );
  }
  
  export default MembersTable;