'use client';
import React, { useState } from 'react';
import { addIntoSpreadSheet } from '../apis/googleSpreadSheetApi';
import { useRouter } from 'next/navigation';
import Loader from '@/components/loader';

export default function Contact() {
  const router = useRouter();
  // Initialize state for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const result = await addIntoSpreadSheet(formData);
      //setIsLoading(false);
      router.push('/thank-you?thanks=contact_me');

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
      }); // Show response from Google Apps Script
    } catch (error) {
      //setIsLoading(false);
    } finally {
      //setIsLoading(false);
      // Reset form submission state
    }
    // Log form data or handle it as needed
    console.log('Form Data:', formData);
  };
  if (isLoading) {
    return <Loader message="Sending your message" />;
  }

  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      {/* Background decoration omitted for brevity */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
          Get in Touch
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
          I’d love to hear from you. Reach out with any questions or just to say
          hello!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-gray-100 dark:ring-gray-600"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                autoComplete="family-name"
                className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-gray-100 dark:ring-gray-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-gray-100 dark:ring-gray-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
            >
              Phone number
            </label>
            <div className="relative mt-2.5">
              <input
                id="phone-number"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                autoComplete="tel"
                placeholder="Enter your phone number with country code"
                className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-gray-100 dark:ring-gray-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-gray-100 dark:ring-gray-600"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-zinc-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:bg-zinc-700 dark:text-white dark:focus-visible:outline-zinc-700"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}
