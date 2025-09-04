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

// Reusable TagInput component - Styled for the new theme
const TagInput = ({ label, placeholder, value = [], onChange }) => {
  const [input, setInput] = useState("");

  const addTag = () => {
    if (input.trim() && !value.includes(input.trim())) {
      onChange([...value, input.trim()]);
      setInput("");
    }
  };

  const removeTag = (tag) => {
    onChange(value.filter((t) => t !== tag));
  };

  return (
    <div className="space-y-2">
      <Label className="text-gray-300">{label}</Label>
      <div className="flex flex-wrap items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2 min-h-[40px]">
        <AnimatePresence>
          {value.map((tag, index) => (
            <motion.span
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="flex items-center gap-2 rounded-full bg-emerald-400/20 text-emerald-300 px-3 py-1 text-sm font-medium"
            >
              {tag}
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="text-emerald-300/70 hover:text-white"
              >
                ×
              </button>
            </motion.span>
          ))}
        </AnimatePresence>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
          placeholder={placeholder}
          className="flex-grow bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-0 border-0 p-1"
        />
      </div>
    </div>
  );
};

const Step1 = ({ onNext, register, errors }) => (
  <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -300, opacity: 0 }}
    transition={{ ease: "easeInOut", duration: 0.5 }}
    className="space-y-6"
  >
    <div className="space-y-2">
      <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
      <Input
        id="firstName"
        placeholder="e.g., Alex"
        {...register("firstName", { required: "First name is required" })}
        className="bg-black/30 border-white/10 text-white placeholder-gray-500 focus-visible:ring-emerald-500"
      />
      {errors.firstName && (
        <p className="text-red-400 text-sm">{errors.firstName.message}</p>
      )}
    </div>
    <div className="space-y-2">
      <Label htmlFor="email" className="text-gray-300">Email Address</Label>
      <Input
        id="email"
        type="email"
        placeholder="you@example.com"
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
        })}
        className="bg-black/30 border-white/10 text-white placeholder-gray-500 focus-visible:ring-emerald-500"
      />
      {errors.email && (
        <p className="text-red-400 text-sm">{errors.email.message}</p>
      )}
    </div>
    <Button
      type="button"
      onClick={onNext}
      className="w-full bg-[#A3F5B4] text-black font-bold hover:bg-white transition-colors text-base py-6"
    >
      Join the Waitlist
    </Button>
  </motion.div>
);

const Step2 = ({ onPrev, register, errors, setValue, watch }) => (
  <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -300, opacity: 0 }}
    transition={{ ease: "easeInOut", duration: 0.5 }}
    className="space-y-6"
  >
    <div className="space-y-2">
      <Label htmlFor="primaryGoal" className="text-gray-300">Your #1 Goal (next 6 months)</Label>
      <Input
        id="primaryGoal"
        placeholder="e.g., Launch my SaaS business"
        {...register("primaryGoal", { required: "This field is required" })}
        className="bg-black/30 border-white/10 text-white placeholder-gray-500 focus-visible:ring-emerald-500"
      />
      {errors.primaryGoal && (
        <p className="text-red-400 text-sm">{errors.primaryGoal.message}</p>
      )}
    </div>

    <div className="space-y-2">
      <Label className="text-gray-300">Goal Category</Label>
      <Select
        onValueChange={(value) =>
          setValue("goalCategory", value, { shouldValidate: true })
        }
      >
        <SelectTrigger className="bg-black/30 border-white/10 text-gray-300 focus:ring-emerald-500">
          <SelectValue placeholder="Select a category..." />
        </SelectTrigger>
        <SelectContent className="bg-[#1C1C1E] border-white/20 text-white">
          <SelectItem value="business">Launch a Business</SelectItem>
          <SelectItem value="career">Career Growth</SelectItem>
          <SelectItem value="skill">Learn a New Skill</SelectItem>
          <SelectItem value="health">Health & Fitness</SelectItem>
          <SelectItem value="creative">Creative Project</SelectItem>
          <SelectItem value="finance">Financial Freedom</SelectItem>
          <SelectItem value="community">Community / Social Impact</SelectItem>
          <SelectItem value="productivity">Boost Productivity</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>
      {errors.goalCategory && (
        <p className="text-red-400 text-sm">{errors.goalCategory.message}</p>
      )}
    </div>

    {watch("goalCategory") === "other" && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        className="space-y-2 pt-4"
      >
        <Label htmlFor="goalCategoryOther" className="text-gray-300">Please specify</Label>
        <Input
          id="goalCategoryOther"
          placeholder="Describe your goal category..."
          {...register("goalCategoryOther", {
            required: "Please specify your goal category",
          })}
          className="bg-black/30 border-white/10 text-white placeholder-gray-500 focus-visible:ring-emerald-500"
        />
        {errors.goalCategoryOther && (
          <p className="text-red-400 text-sm">
            {errors.goalCategoryOther.message}
          </p>
        )}
      </motion.div>
    )}

    <TagInput
      label="Skills I Need"
      placeholder="Type skill & press Enter"
      value={watch("skillsNeeded") || []}
      onChange={(val) => setValue("skillsNeeded", val, { shouldValidate: true })}
    />
    {errors.skillsNeeded && (
      <p className="text-red-400 text-sm">{errors.skillsNeeded.message}</p>
    )}

    <TagInput
      label="Skills I Can Help With"
      placeholder="Type skill & press Enter"
      value={watch("skillsOffered") || []}
      onChange={(val) => setValue("skillsOffered", val, { shouldValidate: true })}
    />
    {errors.skillsOffered && (
      <p className="text-red-400 text-sm">{errors.skillsOffered.message}</p>
    )}

    <Button
      type="submit"
      className="w-full bg-[#A3F5B4] text-black font-bold hover:bg-white transition-colors text-base py-6"
    >
      Complete Profile & Finish
    </Button>
    <Button
      type="button"
      variant="link"
      onClick={onPrev}
      className="w-full text-gray-500 hover:text-white"
    >
      ← Go Back
    </Button>
  </motion.div>
);

const SuccessMessage = ({ firstName }) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 0.5 }}
    className="text-center space-y-4"
  >
    <div className="text-6xl">🎉</div>
    <h3 className="text-2xl font-bold text-emerald-400">Thank You, {firstName}!</h3>
    <p className="text-gray-300">
      Your spot is secured. We'll be in touch soon with exclusive updates.
    </p>
  </motion.div>
);


const WaitlistForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    setValue,
    watch,
  } = useForm();
  
  const handleNext = async () => {
    const isValid = await trigger(["firstName", "email"]);
    if (isValid) setStep(2);
  };
  
  const handlePrev = () => setStep(1);
  
  const onSubmit = (data) => {
    const finalData = {
      ...data,
      goalCategory:
        data.goalCategory === "other" ? data.goalCategoryOther : data.goalCategory,
    };
    delete finalData.goalCategoryOther;

    console.log("Form Submitted:", finalData);
    setFormData(finalData);
    setStep(3);
  };
  
  register("goalCategory", { required: "Please select a category" });
  register("skillsNeeded", {
    validate: (val) =>
      (val?.length >= 3) || "Add at least 3 skills you need",
  });
  register("skillsOffered", {
    validate: (val) =>
      (val?.length >= 3) || "Add at least 3 skills you can offer",
  });
 
  return (
    <section id="waitlist-form" className="relative bg-[#101418] py-20 sm:py-28 overflow-hidden">
      {/* This div creates the green aurora glow from the reference image */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[600px] bg-emerald-500/30 blur-[150px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Stop Procrastinating. Start Building.
          </h2>
          <p className="mt-4 text-gray-300">
            Your next chapter starts with a single step. Join the waitlist to
            secure your spot in the private beta.
          </p>
        </div>

        {/* The Card component now has the "glassmorphism" effect. */}
        <Card className="mx-auto mt-12 max-w-lg bg-black/30 border border-white/10 text-white shadow-2xl rounded-2xl backdrop-blur-xl">
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
                {step === 1 && (
                  <Step1
                    key="step1"
                    onNext={handleNext}
                    register={register}
                    errors={errors}
                  />
                )}
                {step === 2 && (
                  <Step2
                    key="step2"
                    onPrev={handlePrev}
                    register={register}
                    errors={errors}
                    setValue={setValue}
                    watch={watch}
                  />
                )}
                {step === 3 && (
                  <SuccessMessage
                    key="success"
                    firstName={formData.firstName}
                  />
                )}
              </AnimatePresence>
            </form>
          </CardContent>
        </Card>

      </div>
    </section>
  );
};

export default WaitlistForm;