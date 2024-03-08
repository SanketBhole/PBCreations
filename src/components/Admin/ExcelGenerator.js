import * as XLSX from 'xlsx';

const generateExcelFile = (data) => {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  // Save the file
  XLSX.writeFile(wb, 'exported_data.xlsx');
};

export default generateExcelFile;
