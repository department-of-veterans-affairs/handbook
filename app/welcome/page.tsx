import {title} from "@/components/primitives";
import {Divider} from "@nextui-org/react";
import {siteConfig} from "@/config/site";

export default function WelcomePage() {
    return (
        <div>
            <h1 className={title({size: "sm"})}>Welcome to the {siteConfig.customer.name}</h1>
            <Divider className="my-4"/>
            <div className={`text-left`}>
                Welcome!
                <br/><br/>
                You’ve just joined a remarkable group of people doing inspiring work. We have an unprecedented
                opportunity to bring our government into the digital age and transform the way it works. This
                opportunity is what brings us together and keeps us excited about the work we do.
                <br/><br/>
                Your colleagues here are extraordinarily talented and dedicated, and they care deeply about making a
                difference. You will find that we have a strong culture that is inclusive, transparent, respectful, and
                upbeat.
                <br/><br/>
                Part of your job is being a great partner to our colleagues throughout government. We strive not only to
                lead the way in technology, but to exemplify the modern, collaborative, diverse culture we want to see.
                Our ability to collaborate with colleagues across government is crucial to our ability to make a
                difference.
                <br/><br/>
                We try to be both strategic and practical – strategic in always keeping the bigger opportunity front of
                mind and practical in grounding our work in the nitty gritty reality of getting particular projects
                done. We are committed to working in an open, iterative and user-centered way with a strong focus on
                delivery.
                <br/><br/>
                We aim to make our organization as agile and user-centric as our projects, tapping into our collective
                ideas and insights. So please let us know if you see any way we can improve.
                <br/><br/>
                Thank you again for bringing your talents to serve the public. We’re excited to have you as a member of
                the {siteConfig.customer.shortname} team.
            </div>
        </div>
    );
}
