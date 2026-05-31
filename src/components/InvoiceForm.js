import React from "react";
import { X, Download } from "lucide-react";

function InvoiceForm({
  invoice,
  onInputChange,
  onTaskChange,
  onAddTask,
  onRemoveTask,
  totalAmount,
  onDownloadPDF,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
      {/* Developer Name */}
      <div>
        <label className="block text-xs font-bold text-gray-600 mb-3 uppercase tracking-wider">
          Developer Name
        </label>
        <input
          type="text"
          value={invoice.developerName}
          onChange={(e) => onInputChange("developerName", e.target.value)}
          className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      {/* Invoice Date */}
      <div>
        <label className="block text-xs font-bold text-gray-600 mb-3 uppercase tracking-wider">
          Invoice Date
        </label>
        <input
          type="text"
          value={invoice.invoiceDate}
          onChange={(e) => onInputChange("invoiceDate", e.target.value)}
          className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          placeholder="MM/DD/YYYY"
        />
      </div>

      {/* Charge Code */}
      <div>
        <label className="block text-xs font-bold text-gray-600 mb-3 uppercase tracking-wider">
          Charge Code
        </label>
        <input
          type="text"
          value={invoice.chargeCode}
          onChange={(e) => onInputChange("chargeCode", e.target.value)}
          className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      {/* Tasks */}
      <div>
        <label className="block text-xs font-bold text-gray-600 mb-4 uppercase tracking-wider">
          Tasks / Feature Areas
        </label>
        <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
          {invoice.tasks.map((task, index) => (
            <div
              key={index}
              className="flex gap-3 items-center bg-gray-50 p-3 rounded-lg border border-gray-200 hover:border-blue-300 transition"
            >
              <input
                type="text"
                value={task.name}
                onChange={(e) => onTaskChange(index, "name", e.target.value)}
                placeholder="Task name"
                className="flex-1 px-3 py-2 bg-white text-gray-900 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition"
              />
              <input
                type="number"
                value={task.amount}
                onChange={(e) => onTaskChange(index, "amount", e.target.value)}
                placeholder="Amount"
                className="w-28 px-3 py-2 bg-white text-gray-900 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition"
              />
              <button
                onClick={() => onRemoveTask(index)}
                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition"
              >
                <X size={18} />
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={onAddTask}
          className="mt-4 w-full px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition text-sm font-semibold border border-blue-200"
        >
          + Add Task
        </button>
      </div>

      {/* Total Amount Due */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white mt-8">
        <p className="text-blue-100 text-xs uppercase font-bold tracking-wider mb-2">
          Total amount due
        </p>
        <p className="text-4xl font-bold">{totalAmount.toLocaleString()} UGX</p>
      </div>

      {/* Download Button */}
      <button
        onClick={onDownloadPDF}
        className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-bold flex items-center justify-center gap-2 transition shadow-lg hover:shadow-xl"
      >
        <Download size={20} />
        Download PDF
      </button>
    </div>
  );
}

export default InvoiceForm;
