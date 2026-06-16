import {
  Camera,
  CalendarDays,
  MapPin,
  Plus,
  Trash2,
  Download,
  Printer,
} from "lucide-react";

const products = [
  ["ipod 2021", "$1000", "10 Pcs", "$10,000"],
  ["Apple Mackbook", "$1500", "10 Pcs", "$150,000"],
  ["i phone 12", "$885", "10 Pcs", "$8850"],
];

export default function CreateInvoice() {
  return (
    <div className="bg-[#fafbff] min-h-screen px-4 sm:px-6 lg:px-9 py-6 lg:py-8 overflow-x-hidden">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8">
          <h1 className="text-[22px] sm:text-[24px] lg:text-[26px] font-bold text-[#111139] mb-7">
            Create New Invoice
          </h1>

          <div className="w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] rounded-full bg-[#f6f6f8] mx-auto flex items-center justify-center mb-8">
            <Camera size={28} className="text-[#4b4b68]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6">
            <div>
              <label className="text-sm text-[#111139]">Invoice Id</label>
              <input
                defaultValue="#876370"
                className="w-full h-[52px] bg-[#f6f6f8] rounded-lg mt-2 px-5 text-sm outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-[#111139]">Date</label>
              <div className="w-full h-[52px] bg-[#f6f6f8] rounded-lg mt-2 px-5 flex items-center justify-between">
                <span className="text-sm text-gray-500">01/12/2021</span>
                <CalendarDays size={18} className="text-[#5D5FEF]" />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="text-sm text-[#111139]">Name</label>
            <input
              defaultValue="Alison G."
              className="w-full h-[52px] bg-[#f6f6f8] rounded-lg mt-2 px-5 text-sm outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-7">
            <div>
              <label className="text-sm text-[#111139]">Email</label>
              <input
                defaultValue="Example@gmail.com"
                className="w-full h-[52px] bg-[#f6f6f8] rounded-lg mt-2 px-5 text-sm outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-[#111139]">Address</label>
              <div className="w-full h-[52px] bg-[#f6f6f8] rounded-lg mt-2 px-5 flex items-center justify-between">
                <span className="text-sm text-gray-500">Street</span>
                <MapPin size={18} className="text-[#8B7CFF] fill-[#8B7CFF]" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[16px] font-semibold text-[#111139]">
              Product Description
            </h3>

            <button className="w-9 h-9 rounded-lg bg-[#5D5FEF] text-white flex items-center justify-center">
              <Plus size={18} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[620px]">
              <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_40px] text-sm text-[#111139] mb-3">
                <p>Product Name</p>
                <p>Rate</p>
                <p>QTY</p>
                <p>Amount</p>
                <span></span>
              </div>

              {products.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[1.5fr_1fr_1fr_1fr_40px] items-center border-b py-4 text-sm"
                >
                  <p className="text-blue-500">{item[0]}</p>
                  <p>{item[1]}</p>
                  <p>{item[2]}</p>
                  <p className="text-green-500">{item[3]}</p>

                  <button className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                    <Trash2 size={14} className="text-red-500 fill-red-500" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-8">
            <button className="h-[48px] rounded-lg border border-indigo-100 text-[#5D5FEF]">
              Send Invoice
            </button>

            <button className="h-[48px] rounded-lg bg-[#5D5FEF] text-white">
              Create Invoice
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8">
          <div className="flex justify-between mb-7">
            <h1 className="text-[22px] sm:text-[24px] lg:text-[26px] font-bold text-[#111139]">
              Preview
            </h1>

            <div className="flex gap-5 text-[#5D5FEF]">
              <Download size={20} />
              <Printer size={20} />
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[620px] bg-white border border-gray-100 min-h-[760px] p-6 sm:p-8 lg:p-10">
              <div className="flex justify-between mb-12">
                <div className="text-5xl font-bold text-blue-500">J</div>

                <div className="text-right text-xs text-gray-400">
                  <p>your.mail@gmail.com</p>
                  <p>+386 982 271 3115</p>
                </div>
              </div>

              <div className="flex justify-between mb-12">
                <div className="text-xs text-gray-500 leading-6">
                  <p className="font-semibold text-gray-400 mb-2">RECIPIENT</p>
                  <p>JOHN SMITH</p>
                  <p>4304 Liberty Avenue</p>
                  <p>92680 Tustin, CA</p>
                  <p>VAT NO: 123456789</p>
                </div>

                <div className="text-right">
                  <h2 className="text-3xl font-bold text-[#111139] mb-4">
                    Invoice
                  </h2>
                  <p className="text-xs text-gray-400">INVOICE NO.</p>
                  <p className="text-xs text-gray-500 mb-3">001/2021</p>
                  <p className="text-xs text-gray-400">INVOICE DATE</p>
                  <p className="text-xs text-gray-500">January 1, 2021</p>
                </div>
              </div>

              <table className="w-full text-xs mb-8">
                <thead className="text-gray-400 border-b">
                  <tr>
                    <th className="text-left py-3">TASK DESCRIPTION</th>
                    <th>HOURS</th>
                    <th>RATE</th>
                    <th className="text-right">AMOUNT</th>
                  </tr>
                </thead>

                <tbody className="text-gray-600">
                  <tr className="border-b">
                    <td className="py-3">Website redesign</td>
                    <td className="text-center">60</td>
                    <td className="text-center">15 USD</td>
                    <td className="text-right">900,00 USD</td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-3">Newsletter template design</td>
                    <td className="text-center">20</td>
                    <td className="text-center">12 USD</td>
                    <td className="text-right">240,00 USD</td>
                  </tr>
                </tbody>
              </table>

              <div className="ml-auto w-[250px] text-xs text-gray-500 space-y-3 mb-10">
                <div className="flex justify-between">
                  <span>SUBTOTAL</span>
                  <span>1140,00 USD</span>
                </div>

                <div className="flex justify-between">
                  <span>DISCOUNT 5%</span>
                  <span>57,00 USD</span>
                </div>

                <div className="flex justify-between font-bold text-blue-500 border-t pt-3">
                  <span>TOTAL</span>
                  <span>1083,00 USD</span>
                </div>
              </div>

              <p className="text-center text-xs text-gray-400 mb-8">
                Transfer the amount to the business account below. Please include
                invoice number on your check.
              </p>

              <div className="flex justify-center gap-8 text-xs text-gray-500 mb-10">
                <p>
                  BANK: <b>FTBUSS33</b>
                </p>
                <p>
                  IBAN: <b>GB82-1111-2222-3333</b>
                </p>
              </div>

              <div className="text-xs text-gray-400 leading-6">
                <p className="font-semibold text-gray-500 mb-3">NOTES</p>
                <p>
                  All amounts are in dollars. Please make the payment within 15
                  days from the issue date of this invoice.
                </p>
                <p className="mt-4">Thank you for your confidence in my work.</p>
                <p>Signature</p>
              </div>
            </div>
          </div>

          <p className="xl:hidden text-xs text-gray-400 mt-3">
            Swipe horizontally to view full invoice preview.
          </p>
        </div>
      </div>
    </div>
  );
}