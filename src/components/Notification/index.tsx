import { ReceiptInterface } from "@/types";
import { Dispatch, SetStateAction } from "react";

const Notification = ({
    title,
    day,
}: {
    title: string,
    day: string,
}) => {
    return (
        <div className="cursor-pointer w-full flex items-center justify-between">
            <div className="flex gap-2 items-center justify-center">
                <span
                    className="border border-red-400 rounded-xl m-2 p-2 bg-red-300"
                />
                <span> {title} </span>
            </div>
            <div className="flex gap-2 items-center justify-center">
                <span
                    className="border border-neutral-400 rounded-xl m-1 p-1 bg-neutral-300"
                />
                {day}
            </div>
        </div>
    );
}

export default Notification;