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
                                                                                      target={"blank"}>Department
                of Veterans Affairs</Link> organization
            </div>
            <div className={"flex mt-4 text-left"}>
                <Accordion>
                    <AccordionItem key="1" title="Step One" subtitle="Create a GitHub.com Account">
                        <div>
                            If you already have a GitHub.com account, please verify you have done the following and
                            proceed to Step Two:
                            <ul className={"list-disc ml-6"}>
                                <li>If you already have your <code>@va.gov</code> email address, add it to your <Link
                                    href={"https://github.com/settings/emails"} target={"blank"}>GitHub profile</Link>
                                </li>
                                <li>Add your human readable name to your <Link
                                    href={"https://github.com/settings/profile"} target={"blank"}>GitHub
                                    profile</Link>
                                </li>
                            </ul>
                            <br/>
                            If you don’t yet have a GitHub.com account, follow the official instructions in the <Link
                            href={"https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github"}
                            target={"blank"}>GitHub
                            Documentation</Link> to create a new GitHub.com account.

                        </div>
                    </AccordionItem>
                    <AccordionItem key="2" title="Step Two"
                                   subtitle="Setup Two-Factor Authentication" id={"step-two"}>
                        <div>
                            For the VA, you must set up Two-Factor Authentication on your GitHub.com account prior to
                            joining the Department of Veterans Affairs organization on GitHub.com. To get this set up,
                            please follow the instructions below.
                            <br/><br/>
                            If you already have a GitHub.com account and have 2FA set up, please proceed to Step Three.
                            <br/><br/>
                            If you don’t yet have a GitHub.com account and have 2FA set up, follow the official
                            instructions in the <Link
                            href={"https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication"}
                            target={"blank"}>GitHub
                            Documentation</Link> to configure 2FA.
                        </div>
                    </AccordionItem>
                    <AccordionItem key="3" title="Step Three"
                                   subtitle="Request Access to the VA GitHub Organization">
                        <div>
                            Once you have your GitHub.com account and have set up 2FA, you will need to request access
                            to the Department of Veterans Affairs organization. You or someone who has access to the
                            site below will need to request your access to the VA organization. Please note that
                            approvals of non-VA emails may take a little longer to process.
                            <br/><br/>
                            <span className={"font-bold"}>Inside the VA network</span>
                            <ul className={"list-disc ml-6"}>
                                <li>If you already have access to the VA internal network, you may visit <Link
                                    href={"https://vaww.oit.va.gov/services/github/"}
                                    target={"blank"}>https://vaww.oit.va.gov/services/github/</Link> and
                                    request access yourself.
                                </li>
                            </ul>
                            <br/>
                            <span className={"font-bold"}>Outside the VA network</span>
                            <ul className={"list-disc ml-6"}>
                                <li>If you do not yet have access to the VA internal network, have another user, your
                                    PM, or COR that has GitHub access submit a request on your behalf in the <Link
                                        href={"https://github.com/department-of-veterans-affairs/github-user-requests/issues/new/choose"}
                                        target={"blank"}>GitHub
                                        User Requests</Link> repository.
                                </li>
                            </ul>
                            <br/>
                            Once you have received your invitation, proceed to Step Four.
                        </div>
                    </AccordionItem>
                    <AccordionItem key="4" title="Step Four" subtitle="Accept the Invitation">
                        <div>
                            Once your request for access has been approved, you will receive an email from GitHub.com to
                            accept the invitation to the Department of Veterans Affairs organization. To accept the
                            invitation, simply click the link in the email and you will be redirected to the VA
                            organization on GitHub.com. You will be prompted to accept the invitation at the top of the
                            page.
                            <br/><br/>
                            If you did not receive an email, you may simply login to GitHub and navigate to the
                            following link and accept the invitation: <Link
                            href={"https://github.com/department-of-veterans-affairs"}
                            target={"blank"}>https://github.com/department-of-veterans-affairs</Link>
                            <br/><br/>
                            If you do not see an invitation, please reach out to the person who submitted your request
                            and ask them to open a ticket with <Link href={siteConfig.links.support} target={"_blank"}>GitHub
                            Support</Link>.
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}
