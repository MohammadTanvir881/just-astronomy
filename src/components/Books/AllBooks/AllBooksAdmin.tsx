"use client";
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
import { Pencil, Trash2, Download } from "lucide-react";
import Image from "next/image";

type Book = {
  _id: string;
  title: string;
  author: string;
  bookImage: string;
  downloadLink: string;
  createdAt: string;
};

function MagazinesTable({ books }: { books: Book[] }) {
  console.log("Books:", books);

  const handleEdit = (book: Book) => {
    // Add your edit logic here
    console.log("Edit books:", book);
  };

  const handleDelete = (book: Book) => {
    // Add your delete logic here
    console.log("Delete Book:", book);
  };

  const handleDownload = (downloadLink: string) => {
    // Add your download logic here
    console.log("Download link:", downloadLink);
    window.open(downloadLink, "_blank");
  };

  return (
    <Card className="bg-slate-900/50 backdrop-blur-sm border-0 shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white mb-6">
          Books Collection
        </h2>
        <div className="rounded-lg overflow-hidden">
          <Table className="text-slate-300 border-0">
            <TableHeader className="bg-slate-800/50">
              <TableRow className="hover:bg-transparent border-0">
                <TableHead className="text-slate-300 font-medium">
                  Cover
                </TableHead>
                <TableHead className="text-slate-300 font-medium">
                  Title
                </TableHead>
                <TableHead className="text-slate-300 font-medium">
                  Author
                </TableHead>
                <TableHead className="text-slate-300 font-medium">
                  Added Date
                </TableHead>
                <TableHead className="text-slate-300 font-medium text-right">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {books?.map((book) => (
                <TableRow
                  key={book._id}
                  className="border-0 hover:bg-slate-800/30 transition-colors"
                >
                  <TableCell>
                    <div className="relative h-16 w-16 rounded-md overflow-hidden">
                      <img
                        src={
                          book.bookImage || "/placeholder-magazine.jpg"
                        }
                        alt={book.title}
                        width={64}
                        height={64}
                        loading="lazy"
                        style={{ objectFit: "cover" }}
                        className="object-cover"
                      />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium text-white">
                    {book.title}
                  </TableCell>
                  <TableCell className="text-slate-400">
                    {book.author}
                  </TableCell>
                  <TableCell className="text-slate-400">
                    {new Date(book.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2 justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-slate-300 hover:text-emerald-400 hover:bg-slate-700/50 p-2"
                        onClick={() => handleDownload(book.downloadLink)}
                        title="Download"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-slate-300 hover:text-indigo-400 hover:bg-slate-700/50 p-2"
                        onClick={() => handleEdit(book)}
                        title="Edit"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-slate-300 hover:text-red-400 hover:bg-slate-700/50 p-2"
                        onClick={() => handleDelete(book)}
                        title="Delete"
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

export default MagazinesTable;
