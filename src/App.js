import React, { useState, useRef } from "react";
import { X, FileText } from "lucide-react";
import InvoiceForm from "./components/InvoiceForm";
import InvoicePreview from "./components/InvoicePreview";
import { downloadPDF } from "./utils/pdfGenerator";

function App() {
  const [invoice, setInvoice] = useState({
    developerName: "Andama",
    invoiceDate: "8/1/2025",
    chargeCode: "3105",
    tasks: [
      { name: "Authentication issues", amount: 30000 },
      { name: "Tenant profile issues", amount: 20000 },
      { name: "Tenant & landlord issues", amount: 30000 },
      { name: "Keyboard handling & fixes", amount: 40000 },
      { name: "Property engagement fixes", amount: 50000 },
      { name: "Property management fixes", amount: 60000 },
    ],
    paymentStatus: "Unpaid",
  });

  const previewRef = useRef(null);

  const handleInputChange = (field, value) => {
    setInvoice((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleTaskChange = (index, field, value) => {
    const updatedTasks = [...invoice.tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      [field]: field === "amount" ? parseInt(value) || 0 : value,
    };
    setInvoice((prev) => ({
      ...prev,
      tasks: updatedTasks,
    }));
  };

  const handleAddTask = () => {
    setInvoice((prev) => ({
      ...prev,
      tasks: [...prev.tasks, { name: "", amount: 0 }],
    }));
  };

  const handleRemoveTask = (index) => {
    setInvoice((prev) => ({
      ...prev,
      tasks: prev.tasks.filter((_, i) => i !== index),
    }));
  };

  const handleDownloadPDF = () => {
    downloadPDF(invoice, previewRef);
  };

  const totalAmount = invoice.tasks.reduce((sum, task) => sum + task.amount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Invoice Generator
          </h1>
          <p className="text-gray-600 text-lg">
            Create and download professional invoices
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Form */}
          <div className="lg:sticky lg:top-10 lg:h-fit">
            <InvoiceForm
              invoice={invoice}
              onInputChange={handleInputChange}
              onTaskChange={handleTaskChange}
              onAddTask={handleAddTask}
              onRemoveTask={handleRemoveTask}
              totalAmount={totalAmount}
              onDownloadPDF={handleDownloadPDF}
            />
          </div>

          {/* Right Panel - Preview */}
          <div>
            <InvoicePreview
              invoice={invoice}
              totalAmount={totalAmount}
              ref={previewRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
