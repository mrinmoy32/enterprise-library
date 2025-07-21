"use client";

import React from 'react';
import AuthForm from '@/components/AuthForm';
import {  signUpSchema } from '@/lib/validations';

const page = () => {
  return (
    <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{fullName: '', email: '', universityId: 0, universityCard: '', password: ''}}
    onSubmit={() => {}}
    />
  )
}

export default page