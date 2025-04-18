
import React from "react";
import { useForm } from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  destination: z.string().min(1, "Please select a destination"),
  travelDates: z.string().min(1, "Please select travel dates"),
  groupSize: z.string().min(1, "Please select group size"),
  budget: z.string().min(1, "Please select budget range"),
  preferences: z.string().optional(),
});

type CustomizeTripFormData = z.infer<typeof formSchema>;

const CustomizeTripForm: React.FC = () => {
  const form = useForm<CustomizeTripFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      destination: "",
      travelDates: "",
      groupSize: "",
      budget: "",
      preferences: "",
    }
  });

  const onSubmit = (data: CustomizeTripFormData) => {
    console.log(data);
    toast.success("Thank you! We'll get back to you soon with a customized itinerary.");
    form.reset();
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Customize Your Trip</h2>
          <p className="text-gray-600">Tell us your preferences and let us create your perfect Indian adventure</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Your email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="destination"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Destination</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a destination" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="rajasthan">Rajasthan</SelectItem>
                        <SelectItem value="kerala">Kerala</SelectItem>
                        <SelectItem value="himachal">Himachal Pradesh</SelectItem>
                        <SelectItem value="goa">Goa</SelectItem>
                        <SelectItem value="ladakh">Ladakh</SelectItem>
                        <SelectItem value="andaman">Andaman Islands</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="travelDates"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Travel Dates</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input type="date" {...field} min={new Date().toISOString().split('T')[0]} />
                        <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="groupSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Group Size</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select group size" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1-2">1-2 people</SelectItem>
                        <SelectItem value="3-5">3-5 people</SelectItem>
                        <SelectItem value="6-10">6-10 people</SelectItem>
                        <SelectItem value="10+">More than 10</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget Range (₹)</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="budget">25,000 - 50,000</SelectItem>
                        <SelectItem value="mid">50,000 - 1,00,000</SelectItem>
                        <SelectItem value="luxury">1,00,000+</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="preferences"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Preferences</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your interests, preferences, or any special requirements..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-india-saffron hover:bg-india-saffron/90">
              Submit Request
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default CustomizeTripForm;
