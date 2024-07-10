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

    const excelData = data.regions && data.regions.map((region)=>{
        return {
            name: region.name,
            confirmed: region.numbers.confirmed,
            recovered: region.numbers.recovered,
            treatment: region.numbers.treatment,
            death: region.numbers.death,
        }
    })

    return (
        <div className='flex justify-end'>
            <div className="inline-flex shadow-sm mx-3 rounded-md">
                <a onClick={() => { exportToExcel(excelData, 'covid_case_in_indonesia.xlsx') }}
                    className="focus:z-10 border-gray-200 dark:border-gray-700 bg-teal-400 hover:bg-teal-500 dark:hover:bg-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-s-lg font-medium text-sm text-white hover:text-blue-700 dark:hover:text-white dark:focus:text-white dark:text-white hover:cursor-pointer focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:focus:ring-blue-500">
                    <span className='max-sm:hidden'>Download Excel</span>
                    <img className='sm:hidden max-w-5 fill-emerald-400' src="/assets/file-excel.svg" alt="" />
                </a>
                <a onClick={() => { exportAsCSV(excelData, 'covid_case_in_indonesia.csv') }}
                    className="focus:z-10 border-gray-200 dark:border-gray-700 bg-yellow-400 hover:bg-yellow-500 dark:hover:bg-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-e-lg font-medium text-sm text-white hover:text-blue-700 dark:hover:text-white dark:focus:text-white dark:text-white hover:cursor-pointer focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:focus:ring-blue-500">
                    <span className='max-sm:hidden'>Download CSV</span>
                    <img className='sm:hidden max-w-5' src="/assets/file-csv.svg" alt="" />
                </a>
            </div>
        </div>
    )
}
