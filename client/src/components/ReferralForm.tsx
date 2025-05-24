import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

// Updated schema with phone validation
const referralFormSchema = z.object({
  name: z.string().min(2, "Your name is required"),
  phone: z.string().min(10, "Please enter a valid 10-digit phone number"),
  friendName: z.string().min(2, "Friend's name is required"),
  friendPhone: z.string().min(10, "Please enter a valid 10-digit phone number for your friend"),
});

type ReferralFormData = z.infer<typeof referralFormSchema>;

const ReferralForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReferralFormData>({
    resolver: zodResolver(referralFormSchema),
  });

  const onSubmit = async (data: ReferralFormData) => {
    setIsSubmitting(true);
    
    try {
      // Send data to Google Sheets (see Step 2 for setup)
      await fetch("https://script.google.com/macros/s/AKfycbysC1iqRsJ2g_JC7XR3A1Dd4Nh1TRYqvY85dIG1ld5V5aCqmU_d_6QF3dTvYebyrLpLag/exec", {
        method: "POST",
        body: JSON.stringify(data),
      });

      reset();
      toast({
        title: "Referral submitted!",
        description: "Thank you for your referral!",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 bg-card rounded-xl border border-border card-3d"
    >
      <h3 className="text-2xl font-montserrat font-bold mb-6">Join Our Referral Program</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Your Name (unchanged) */}
        <div>
          <label htmlFor="name" className="block text-muted-foreground mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className={`w-full bg-muted border ${
              errors.name ? "border-destructive" : "border-border"
            } focus:border-primary rounded-lg px-4 py-3 text-foreground outline-none transition-colors duration-300`}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        {/* Your Phone (replaced email) */}
        <div>
          <label htmlFor="phone" className="block text-muted-foreground mb-2">
            Your Phone (+91)
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone")}
            className={`w-full bg-muted border ${
              errors.phone ? "border-destructive" : "border-border"
            } focus:border-primary rounded-lg px-4 py-3 text-foreground outline-none transition-colors duration-300`}
            placeholder="Enter your phone number"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>

        {/* Friend's Name (unchanged) */}
        <div>
          <label htmlFor="friendName" className="block text-muted-foreground mb-2">
            Client's Name
          </label>
          <input
            type="text"
            id="friendName"
            {...register("friendName")}
            className={`w-full bg-muted border ${
              errors.friendName ? "border-destructive" : "border-border"
            } focus:border-primary rounded-lg px-4 py-3 text-foreground outline-none transition-colors duration-300`}
            placeholder="Enter your friend's name"
          />
          {errors.friendName && (
            <p className="mt-1 text-sm text-destructive">{errors.friendName.message}</p>
          )}
        </div>

        {/* Friend's Phone (replaced email) */}
        <div>
          <label htmlFor="friendPhone" className="block text-muted-foreground mb-2">
            Client's Phone (+91)
          </label>
          <input
            type="tel"
            id="friendPhone"
            {...register("friendPhone")}
            className={`w-full bg-muted border ${
              errors.friendPhone ? "border-destructive" : "border-border"
            } focus:border-primary rounded-lg px-4 py-3 text-foreground outline-none transition-colors duration-300`}
            placeholder="Enter your friend's phone number"
          />
          {errors.friendPhone && (
            <p className="mt-1 text-sm text-destructive">{errors.friendPhone.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-full transition-all duration-300 font-medium"
        >
          {isSubmitting ? "Submitting..." : "Submit Referral"}
        </button>
      </form>
    </motion.div>
  );
};

export default ReferralForm;
