"use client";

import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import {title} from "@/components/primitives";

export default function GuidesPage() {
    return (
        <div>
            <h1 className={title({size: "sm"})}>Helpful guides for getting you started on GitHub</h1>
            <div className={"flex mt-4"}>
                <Accordion>
                    <AccordionItem key="1" title="Onboarding" subtitle="Guides to help you get started with GitHub">
                    </AccordionItem>
                    <AccordionItem key="2" title="Migrating to GitHub"
                                   subtitle="Guides on migrating your source code to GitHub">
                    </AccordionItem>
                    <AccordionItem key="3" title="Working in GitHub as part of the VA"
                                   subtitle="Guides for day-to-day operational tasks">
                    </AccordionItem>
                    <AccordionItem key="4" title="GitHub Features" subtitle="Guides to using GitHub features">
                    </AccordionItem>
                    <AccordionItem key="5" title="Integrations"
                                   subtitle="Guides for integrating third-party tools with GitHub">
                    </AccordionItem>
                    <AccordionItem key="6" title="Security"
                                   subtitle="Guides for repository maintenance, settings, and administration that are security focused">
                    </AccordionItem>
                    <AccordionItem key="7" title="Organization Administration"
                                   subtitle="Guides for organizational administrators to manage GitHub">
                    </AccordionItem>
                    <AccordionItem key="9" title="Troubleshooting" subtitle="Guides for troubleshooting common issues">
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}
