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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { createUser } from "@/services/ManageUsers/Index";

// Define form schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  image: z.string().min(2, {
    message: "Image URL must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  session: z.string().min(4, {
    message: "Session must be at least 4 characters (e.g., 2023-24).",
  }),
  department: z.string().min(2, {
    message: "Department must be at least 2 characters.",
  }),
  phone: z.string().min(11, {
    message: "Phone number must be at least 11 digits.",
  }),
  roll: z.string().min(4, {
    message: "Roll must be at least 4 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  role: z.enum(["user", "admin"]),
  isBlocked: z.boolean(),
});

function UserRegistrationForm() {
  // Define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      image: "",
      email: "",
      session: "",
      department: "",
      phone: "",
      roll: "",
      password: "",
      role: "user",
      isBlocked: false,
    },
  });

// Handle form submission
const onSubmit = async (values: z.infer<typeof formSchema>) => {
  const userData = {
    name: values.name,
    image: values.image,
    email: values.email,
    session: values.session,
    depertment: values.department,
    phone: values.phone,
    roll: values.roll,
    password: values.password,
    role: values.role,
    isBlocked: values.isBlocked,
  };
  console.log("userData", userData);
  try {
    const res = await createUser(userData);
    console.log("res", res);
    if (res.success) {
      toast.success("User created successfully");
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
            Astronomy Club Member Registration
          </h1>
          <p className="text-slate-300">
            Register new members for the astronomy club
          </p>
        </div>

        <div className="bg-slate-800 rounded-lg shadow-xl p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="john@example.com"
                          {...field}
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Session Field */}
                <FormField
                  control={form.control}
                  name="session"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">
                        Academic Session
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="2023-24"
                          {...field}
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Department Field */}
                <FormField
                  control={form.control}
                  name="department"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">
                        Department
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Physics"
                          {...field}
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone Field */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="01XXXXXXXXX"
                          {...field}
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Roll Field */}
                <FormField
                  control={form.control}
                  name="roll"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">
                        University Roll
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="123456"
                          {...field}
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••"
                          {...field}
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Role Field */}
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Role</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="w-full">
                          <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-slate-700 border-slate-600 text-white">
                          <SelectItem value="user">Member</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Img Field */}

                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">
                        Image URL
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Image URL"
                          {...field}
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Blocked Status Field */}
                <FormField
                  control={form.control}
                  name="isBlocked"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center  justify-between rounded-lg border border-slate-600 p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-slate-300">
                          Block User
                        </FormLabel>
                        <p className="text-sm text-slate-400">
                          Prevent this user from accessing the system
                        </p>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-red-500"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Register Member
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default UserRegistrationForm;
