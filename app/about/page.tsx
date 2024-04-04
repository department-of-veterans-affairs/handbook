import React from "react";
import {title} from "@/components/primitives";
import {Avatar} from "@nextui-org/react";

export default function AboutPage() {
    return (
        <div>
            <h1 className={title()}>About GitHub</h1>
            <div className="flex pt-4 text-left">
                Github is a web-based graphical user interface for Git, a command-line tool, which adds many of its own
                features. GitHub also provides access control and collaboration features, such as bug and feature
                tracking, wikis, task management tools, powerful CI/CD capabilities, and a web-based IDE. It can be used
                by product and project managers for better team communication, managing issues and sharing content.
            </div>
            <div className="flex pt-4 text-left">
                The day-to-day operations of GitHub are managed by a team of Microsoft and GitHub contractors. The
                GitHub team also provides various consulting services to help teams and projects get started with
                GitHub or implementing more advanced features.
            </div>
            <div className="flex pt-4 text-left">
                You can learn more about your GitHub admin team below.
            </div>
            <div className="pt-4">
                <div className="flex pt-6 items-center justify-center">
                    <a href="https://github.com/speakmin" target="_blank">
                        <Avatar
                            size="lg"
                            src="https://avatars.githubusercontent.com/u/14301194?v=4"
                            alt={"Christian Speakman"}

                        />
                    </a>
                </div>
                <div className="pt-1">
                    Christian Speakman
                    <br/>
                    Senior DevOps Engineer
                </div>
                <div className="flex pt-6 items-center justify-center">
                    <a href="https://github.com/arilivigni" target="_blank">
                        <Avatar
                            size="lg"
                            src="https://avatars.githubusercontent.com/u/4140343?v=4"
                            alt={"Ari LiVigni"}
                        />
                    </a>
                </div>
                <div className="pt-1">
                    Ari LiVigni
                    <br/>
                    Senior DevOps Engineer
                </div>
                <div className="flex pt-6 items-center justify-center">
                    <a href="https://github.com/data-douser" target="_blank">
                        <Avatar
                            size="lg"
                            src="https://avatars.githubusercontent.com/u/70299490?v=4"
                            alt={"Nathan Randall"}
                        />
                    </a>
                </div>
                <div className="pt-1">
                    Nathan Randall
                    <br/>
                    Senior Security Architect
                </div>
                <div className="flex pt-6 items-center justify-center">
                    <a href="https://github.com/pwideman" target="_blank">
                        <Avatar
                            size="lg"
                            src="https://avatars.githubusercontent.com/u/188576?v=4"
                            alt={"Paul Wideman"}
                        />
                    </a>
                </div>
                <div className="pt-1">
                    Paul Wideman
                    <br/>
                    Senior Solutions Architect
                </div>
                <div className="flex pt-6 items-center justify-center">
                    <a href="https://github.com/lindluni" target="_blank">
                        <Avatar
                            size="lg"
                            src="https://avatars.githubusercontent.com/u/9400927?v=4"
                            alt={"Brett Logan"}
                        />
                    </a>
                </div>
                <div className="pt-1">
                    Brett Logan
                    <br/>
                    Senior Solutions Architect
                </div>
                <div className="flex pt-6 items-center justify-center">
                    <a href="https://github.com/garnertb" target="_blank">
                        <Avatar
                            size="lg"
                            src="https://avatars.githubusercontent.com/u/1141646?v=4"
                            alt={"Tyler Garner"}
                        />
                    </a>
                </div>
                <div className="pt-1">
                    Tyler Garner
                    <br/>
                    Senior Program Manager
                </div>
                <div className="flex pt-6 items-center justify-center">
                    <a href="https://github.com/akinsd1" target="_blank">
                        <Avatar
                            size="lg"
                            src="https://avatars.githubusercontent.com/u/58187963?v=4"
                            alt={"Delia Akins"}
                        />
                    </a>
                </div>
                <div className="pt-1">
                    Delia Akins
                    <br/>
                    Principal Project Manager
                </div>
                <div className="flex pt-6 items-center justify-center">
                    <a href="https://github.com/minh-truong" target="_blank">
                        <Avatar
                            size="lg"
                            src="https://avatars.githubusercontent.com/u/114602406?v=4"
                            alt={"Minh Truong"}
                        />
                    </a>
                </div>
                <div className="pt-1">
                    Minh Truong
                    <br/>
                    Support Engineer
                </div>
            </div>
        </div>
    );
}
