"use client";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

function Redirect() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        // Redirect if the user is logged in and session status is not loading
        if (status === "authenticated") {
            router.push("/dashboard");
        }
    }, [status, router]);

    // Optional: Render a loading indicator if the session status is still loading
    if (status === "loading") {
        return <p>Loading...</p>;
    }

    return null;
}

export default Redirect;
