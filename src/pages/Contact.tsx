
import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { useRegion } from '@/context/RegionContext';
import { regions } from '@/data';
import Hero from '@/components/Hero';
import { Mail, Phone, MapPin } from 'lucide-react';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(8, { message: "Please enter a valid phone number." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
  const { currentRegion } = useRegion();
  const regionData = regions.find(r => r.id === currentRegion);

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // Form submission handler
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", values);
    
    // Show success message
    toast({
      title: "Form submitted",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    
    // Reset form
    form.reset();
  };

  return (
    <div>
      <Hero 
        small={true} 
        title="Get in Touch" 
        subtitle="Have a project in mind? Let's discuss how we can help you achieve your business goals."
      />

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-salt-blue/10 text-salt-blue rounded-full mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">{regionData?.email || "contact@salttechnologies.com"}</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-salt-blue/10 text-salt-blue rounded-full mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">{regionData?.phone || "+1 (555) 123-4567"}</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-salt-blue/10 text-salt-blue rounded-full mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">{regionData?.address || "123 Business Ave, Tech City"}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
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
                            <Input type="email" placeholder="Your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Message subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project or inquiry" 
                            className="min-h-32" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full md:w-auto bg-salt-blue hover:bg-salt-darkBlue text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>

            {/* Map or Image */}
            <div className="relative rounded-lg overflow-hidden shadow-lg h-[500px]">
              <img 
                src="/public/lovable-uploads/bd4a76d6-1823-4f00-b7d2-071f42d25425.png" 
                alt="Office location" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6">
                <h3 className="text-xl font-semibold mb-2">{regionData?.name || "Global Headquarters"}</h3>
                <p>{regionData?.address || "123 Business Ave, Tech City"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">What services do you offer?</h3>
              <p className="text-gray-600">We offer a comprehensive range of software development services including web and mobile app development, custom software solutions, UI/UX design, quality assurance, and maintenance.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">How long does a typical project take?</h3>
              <p className="text-gray-600">Project timelines vary based on complexity and requirements. Simple websites may take 2-4 weeks, while complex applications can take several months. We'll provide you with a detailed timeline during the consultation.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Do you offer support after the project is completed?</h3>
              <p className="text-gray-600">Yes, we provide ongoing maintenance and support services to ensure your software continues to run smoothly after launch. We offer different support packages tailored to your needs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">How do we get started?</h3>
              <p className="text-gray-600">Getting started is easy! Fill out the contact form above or call us directly to schedule a free consultation. We'll discuss your requirements and provide you with a proposal and quote.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
