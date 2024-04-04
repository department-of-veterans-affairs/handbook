import React from "react";
import {title} from "@/components/primitives";
import {Divider, Link, User} from "@nextui-org/react";

export default function AboutPage() {
    return (
        <div>
            <h1 className={title({size: "sm"})}>About GitHub</h1>
            <Divider className="my-4"/>
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
                Learn more about your GitHub admin team below.
            </div>
            <div className="pt-4">
                <div className="flex pt-6 items-center justify-center">
                    <Link href="https://github.com/speakmin" target="_blank">
                        <User
                            name="Christian Speakman"
                            description="Senior DevOps Engineer"
                            avatarProps={{
                                src: "https://avatars.githubusercontent.com/u/14301194?v=4",
                                alt: "Christian Speakman"
                            }}
                        />
                    </Link>
                </div>
                <div className="flex pt-6 items-center justify-center">
                    <Link href="https://github.com/arilivigni" target="_blank">
                        <User
                            name="Ari LiVigni"
                            description="Senior DevOps Engineer"
                            avatarProps={{
                                src: "https://avatars.githubusercontent.com/u/4140343?v=4",
                                alt: "Ari LiVigni"
                            }}
                        />
                    </Link>
                </div>
                <div className="flex pt-6 items-center justify-center">
                    <Link href="https://github.com/data-douser" target="_blank">
                        <User
                            name="Nathan Randall"
                            description="Senior Security Architect"
                            avatarProps={{
                                src: "https://avatars.githubusercontent.com/u/70299490?v=4",
                                alt: "Nathan Randall"
                            }}
                        />
                    </Link>
                </div>
                <div className="flex pt-6 items-center justify-center">
                    <Link href="https://github.com/pwideman" target="_blank">
                        <User
                            name="Paul Wideman"
                            description="Senior Solutions Architect"
                            avatarProps={{
                                src: "https://avatars.githubusercontent.com/u/188576?v=4",
                                alt: "Paul Wideman"
                            }}
                        />
                    </Link>
                </div>
                <div className="flex pt-6 items-center justify-center">
                    <Link href="https://github.com/lindluni" target="_blank">
                        <User
                            name="Brett Logan"
                            description="Senior Solutions Architect"
                            avatarProps={{
                                src: "https://avatars.githubusercontent.com/u/9400927?v=4",
                                alt: "Brett Logan"
                            }}
                        />
                    </Link>
                </div>
                <div className="flex pt-6 items-center justify-center">
                    <Link href="https://github.com/garnertb" target="_blank">
                        <User
                            name="Tyler Garner"
                            description="Senior Program Manager"
                            avatarProps={{
                                src: "https://avatars.githubusercontent.com/u/1141646?v=4",
                                alt: "Tyler Garner"
                            }}
                        />
                    </Link>
                </div>
                <div className="flex pt-6 items-center justify-center">
                    <Link href="https://github.com/akinsd1" target="_blank">
                        <User
                            name="Delia Akins"
                            description="Principal Project Manager"
                            avatarProps={{
                                src: "https://avatars.githubusercontent.com/u/58187963?v=4",
                                alt: "Delia Akins"
                            }}
                        />
                    </Link>
                </div>
                <div className="flex pt-6 items-center justify-center">
                    <Link href="https://github.com/minh-truong" target="_blank">
                        <User
                            name="Minh Truong"
                            description="Senior Support Engineer"
                            avatarProps={{
                                src: "https://avatars.githubusercontent.com/u/114602406?v=4",
                                alt: "Minh Truong"
                            }}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
