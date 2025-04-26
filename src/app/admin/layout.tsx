import { AdminSidebar } from "@/components/AdminSidebar";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Admin Panel',
    description: 'Manage your projects',
};


export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className='w-full py-30'>
                <AdminSidebar children={children} />
            </div>
        </div>
    );
}
