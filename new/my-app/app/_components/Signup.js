// app/_components/Signup.js

// Add the "use client" directive
"use client";

import React from 'react'; // Import React
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const Signup = () => {
  // Use React.useState instead of useState
  const [successMessage, setSuccessMessage] = React.useState('');
  
  // Define your validation schema
  const yourValidationSchema = z.object({
    email: z.string().email({ message: 'Invalid email' }).min(1, { message: 'Email is required' }),
    username: z.string().min(4, { message: 'Username must be at least 4 characters' }).min(1, { message: 'Username is required' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' }).min(1, { message: 'Password is required' }),
    phoneNumber: z.string().min(10, { message: 'Phone number must be at least 10 digits' }).min(1, { message: 'Phone number is required' }),
    dob: z.string().min(1, { message: 'Date of Birth is required' }),
    registerNumber: z.string().min(1, { message: 'Register number is required' }),
  });
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(yourValidationSchema),
  });

  const onSubmit = async (data) => {
    // Your form submission logic goes here
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block">Email:</label>
            <input type="text" id="email" {...register("email")} className="border border-gray-300 px-3 py-2 rounded-md w-full" />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="username" className="block">Username:</label>
            <input type="text" id="username" {...register("username")} className="border border-gray-300 px-3 py-2 rounded-md w-full" />
            {errors.username && <p className="text-red-500">{errors.username.message}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block">Password:</label>
            <input type="password" id="password" {...register("password")} className="border border-gray-300 px-3 py-2 rounded-md w-full" />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block">Phone Number:</label>
            <input type="text" id="phoneNumber" {...register("phoneNumber")} className="border border-gray-300 px-3 py-2 rounded-md w-full" />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
          </div>
          <div>
            <label htmlFor="dob" className="block">Date of Birth:</label>
            <input type="text" id="dob" {...register("dob")} className="border border-gray-300 px-3 py-2 rounded-md w-full" />
            {errors.dob && <p className="text-red-500">{errors.dob.message}</p>}
          </div>
          <div>
            <label htmlFor="registerNumber" className="block">Register Number:</label>
            <input type="text" id="registerNumber" {...register("registerNumber")} className="border border-gray-300 px-3 py-2 rounded-md w-full" />
            {errors.registerNumber && <p className="text-red-500">{errors.registerNumber.message}</p>}
          </div>
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
