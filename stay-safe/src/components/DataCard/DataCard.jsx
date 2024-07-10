import { formatThousand } from "../../utils/utils";

function DataCard({ record, index }) {

    const totalLabelColor = ['text-green-500', 'text-sky-500', 'text-red-500']
    const total = formatThousand(record.total);

    return <div className='flex flex-col sm:flex-1 bg-white shadow-md p-10 rounded text-center'>
        <span className='text-3xl'>
            {record.status}
        </span>
        <span className={`break-all text-5xl font-bold ${totalLabelColor[index]}`}>
            {total}
        </span>
    </div>;
}

export default DataCard;
