import { useState } from 'react';

export default function usePagination<T>(data: T[]) {
    const [currentPage, setCurrentPage] = useState<number>(1);
    // const [dataTable, setDataTable] = useState<T[]>([]);
    // const [totalPages] = useState<number>(Math.ceil(data.length / 3)); // Calculate totalPages using Math.ceil
    const totalPages = Math.ceil(data.length / 3);
    const dataTable = data.slice((currentPage - 1) * 3, currentPage * 3);

    const handleChangePage = (p: number) => setCurrentPage(p);

    return { dataTable, currentPage, handleChangePage, totalPages };
}
