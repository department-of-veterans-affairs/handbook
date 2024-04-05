import React from "react";

export default function GuidesLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="container inline-block max-w-4xl text-center justify-center">
                {children}
            </div>
        </section>
    );
}
