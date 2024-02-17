import React from 'react';

function Table() {
  return (
    <div className="overflow-x-auto bg-white mt-3 p-3 rounded-md">
      <table className="table-auto w-full">
        <thead>
          <tr className='border-b-2'>
            <th className="px-1 py-5  text-start  text-white"><span className='bg-blue-600 p-2 text-white'>ASN Code</span></th>
            <th className="px-1 py-5 text-start">ASN Status</th>
            <th className="px-1 py-5 text-start">Total Weight(kg)</th>
            <th className="px-1 py-5 text-start">Total Volume</th>
            <th className="px-1 py-5 text-start">Supplier Name</th>
            <th className="px-1 py-5 text-start">Creater</th>
            <th className="px-1 py-5 text-start">Create Time</th>
            <th className="px-1 py-5 text-start">Update Time</th>
          </tr>
        </thead>
        <tbody className=''>
          {[...Array(5)].map((_, rowIndex) => (
            <tr key={rowIndex} className='border-b-2  border-gray-200 cursor-pointer hover:bg-gray-50 '>
              {[...Array(8)].map((_, colIndex) => (
                <td key={colIndex} className="px-1 py-5 text-start">Row {rowIndex + 1}, Col {colIndex + 1}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
