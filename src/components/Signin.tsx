"use client"

import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter(); 

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);

        try {

            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            console.log(response);

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json(); // Assuming the API returns a JWT token in response

            // Store token in localStorage
            localStorage.setItem('token', data.token);

            // Redirect to /admin/projects
            router.push('/admin/projects');
        } catch (err) {
            toast('Invalid email or password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="md:w-1/2 space-y-8 p-6 bg-[#272727]/60 rounded-lg">
            <div className="flex justify-center items-center">
                <h3 className="font-medium">Admin Login</h3>
            </div>
            <form className="w-full space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                    <Input
                        id="email"
                        type="email"
                        placeholder="admin email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <Input
                        id="password"
                        type="password"
                        placeholder="admin password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="w-full flex justify-center items-center">
                    <Button className="w-full cursor-pointer" type="submit" size="sm" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Signin;
