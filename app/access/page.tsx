'use client';

import {title} from "@/components/primitives";
import {Accordion, AccordionItem, Divider} from "@nextui-org/react";
import {siteConfig} from "@/config/site";
import {Link} from "@nextui-org/link";
import React from "react";

export default function AccessPage() {
    return (
        <div>
            <h1 className={title({size: "sm"})}>Getting access to the GitHub organization</h1>
            <Divider className="my-4"/>
            <div className={"mt-4"}>
                There are several steps that must be done to gain access to the <Link href={siteConfig.links.github}
                                                                                      target={"blank"}>{siteConfig.customer.name}</Link> organization
            </div>
            <div className={"flex mt-4 text-left"}>
                <Accordion variant={"splitted"}>
                    <AccordionItem key="1" title="Step One" subtitle="Create a GitHub.com Account">
                    </AccordionItem>
                    <AccordionItem key="2" title="Step Two" subtitle="Setup Two-Factor Authentication" id={"step-two"}>
                    </AccordionItem>
                    <AccordionItem key="3" title="Step Three" subtitle="Request Access to the GitHub Organization">
                    </AccordionItem>
                    <AccordionItem key="4" title="Step Four" subtitle="Accept the Invitation">
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}
