export const downloadPDF = (invoice, previewRef) => {
  const element = previewRef.current;
  if (!element) return;

  const opt = {
    margin: 10,
    filename: `Invoice-${invoice.developerName}-${invoice.invoiceDate}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
  };

  // Dynamically import html2pdf
  import('html2pdf.js').then((html2pdf) => {
    html2pdf.default().set(opt).from(element).save();
  });
};
