'use client';

import {Accordion, AccordionItem, Divider, Tab, Tabs} from "@nextui-org/react";
import React from "react";

export default function PoliciesPage() {
    const variant = "splitted"
    return (
        <div>
            <div className="flex w-full flex-col items-center justify-center">
                <Tabs aria-label="Options">
                    <Tab key="access" title="Access">
                        Policies related to accessing GitHub
                        <Divider className="my-4"/>
                        <Accordion variant={variant}>
                            <AccordionItem key="1" title="">
                                <div className={"text-left"}>
                                </div>
                            </AccordionItem>
                            <AccordionItem key="2" title="">
                                <div className={"text-left"}>
                                </div>
                            </AccordionItem>
                            <AccordionItem key="3" title="">
                                <div className={"text-left"}>
                                </div>
                            </AccordionItem>
                            <AccordionItem key="4" title="">
                                <div className={"text-left"}>
                                </div>
                            </AccordionItem>
                        </Accordion>
                    </Tab>
                    <Tab key="usage" title="Usage">
                        Policies related to the fair and secure usage of GitHub
                        <Divider className="my-4"/>
                        <Accordion variant={variant}>
                            <AccordionItem key="1" title="">
                                <div className={"text-left"}>
                                </div>
                            </AccordionItem>
                            <AccordionItem key="2" title="">
                                <div className={"text-left"}>
                                </div>
                            </AccordionItem>
                            <AccordionItem key="3" title="">
                                <div className={"text-left"}>
                                </div>
                            </AccordionItem>
                            <AccordionItem key="4" title="">
                                <div className={"text-left"}>
                                </div>
                            </AccordionItem>
                        </Accordion>
                    </Tab>
                    <Tab key="retention" title="Data Retention">
                        Policies related to data retention process for GitHub
                        <Divider className="my-4"/>
                        <Accordion variant={variant}>
                            <AccordionItem key="1" title="">
                                <div className={"text-left"}>
                                </div>
                            </AccordionItem>
                            <AccordionItem key="2" title="">
                                <div className={"text-left"}>
                                </div>
                            </AccordionItem>
                            <AccordionItem key="3" title="">
                                <div className={"text-left"}>
                                </div>
                            </AccordionItem>
                            <AccordionItem key="4" title="">
                                <div className={"text-left"}>
                                </div>
                            </AccordionItem>
                        </Accordion>
                    </Tab>
                    <Tab key="security" title="Security">
                        Policies related to the use of security tools in GitHub
                        <Divider className="my-4"/>
                        <Accordion variant={variant}>
                            <AccordionItem key="1" title="">
                                <div className={"text-left"}>
                                </div>
                            </AccordionItem>
                            <AccordionItem key="2" title="">
                                <div className={"text-left"}>
                                </div>
                            </AccordionItem>
                            <AccordionItem key="3" title="">
                                <div className={"text-left"}>
                                </div>
                            </AccordionItem>
                            <AccordionItem key="4" title="">
                                <div className={"text-left"}>
                                </div>
                            </AccordionItem>
                        </Accordion>
                    </Tab>
                    <Tab key="copilot" title="Copilot">
                        Policies related to the use of Copilot AI tools on GitHub
                        <Divider className="my-4"/>
                        <Accordion variant={variant}>
                            <AccordionItem key="1" title="">
                                <div className={"text-left"}>
                                </div>
                            </AccordionItem>
                            <AccordionItem key="2" title="">
                                <div className={"text-left"}>
                                </div>
                            </AccordionItem>
                            <AccordionItem key="3" title="">
                                <div className={"text-left"}>
                                </div>
                            </AccordionItem>
                            <AccordionItem key="4" title="">
                                <div className={"text-left"}>
                                </div>
                            </AccordionItem>
                        </Accordion>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}