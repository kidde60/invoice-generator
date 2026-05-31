export const downloadPDF = (invoice, previewRef) => {
  import("jspdf").then(({ jsPDF }) => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const contentWidth = pageWidth - 2 * margin;
    let yPosition = margin;

    // Header text
    doc.setFontSize(32);
    doc.setFont(undefined, "bold");
    doc.setTextColor(37, 99, 235);
    doc.text("INVOICE", margin, yPosition + 10);

    doc.setFontSize(12);
    doc.setFont(undefined, "normal");
    doc.setTextColor(100, 100, 100);
    doc.text(`Developer: ${invoice.developerName}`, margin, yPosition + 20);
    doc.text(`Date: ${invoice.invoiceDate}`, margin, yPosition + 28);

    yPosition += 40;

    // Invoice Details Section
    doc.setFontSize(10);
    doc.setFont(undefined, "bold");
    doc.setTextColor(37, 99, 235);
    doc.text("INVOICE DETAILS", margin, yPosition);
    yPosition += 8;

    doc.setFontSize(11);
    doc.setFont(undefined, "normal");
    doc.setTextColor(50, 50, 50);
    doc.text(`Developer: ${invoice.developerName}`, margin, yPosition);
    yPosition += 7;
    doc.text(`Invoice Date: ${invoice.invoiceDate}`, margin, yPosition);
    yPosition += 7;
    doc.text(`Charge Code: ${invoice.chargeCode}`, margin, yPosition);
    yPosition += 12;

    // Tasks Section Header
    doc.setFontSize(10);
    doc.setFont(undefined, "bold");
    doc.setTextColor(37, 99, 235);
    doc.text("TASKS / FEATURE AREAS", margin, yPosition);
    yPosition += 8;

    doc.setFontSize(14);
    doc.setFont(undefined, "normal");
    doc.setTextColor(50, 50, 50);

    invoice.tasks.forEach((task, index) => {
      const taskName = task.name || "Unnamed Task";
      const amount = task.amount.toLocaleString();

      // Alternate row colors
      if (index % 2 === 0) {
        doc.setFillColor(245, 245, 245);
        doc.rect(margin, yPosition - 5, contentWidth, 8, "F");
      }

      // Task name and amount
      const taskNameWidth = contentWidth - 40;
      const wrappedName = doc.splitTextToSize(taskName, taskNameWidth);
      doc.text(wrappedName, margin, yPosition);

      // Amount aligned to right
      doc.setFont(undefined, "bold");
      doc.text(`${amount} UGX`, pageWidth - margin - 30, yPosition);
      doc.setFont(undefined, "normal");

      yPosition += wrappedName.length * 5.5 + 3;
    });

    yPosition += 8;

    // Total Amount Section
    doc.setFontSize(10);
    doc.setFont(undefined, "bold");
    doc.setTextColor(37, 99, 235);
    doc.text("TOTAL AMOUNT DUE", margin, yPosition);
    yPosition += 8;

    const totalAmount = invoice.tasks.reduce(
      (sum, task) => sum + task.amount,
      0,
    );
    doc.setFontSize(26);
    doc.setFont(undefined, "bold");
    doc.setTextColor(37, 99, 235);
    doc.text(`${totalAmount.toLocaleString()} UGX`, margin, yPosition);

    yPosition += 20;

    // Payment Status Section
    doc.setFontSize(10);
    doc.setFont(undefined, "bold");
    doc.setTextColor(37, 99, 235);
    doc.text("PAYMENT INFORMATION", margin, yPosition);
    yPosition += 8;

    doc.setFontSize(10);
    doc.setFont(undefined, "normal");
    doc.setTextColor(50, 50, 50);
    doc.text(`Payment Status: Unpaid`, margin, yPosition);
    yPosition += 7;
    doc.text(
      `Amount Due: ${totalAmount.toLocaleString()} UGX`,
      margin,
      yPosition,
    );
    yPosition += 7;
    doc.text(`Charges: ${invoice.chargeCode}`, margin, yPosition);

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(
      "This is an automatically generated invoice. Please retain for your records.",
      margin,
      pageWidth - 10,
    );

    // Save the PDF
    const filename = `Invoice-${invoice.developerName}-${invoice.invoiceDate}.pdf`;
    doc.save(filename);
  });
};
