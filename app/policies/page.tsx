import {title} from "@/components/primitives";
import {Divider} from "@nextui-org/react";

export default function PoliciesPage() {
    return (
        <div>
            <h1 className={title({size: "sm"})}>Policies</h1>
            <Divider className="my-4"/>
        </div>
    );
}
