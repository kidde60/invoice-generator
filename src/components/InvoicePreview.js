import React, { forwardRef } from "react";
import { FileText } from "lucide-react";

const InvoicePreview = forwardRef(({ invoice, totalAmount }, ref) => {
  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl p-10 text-gray-900 shadow-2xl border border-gray-100"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-10 pb-8 border-b-2 border-gray-200">
        <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl">
          <FileText size={32} className="text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">
          Invoice – {invoice.developerName}
        </h1>
      </div>

      {/* Developer and Date Info */}
      <div className="mb-10 space-y-3">
        <p className="text-gray-700 text-lg">
          <span className="font-bold text-gray-900">Developer:</span>{" "}
          <span className="text-gray-600">{invoice.developerName}</span>
        </p>
        <p className="text-gray-700 text-lg">
          <span className="font-bold text-gray-900">Invoice Date:</span>{" "}
          <span className="text-gray-600">{invoice.invoiceDate}</span>
        </p>
      </div>

      {/* Tasks Section */}
      <div className="mb-10">
        <h2 className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-5">
          Tasks / Feature Areas
        </h2>
        <div className="space-y-3">
          {invoice.tasks.map((task, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition"
            >
              <p className="text-gray-700 font-medium">{task.name}</p>
              <p className="text-gray-900 font-semibold">
                {task.amount.toLocaleString()} UGX
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Total Amount Due */}
      <div className="mb-10 pb-8 border-b-2 border-gray-200">
        <p className="text-gray-600 text-xs uppercase font-bold tracking-wider mb-3">
          Total Amount Due
        </p>
        <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
          {totalAmount.toLocaleString()} UGX
        </p>
      </div>

      {/* Payment Status */}
      <div className="space-y-3">
        <p className="text-gray-700 text-lg">
          <span className="font-bold text-gray-900">Payment Status:</span>{" "}
          <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
            Unpaid
          </span>
        </p>
        <p className="text-gray-700 text-lg">
          <span className="font-bold text-gray-900">Amount Due:</span>{" "}
          <span className="text-gray-600">
            {totalAmount.toLocaleString()} UGX
          </span>
        </p>
        <p className="text-gray-700 text-lg">
          <span className="font-bold text-gray-900">Charges:</span>{" "}
          <span className="text-gray-600">{invoice.chargeCode}</span>
        </p>
      </div>
    </div>
  );
});

InvoicePreview.displayName = "InvoicePreview";

export default InvoicePreview;
