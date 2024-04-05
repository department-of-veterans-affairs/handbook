"use client";

import React from "react";
import {Accordion, AccordionItem, Divider, Tab, Tabs} from "@nextui-org/react";

export default function GuidesPage() {
    const variant = "splitted"
    return (
        <div className="flex w-full flex-col items-center justify-center">
            <Tabs aria-label="Options">
                <Tab key="onboarding" title="Onboarding">
                    Guides for helping you get started with GitHub
                    <Divider className="my-4"/>
                    <Accordion variant={variant}>
                        <AccordionItem key="1"
                                       title="Getting access to the Department of Veterans Affairs GitHub organization">
                            <div className={"text-left"}>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="2" title="Requesting repository and team Access">
                            <div className={"text-left"}>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="3" title="Verifying your VA.gov email address in your GitHub profile">
                            <div className={"text-left"}>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="4" title="Requesting access to Copilot">
                            <div className={"text-left"}>
                            </div>
                        </AccordionItem>
                    </Accordion>
                </Tab>
                <Tab key="migrations" title="Migrations">
                    Guides for migrating your source code between GitHub instances
                    <Divider className="my-4"/>
                    <Accordion variant={variant}>
                        <AccordionItem key="1" title="Migrating from VAEC GitHub to GHEC">
                            <div className={"text-left"}>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="2" title="Migrating from VAEC GitHub to GHEC-EMU">
                            <div className={"text-left"}>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="3" title="Migrating from GHEC to GHEC-EMUC">
                            <div className={"text-left"}>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="4" title="Migrating from GHEC-EMU to GHEC">
                            <div className={"text-left"}>
                            </div>
                        </AccordionItem>
                    </Accordion>
                </Tab>
                <Tab key="operations" title="Operations">
                    Guides for day-to-day operational tasks
                    <Divider className="my-4"/>
                    <Accordion variant={variant}>
                        <AccordionItem key="1" title="GitHub release linking data">
                            <div className={"text-left"}>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="2" title="GitHub releases">
                            <div className={"text-left"}>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="3" title="GitHub repository setup">
                            <div className={"text-left"}>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="4" title="GitHub teams">
                            <div className={"text-left"}>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="5" title="Issue triage">
                            <div className={"text-left"}>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="6" title="Semanting versioning">
                            <div className={"text-left"}>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="7" title="Seperation of duties">
                            <div className={"text-left"}>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="8" title="InnerSource">
                            <div className={"text-left"}>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="9" title="Public repositories">
                            <div className={"text-left"}>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="10" title="Automated compliance with OIT policy using Jira Smart Commits">
                            <div className={"text-left"}>
                            </div>
                        </AccordionItem>
                    </Accordion>
                </Tab>
                <Tab key="features" title="Features">
                    Guides for using GitHub features
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
                <Tab key="integrations" title="Integrations">
                    Guides for integrating third-party tools with GitHub
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
                    Guides for security-focused repository maintenance, settings, and administration
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
                <Tab key="administration" title="Administration">
                    Guides for organizational administrators to manage GitHub
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
                <Tab key="troubleshooting" title="Troubleshooting">
                    Guides for troubleshooting common issues
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
    );
}
