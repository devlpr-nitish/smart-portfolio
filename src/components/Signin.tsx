import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Signin = () => {
    return (
        <div className="md:w-1/2 space-y-8 p-6 bg-[#272727]/60 rounded-lg">
            <div className='flex justify-center items-center'>
                <h3 className="font-medium">Admin Login</h3>
            </div>
            <form className="w-full space-y-4">
                <div className="space-y-2">
                    <Input id="email" type='email' placeholder="admin email" />
                </div>
                <div className="space-y-2">
                    <Input id="password" type="password" placeholder="admin passoword" />
                </div>
                <div className='w-full flex justify-center items-center'>
                    <Button className='w-full cursor-pointer' type="submit" size="sm">
                        Login
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Signin;