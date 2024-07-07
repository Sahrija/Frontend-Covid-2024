import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


function exportToExcel(data, filename = 'data.xlsx') {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, filename);
}

function exportAsCSV(data, filename = 'data.csv') {
    const csvContent = XLSX.utils.sheet_to_csv(XLSX.utils.json_to_sheet(data));
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, filename)
}

export default function DownloadDataButton({ data }) {

    return (
        <div className='flex justify-end'>
            <div className="inline-flex rounded-md shadow-sm mx-3">
                <a onClick={() => { exportToExcel(data, 'covid_case_in_indonesia.xlsx') }}
                    className="px-4 py-2 text-sm font-medium hover:cursor-pointer text-white bg-teal-400 border border-gray-200 rounded-s-lg hover:bg-teal-500 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                    <span className='max-sm:hidden'>Download Excel</span>
                    <img className='sm:hidden max-w-5 fill-emerald-400' src="/assets/file-excel.svg" alt="" />
                </a>
                <a onClick={() => { exportAsCSV(data, 'covid_case_in_indonesia.csv') }}
                    className="px-4 py-2 text-sm font-medium hover:cursor-pointer text-white bg-yellow-400 border border-gray-200 rounded-e-lg hover:bg-yellow-500 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                    <span className='max-sm:hidden'>Download CSV</span>
                    <img className='sm:hidden max-w-5' src="/assets/file-csv.svg" alt="" />
                </a>
            </div>
        </div>
    )
}
