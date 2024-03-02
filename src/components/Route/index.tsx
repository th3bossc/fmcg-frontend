const Route = ({
    routeName,
    text,
    source,
    destination,
}: {
    routeName: string;
    text: string;
    source: string;
    destination: string;
}) => {
    return (
        <div className="border border-neutral-300 rounded-md p-2 text-md">
            <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">{routeName}</span>
                <span className="text-neutral-500">{text}</span>
            </div>

            <div className="flex justify-between items-center bg-neutral-200 rounded-sm text-neutral-700" >
                <span className="p-2">{source}</span>
                &rarr;
                <span className="p-2">{destination}</span>
            </div>

        </div>
    )
}

export default Route;