import {Link} from "@nextui-org/link";
import {button as buttonStyles} from "@nextui-org/theme";
import {siteConfig} from "@/config/site";
import {subtitle, title} from "@/components/primitives";
import {GithubIcon} from "@/components/icons";
import {Snippet} from "@nextui-org/snippet";
import {Code} from "@nextui-org/code";

export default function Home() {
    return (
        <section className="flex flex-col align-middle items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-lg text-center justify-center">
                <h1 className={title()}>Welcome to the VA</h1>
                <br/>
                <h1 className={title({color: "violet"})}>GitHub Handbook</h1>
                <br/>
                <h2 className={subtitle({class: "mt-4"})}>
                    GitHub is the primary source code management platform for the Department of Veterans Affairs.
                </h2>
            </div>
            <div className="flex gap-3">
                <Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Get started by viewing our <a href={"/access"}><Code
                        color="primary">Getting Access</Code></a> guide
					</span>
                </Snippet>
            </div>
            <div className="flex gap-3 mt-8">
                <Link
                    isExternal
                    className={buttonStyles({variant: "bordered", radius: "full"})}
                    href={siteConfig.links.github}
                >
                    <GithubIcon size={20}/>
                    GitHub
                </Link>
                <Link
                    isExternal
                    href={siteConfig.links.support}
                    className={buttonStyles({color: "primary", radius: "full", variant: "shadow"})}
                >
                    GitHub Support
                </Link>
            </div>
        </section>
    );
}
