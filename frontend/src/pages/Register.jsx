import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userType: 'guest'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // 1. Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // 2. Save additional user details in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        userType: formData.userType,
        createdAt: new Date().toISOString()
      });

      // 3. Redirect to login
      navigate('/login');
    } catch (err) {
      console.error("Error signing up:", err);
      // Simplify Firebase error messages
      let message = err.message;
      if (err.code === 'auth/email-already-in-use') message = "This email is already registered.";
      if (err.code === 'auth/weak-password') message = "Password should be at least 6 characters.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-primary/10">
        
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto h-12 w-12 text-primary flex items-center justify-center rounded-full bg-primary/10">
             <span className="material-symbols-outlined text-3xl">nest_eco_leaf</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white">
            Create an account
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Start your journey with StayNest today
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-4" onSubmit={submitHandler}>
          
          <div className="grid grid-cols-2 gap-4">
             <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="firstName">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="appearance-none rounded-xl relative block w-full px-4 py-3 border border-slate-300 dark:border-slate-600 placeholder-slate-500 text-slate-900 dark:text-white bg-transparent focus:outline-none focus:ring-primary focus:border-primary sm:text-sm transition-colors"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                />
             </div>
             <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="appearance-none rounded-xl relative block w-full px-4 py-3 border border-slate-300 dark:border-slate-600 placeholder-slate-500 text-slate-900 dark:text-white bg-transparent focus:outline-none focus:ring-primary focus:border-primary sm:text-sm transition-colors"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                />
             </div>
          </div>
        
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="appearance-none rounded-xl relative block w-full px-4 py-3 border border-slate-300 dark:border-slate-600 placeholder-slate-500 text-slate-900 dark:text-white bg-transparent focus:outline-none focus:ring-primary focus:border-primary sm:text-sm transition-colors"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="appearance-none rounded-xl relative block w-full px-4 py-3 border border-slate-300 dark:border-slate-600 placeholder-slate-500 text-slate-900 dark:text-white bg-transparent focus:outline-none focus:ring-primary focus:border-primary sm:text-sm transition-colors"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <fieldset className="mt-4">
              <legend className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">I want to:</legend>
              <div className="flex items-center gap-6">
                 <div className="flex items-center">
                    <input
                      id="role-guest"
                      name="userType"
                      type="radio"
                      value="guest"
                      checked={formData.userType === 'guest'}
                      onChange={handleChange}
                      className="h-4 w-4 text-primary focus:ring-primary border-slate-300 dark:border-slate-600"
                    />
                    <label htmlFor="role-guest" className="ml-2 block text-sm text-slate-700 dark:text-slate-200">
                      Book Stays
                    </label>
                 </div>
                 <div className="flex items-center">
                    <input
                      id="role-host"
                      name="userType"
                      type="radio"
                      value="host"
                      checked={formData.userType === 'host'}
                      onChange={handleChange}
                      className="h-4 w-4 text-primary focus:ring-primary border-slate-300 dark:border-slate-600"
                    />
                    <label htmlFor="role-host" className="ml-2 block text-sm text-slate-700 dark:text-slate-200">
                      Host my home
                    </label>
                 </div>
              </div>
          </fieldset>

          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm mb-4">
              {error}
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating Account...' : 'Register'}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm flex-col gap-2 flex">
          <p className="text-slate-600 dark:text-slate-400">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-primary hover:text-primary/80">
              Sign in
            </Link>
          </p>
          <Link to="/" className="text-sm flex items-center justify-center gap-1 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors mt-2">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
