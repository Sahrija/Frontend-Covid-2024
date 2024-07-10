import { formatThousand } from "../../utils/utils";

function DataCard({ record, index }) {

    const totalLabelColor = ['text-green-500', 'text-sky-500', 'text-red-500']
    const total = formatThousand(record.total);

    return <div className='flex flex-col flex-1 bg-white shadow-md px-4 sm:px-6 py-4 sm:py-10 rounded text-center'>
        <span className='mb-4 font-semibold text-slate-600 text-xl md:text-3xl capitalize'>
            {record.status}
        </span>
        <span className={`break-all text-2xl sm:text-3xl md:text-4xl font-bold ${totalLabelColor[index]} break-keep`}>
            {total}
        </span>
    </div>;
}

export default DataCard;
