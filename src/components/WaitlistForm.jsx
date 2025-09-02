import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Step1 = ({ onNext, register, errors }) => (
  <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -300, opacity: 0 }}
    transition={{ ease: "easeInOut", duration: 0.5 }}
    className="space-y-6"
  >
    <div className="space-y-2">
      <Label htmlFor="firstName">First Name</Label>
      <Input
        id="firstName"
        placeholder="e.g., Alex"
        {...register("firstName", { required: "First name is required" })}
        className="bg-brand-dark border-white/20"
      />
      {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
    </div>
    <div className="space-y-2">
      <Label htmlFor="email">Email Address</Label>
      <Input
        id="email"
        type="email"
        placeholder="you@example.com"
        {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
        className="bg-brand-dark border-white/20"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
    </div>
    <Button type="button" onClick={onNext} className="w-full bg-brand-teal text-brand-dark hover:bg-brand-teal/90">
      Join the Waitlist
    </Button>
  </motion.div>
);

const Step2 = ({ onPrev, register, errors, setValue }) => (
  <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -300, opacity: 0 }}
    transition={{ ease: "easeInOut", duration: 0.5 }}
    className="space-y-6"
  >
    <div className="text-center">
      <h3 className="text-2xl font-bold text-brand-teal">You're on the list!</h3>
      <p className="text-gray-400 mt-2">Give yourself a head start. Fill this out so your profile is ready at launch.</p>
    </div>
    <div className="space-y-2">
      <Label htmlFor="primaryGoal">What is your #1 goal for the next 6 months?</Label>
      <Input
        id="primaryGoal"
        placeholder="e.g., Launch my SaaS business"
        {...register("primaryGoal", { required: "This field is required" })}
        className="bg-brand-dark border-white/20"
      />
       {errors.primaryGoal && <p className="text-red-500 text-sm">{errors.primaryGoal.message}</p>}
    </div>
    <div className="space-y-2">
      <Label>Which area does your goal fall into?</Label>
       <Select onValueChange={(value) => setValue("goalCategory", value, { shouldValidate: true })}>
        <SelectTrigger className="bg-brand-dark border-white/20">
          <SelectValue placeholder="Select a category..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="business">Launch a Business</SelectItem>
          <SelectItem value="career">Career Growth</SelectItem>
          <SelectItem value="skill">Learn a New Skill</SelectItem>
          <SelectItem value="health">Health & Fitness</SelectItem>
          <SelectItem value="creative">Creative Project</SelectItem>
        </SelectContent>
      </Select>
       {errors.goalCategory && <p className="text-red-500 text-sm">{errors.goalCategory.message}</p>}
    </div>
    <Button type="submit" className="w-full bg-brand-teal text-brand-dark hover:bg-brand-teal/90">
      Complete Profile & Finish
    </Button>
    <Button type="button" variant="link" onClick={onPrev} className="w-full text-gray-400">
      Go Back
    </Button>
  </motion.div>
);

const SuccessMessage = ({ firstName }) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 0.5 }}
    className="text-center"
  >
    <div className="text-5xl mb-4">🎉</div>
    <h3 className="text-2xl font-bold text-brand-teal">Thank You, {firstName}!</h3>
    <p className="text-gray-300 mt-2">Your spot is secured. We'll be in touch soon with updates and your exclusive invitation to the private beta.</p>
  </motion.div>
);

const WaitlistForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const { register, handleSubmit, trigger, formState: { errors }, setValue } = useForm();

  const handleNext = async () => {
    const isValid = await trigger(["firstName", "email"]);
    if (isValid) {
      setStep(2);
    }
  };

  const handlePrev = () => {
    setStep(1);
  };
  
  // Register the goalCategory field manually for validation
  register("goalCategory", { required: "Please select a category" });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    setFormData(data);
    setStep(3); // Move to success step
    // Here you would typically send the data to your backend API
  };

  return (
    <section id="waitlist-form" className="bg-white/5 py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Stop Procrastinating. Start Building.
          </h2>
          <p className="mt-4 text-gray-300">
            Your next chapter starts with a single step. Join the waitlist to secure your spot in the private beta.
          </p>
        </div>

        <Card className="mx-auto mt-12 max-w-lg bg-brand-dark/50 border-white/10 text-white">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-gray-200">
              {step === 1 && "Join the Inner Circle"}
              {step === 2 && "Give Yourself a Head Start"}
              {step === 3 && "You're All Set!"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <AnimatePresence mode="wait">
                {step === 1 && <Step1 key="step1" onNext={handleNext} register={register} errors={errors} />}
                {step === 2 && <Step2 key="step2" onPrev={handlePrev} register={register} errors={errors} setValue={setValue} />}
                {step === 3 && <SuccessMessage key="success" firstName={formData.firstName} />}
              </AnimatePresence>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WaitlistForm;