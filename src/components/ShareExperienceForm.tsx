
import React from "react";
import { useForm } from "react-hook-form";
import { Upload, Image as ImageIcon } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  tripLocation: z.string().min(2, "Location must be at least 2 characters"),
  experience: z.string().min(10, "Please share at least 10 characters about your experience"),
});

type ShareExperienceFormData = z.infer<typeof formSchema>;

const ShareExperienceForm: React.FC = () => {
  const form = useForm<ShareExperienceFormData>({
    resolver: zodResolver(formSchema),
  });
  const [previews, setPreviews] = React.useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newPreviews = Array.from(files).map(file => URL.createObjectURL(file));
      setPreviews(prev => [...prev, ...newPreviews]);
    }
  };

  const onSubmit = (data: ShareExperienceFormData) => {
    console.log(data);
    toast.success("Thank you for sharing your experience! We'll review and publish it soon.");
    form.reset();
    setPreviews([]);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tripLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Trip Location</FormLabel>
              <FormControl>
                <Input placeholder="Where did you travel?" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Share Your Experience</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about your memorable moments..."
                  className="min-h-[150px]"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <FormLabel>Upload Photos</FormLabel>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              id="photo-upload"
              onChange={handleImageChange}
            />
            <label
              htmlFor="photo-upload"
              className="flex flex-col items-center cursor-pointer space-y-2"
            >
              <Upload className="h-8 w-8 text-gray-400" />
              <span className="text-gray-500">Click to upload photos</span>
              <span className="text-gray-400 text-sm">JPG, PNG up to 10MB each</span>
            </label>
          </div>

          {previews.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              {previews.map((preview, index) => (
                <div key={index} className="relative aspect-square">
                  <img
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <Button type="submit" className="w-full bg-india-saffron hover:bg-india-saffron/90">
          Submit Your Experience
        </Button>
      </form>
    </Form>
  );
};

export default ShareExperienceForm;
