"use client"
import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from 'next/navigation';
import FAQ from '@/components/HomeComponent/FAQ';

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(Boolean);

    return (
        <div>
            <div className="max-w-screen-2xl mx-auto">
                <Breadcrumb className="mx-4 py-2 border-b">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        {pathSegments.map((segment, index) => {
                            const href = '/' + pathSegments.slice(0, index + 1).join('/');
                            const isLast = index === pathSegments.length - 1;
                            return (
                                <React.Fragment key={href}>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        {isLast ? (
                                            <BreadcrumbPage>{segment.replace(/-/g, ' ')}</BreadcrumbPage>
                                        ) : (
                                            <BreadcrumbLink href={href}>
                                                {segment.replace(/-/g, ' ')}
                                            </BreadcrumbLink>
                                        )}
                                    </BreadcrumbItem>
                                </React.Fragment>
                            );
                        })}
                    </BreadcrumbList>
                </Breadcrumb>
                {children}
                <FAQ />
            </div>
        </div>
    );
}
