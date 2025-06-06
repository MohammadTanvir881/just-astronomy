"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { createMegazine } from "@/services/ManageMagazine";

// Define form schema for magazine
const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  magazineImage: z.string().min(2, {
    message: "Image URL must be at least 2 characters.",
  }),
  author: z.string().min(2, {
    message: "Author name must be at least 2 characters.",
  }),
  downloadLink: z.string().url({
    message: "Please enter a valid URL for the download link.",
  }),
});

function MagazineCreationForm() {
  // Define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      magazineImage: "",
      author: "",
      downloadLink: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const magazineData = {
      title: values.title,
      magazineImage: values.magazineImage,
      author: values.author,
      downloadLink: values.downloadLink,
    };
    
    console.log("Magazine Data:", magazineData);
    
    try {
      const res = await createMegazine(magazineData); // You'll need to implement this function
      console.log("Response:", res);
      if (res.success) {
        toast.success("Magazine created successfully");
        form.reset();
      } else if (res.error) {
        toast.error(res.error);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Create New Magazine
          </h1>
          <p className="text-slate-300">
            Add a new magazine to the collection
          </p>
        </div>

        <div className="bg-slate-800 rounded-lg shadow-xl p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {/* Title Field */}
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Magazine Title"
                          {...field}
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Author Field */}
                <FormField
                  control={form.control}
                  name="author"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Author</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Author Name"
                          {...field}
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Magazine Image Field */}
                <FormField
                  control={form.control}
                  name="magazineImage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">
                        Magazine Image URL
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://example.com/image.jpg"
                          {...field}
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Download Link Field */}
                <FormField
                  control={form.control}
                  name="downloadLink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">
                        Download Link
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://example.com/magazine.pdf"
                          {...field}
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Create Magazine
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default MagazineCreationForm;