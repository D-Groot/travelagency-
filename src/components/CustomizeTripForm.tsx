
import React from "react";
import { useForm } from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { toast } from "sonner";

interface CustomizeTripFormData {
  name: string;
  email: string;
  destination: string;
  travelDates: string;
  groupSize: string;
  budget: string;
  preferences: string;
}

const CustomizeTripForm: React.FC = () => {
  const form = useForm<CustomizeTripFormData>();

  const onSubmit = (data: CustomizeTripFormData) => {
    console.log(data);
    toast.success("Thank you! We'll get back to you soon with a customized itinerary.");
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
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="destination"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Destination</FormLabel>
                    <Select>
                      <option value="">Select a destination</option>
                      <option value="rajasthan">Rajasthan</option>
                      <option value="kerala">Kerala</option>
                      <option value="himachal">Himachal Pradesh</option>
                      <option value="goa">Goa</option>
                    </Select>
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
                        <Input type="date" {...field} />
                        <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="groupSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Group Size</FormLabel>
                    <Select {...field}>
                      <option value="">Select group size</option>
                      <option value="1-2">1-2 people</option>
                      <option value="3-5">3-5 people</option>
                      <option value="6-10">6-10 people</option>
                      <option value="10+">More than 10</option>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget Range (₹)</FormLabel>
                    <Select {...field}>
                      <option value="">Select budget range</option>
                      <option value="budget">25,000 - 50,000</option>
                      <option value="mid">50,000 - 1,00,000</option>
                      <option value="luxury">1,00,000+</option>
                    </Select>
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
                    <textarea 
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-india-saffron"
                      placeholder="Tell us about your interests, preferences, or any special requirements..."
                      rows={4}
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
