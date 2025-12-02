"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";

/* --------------------------------- Page --------------------------------- */
export default function AddStudentPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    email: "",
    phone: "",
    whatsapp: "",
    className: "",
    section: "",
    rollNo: "",
    admissionNo: "",
    school: "",
    previousSchool: "",
    dob: "",
    gender: "",
    cnic: "",
    emergency: "",
    bloodGroup: "",
    address: "",
    city: "",
    country: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("New Student:", form);
    router.push("/students");
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 ml-2 p-10 max-w-5xl">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          Add New Student
        </h2>

        {/* FORM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputField label="Full Name" name="name" value={form.name} onChange={handleChange} placeholder="Student full name" />
          <InputField label="Father Name" name="fatherName" value={form.fatherName} onChange={handleChange} placeholder="Father's name" />
          <InputField label="Mother Name" name="motherName" value={form.motherName} onChange={handleChange} placeholder="Mother's name" />
          <InputField label="Email" name="email" value={form.email} onChange={handleChange} placeholder="example@gmail.com" />
          <InputField label="Phone Number" name="phone" value={form.phone} onChange={handleChange} placeholder="+92xxxxxxxxxx" />
          <InputField label="WhatsApp Number" name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="+92xxxxxxxxxx" />
          <InputField label="Class" name="className" value={form.className} onChange={handleChange} placeholder="10-B" />
          <InputField label="Section" name="section" value={form.section} onChange={handleChange} placeholder="A / B / C" />
          <InputField label="Roll Number" name="rollNo" value={form.rollNo} onChange={handleChange} placeholder="Roll No" />
          <InputField label="Admission Number" name="admissionNo" value={form.admissionNo} onChange={handleChange} placeholder="Admission No" />
          <InputField label="School Name" name="school" value={form.school} onChange={handleChange} placeholder="School Name" />
          <InputField label="Previous School" name="previousSchool" value={form.previousSchool} onChange={handleChange} placeholder="Previous School" />
          <InputField label="Date of Birth" name="dob" type="date" value={form.dob} onChange={handleChange} placeholder="" />
          <InputField label="Gender" name="gender" value={form.gender} onChange={handleChange} placeholder="Male / Female" />
          <InputField label="Guardian CNIC" name="cnic" value={form.cnic} onChange={handleChange} placeholder="xxxxx-xxxxxxx-x" />
          <InputField label="Emergency Contact" name="emergency" value={form.emergency} onChange={handleChange} placeholder="+92xxxxxxxxxx" />
          <InputField label="Blood Group" name="bloodGroup" value={form.bloodGroup} onChange={handleChange} placeholder="A+, B+, O-, etc" />
          <InputField label="Address" name="address" value={form.address} onChange={handleChange} placeholder="Full address" />
          <InputField label="City" name="city" value={form.city} onChange={handleChange} placeholder="City" />
          <InputField label="Country" name="country" value={form.country} onChange={handleChange} placeholder="Country" />

        </div>

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl"
        >
          Save Student
        </button>
      </div>
    </div>
  );
}

/* --------------------------- Reusable Input Field --------------------------- */
const InputField = ({
  label,
  name,
  value,
  placeholder,
  type = "text",
  onChange,
}: any) => (
  <div className="flex flex-col gap-2">
    <label className="font-medium text-blue-800">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="p-3 rounded-xl border border-blue-200"
    />
  </div>
);
