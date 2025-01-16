'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

import { useAction } from 'next-safe-action/hooks';
import { toast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { submitContact } from '@/app/action';

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, {
    message: 'Phone number must be at least 10 digits.',
  }),
  buyingTimeline: z
    .string({
      required_error: "Please select when you're planning to buy.",
    })
    .min(1, {
      message: "Please select when you're planning to buy.",
    }),
});

export function ContactForm() {
  const router = useRouter();
  const { execute, status } = useAction(submitContact, {
    onSuccess(data) {
      if (data?.data?.success) {
        toast({
          variant: 'default',
          title: 'Success',
          description: 'Your message has been sent successfully!',
        });
        form.reset();
        router.push('/thank-you');
      }
      if (data?.data?.error) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: data?.data?.error ?? 'Failed to send message',
        });
      }
    },
    onError(error) {
      console.error('Submit error:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
      });
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      buyingTimeline: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    execute(values);
  }

  return (
    <Form {...form}>
      <motion.form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`space-y-4 bg-background/80 backdrop-blur-sm p-6 rounded-2xl border shadow-lg`}
      >
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="truncate">Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="truncate">Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="truncate">Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="Phone Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2">
          <Select
            onValueChange={value => form.setValue('buyingTimeline', value)}
            defaultValue={form.getValues('buyingTimeline')}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="When are you planning to buy?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="within_3_months">Within 3 months</SelectItem>
              <SelectItem value="within_6_months">Within 6 months</SelectItem>
              <SelectItem value="within_1_year">Within 1 year</SelectItem>
              <SelectItem value="after_1_year">After 1 year</SelectItem>
            </SelectContent>
          </Select>
          {form.formState.errors.buyingTimeline && (
            <p className="text-sm text-red-500">
              {form.formState.errors.buyingTimeline.message}
            </p>
          )}
        </div>
        <Button
          type="submit"
          className="w-full"
          disabled={status === 'executing'}
        >
          {status === 'executing' ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            'Enquire Now'
          )}
        </Button>
      </motion.form>
    </Form>
  );
}
