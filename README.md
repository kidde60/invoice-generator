# Invoice Generator

A modern React application for generating and downloading invoices as PDFs.

## Features

- **Dynamic Invoice Form**: Add/edit developer name, invoice date, charge code, and tasks
- **Live Preview**: See invoice changes in real-time
- **PDF Download**: Export invoices as PDF files
- **Responsive Design**: Works on desktop and tablet devices
- **Modern UI**: Built with Tailwind CSS and Lucide icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

1. **Fill in Invoice Details**:
   - Enter developer name
   - Set invoice date
   - Add charge code

2. **Add Tasks**:
   - Enter task name and amount
   - Click "+ Add Task" to add more tasks
   - Click "X" to remove a task

3. **Download Invoice**:
   - Click "Download PDF" to save the invoice as a PDF file

## Technologies Used

- **React**: UI library
- **Tailwind CSS**: Styling
- **Lucide React**: Icons
- **html2pdf.js**: PDF generation
- **React Scripts**: Build tools

## Project Structure

```
src/
├── components/
│   ├── InvoiceForm.js      # Form inputs for invoice details
│   └── InvoicePreview.js   # Invoice preview display
├── utils/
│   └── pdfGenerator.js     # PDF download functionality
├── App.js                  # Main application component
└── index.js               # Entry point
```

## License

MIT
