'use client';

import {title} from "@/components/primitives";
import {Accordion, AccordionItem, Divider} from "@nextui-org/react";
import React from "react";

export default function PoliciesPage() {
    return (
        <div>
            <h1 className={title({size: "sm"})}>Policies related to the secure use of GitHub at the VA</h1>
            <Divider className="my-4"/>
            <div className={"flex mt-4"}>
                <Accordion>
                    <AccordionItem key="1" title="Access Policies"
                                   subtitle="Policies related to accessing GitHub">
                    </AccordionItem>
                    <AccordionItem key="2" title="Usage Policies"
                                   subtitle="Policies related to the fair and secure usage of GitHub">
                    </AccordionItem>
                    <AccordionItem key="3" title="Repository Archival Policies"
                                   subtitle="Policies related to data retention process for GitHub">
                    </AccordionItem>
                    <AccordionItem key="4" title="Security Policies"
                                   subtitle="Policies related to the use of security tools in GitHub">
                    </AccordionItem>
                    <AccordionItem key="5" title="Copilot Policies"
                                   subtitle="Policies related to the use of Copilot AI tools on GitHub">
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}
