import {Link} from "@nextui-org/link";

export function Footer() {
    return (
        <footer className="w-full flex items-center justify-center py-3">
            <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://github.com/services"
                title="GitHub Expert Services"
            >
                <span className="text-default-600">
                    Developed by&nbsp;
                    <span className={"text-violet-500"}>GitHub Expert Services&nbsp;</span>
                    and powered by
                </span>
                <p className="text-primary">NextUI</p>
            </Link>
        </footer>
    )
}