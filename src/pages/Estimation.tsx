
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import Hero from '@/components/Hero';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useRegion } from '@/context/RegionContext';
import { regions, services } from '@/data';
import { Link } from 'react-router-dom';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  projectDescription: z.string().min(50, { message: "Please provide at least 50 characters of project description." }),
  budget: z.string().min(1, { message: "Please select a budget range." }),
  timeline: z.string().min(1, { message: "Please select a timeline." }),
  services: z.array(z.string()).min(1, { message: "Please select at least one service." }),
  terms: z.boolean().refine(val => val === true, { message: "You must agree to the terms and conditions." })
});

const Estimation = () => {
  const { toast } = useToast();
  const { currentRegion } = useRegion();
  const regionData = regions.find(r => r.id === currentRegion);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      projectDescription: "",
      budget: "",
      timeline: "",
      services: [],
      terms: false
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Estimation request submitted",
      description: "We'll get back to you with a detailed estimation shortly.",
    });
    form.reset();
  }

  return (
    <div>
      <Hero 
        small
        title="Request a Free Estimation"
        subtitle="Get a detailed cost and timeline estimate for your software project"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Tell us about your project</h2>
                <p className="text-gray-600">
                  Please provide us with some information about your project so we can give you an accurate estimation. 
                  One of our experts will review your requirements and get back to you within 24 hours.
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Jane Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your Company Ltd." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="jane@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+1 (555) 000-0000" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="projectDescription"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Description</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please describe your project in detail. Include features, requirements, and any specific technologies you'd like to use." 
                                className="min-h-32" 
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>
                              The more details you provide, the more accurate our estimation will be.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="budget"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Estimated Budget</FormLabel>
                              <FormControl>
                                <select 
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                  {...field}
                                >
                                  <option value="">Select budget range</option>
                                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                  <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                                  <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                                  <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                                  <option value="$100,000+">$100,000+</option>
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="timeline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Project Timeline</FormLabel>
                              <FormControl>
                                <select 
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                  {...field}
                                >
                                  <option value="">Select timeline</option>
                                  <option value="Less than 1 month">Less than 1 month</option>
                                  <option value="1-3 months">1-3 months</option>
                                  <option value="3-6 months">3-6 months</option>
                                  <option value="6-12 months">6-12 months</option>
                                  <option value="More than 12 months">More than 12 months</option>
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="services"
                        render={() => (
                          <FormItem>
                            <div className="mb-4">
                              <FormLabel>Services Required</FormLabel>
                              <FormDescription>
                                Select all services that apply to your project.
                              </FormDescription>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {services.map((service) => (
                                <FormField
                                  key={service.id}
                                  control={form.control}
                                  name="services"
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={service.id}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                      >
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(service.title)}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([...field.value, service.title])
                                                : field.onChange(
                                                    field.value?.filter(
                                                      (value) => value !== service.title
                                                    )
                                                  )
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal cursor-pointer">
                                          {service.title}
                                        </FormLabel>
                                      </FormItem>
                                    )
                                  }}
                                />
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="terms"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I agree to the terms and conditions
                              </FormLabel>
                              <FormDescription>
                                By submitting this form, you agree to our privacy policy and terms of service.
                              </FormDescription>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full bg-salt-blue hover:bg-salt-darkBlue">
                        Submit Request
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Why Choose SALT Technologies?</h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="text-salt-blue mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Experienced Team</h4>
                        <p className="text-sm text-gray-600">Our experts have years of experience in software development across various industries.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-salt-blue mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Transparent Pricing</h4>
                        <p className="text-sm text-gray-600">No hidden fees or surprises. We provide detailed cost breakdowns for all our projects.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-salt-blue mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Timely Delivery</h4>
                        <p className="text-sm text-gray-600">We commit to realistic timelines and ensure on-time delivery of your projects.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-salt-blue mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Ongoing Support</h4>
                        <p className="text-sm text-gray-600">We don't just build and leave. Our team provides continuous support after project completion.</p>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-6 border-t pt-6">
                    <h4 className="font-medium mb-2">Contact {regionData?.flag} {regionData?.name}</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Have questions before submitting a request? Reach out to our regional office directly.
                    </p>
                    <Link to="/contact">
                      <Button variant="outline" className="w-full flex items-center justify-center">
                        Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Estimation;
