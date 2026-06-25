"use client";

export default function AddLeadPage() {
  return (
    <div className="p-4 md:p-6 bg-[#F8F6EF] min-h-screen">

      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search for lead fields"
          className="w-72 border-b border-gray-400 bg-transparent outline-none px-2 py-2"
        />

        <button className="border border-[#5B3FD6] text-[#5B3FD6] px-4 py-2 rounded-full text-sm">
          Previously uploaded leads
        </button>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm">

        {/* CUSTOMER NAME */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-500 uppercase">
            Customer Name
          </label>

          <input
            type="text"
            placeholder="Text field value"
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        {/* PHONE */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-500 uppercase">
            Phone
          </label>

          <input
            type="text"
            placeholder="Enter Phone Number"
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        {/* ADDRESS */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-500 uppercase">
            Address
          </label>

          <input
            type="text"
            placeholder="Text field value"
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        {/* CONTACT ROLE */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-500 uppercase">
            Contact Role
          </label>

          <select className="w-full mt-1 border rounded px-3 py-2">
            <option>Select</option>
            <option>Builder</option>
            <option>Engineer</option>
            <option>Architect</option>
            <option>Owner</option>
          </select>
        </div>

        {/* LEAD SOURCE */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-500 uppercase">
            Lead Source
          </label>

          <select className="w-full mt-1 border rounded px-3 py-2">
            <option>Manual</option>
            <option>Google</option>
            <option>Facebook</option>
            <option>Reference</option>
          </select>
        </div>

        {/* BUILDER NAME */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-500 uppercase">
            Builder Name
          </label>

          <input
            type="text"
            placeholder="Text field value"
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        {/* DATE */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-500 uppercase">
            Date
          </label>

          <input
            type="datetime-local"
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        {/* CONSTRUCTION STAGE */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-500 uppercase">
            Construction Stage 1
          </label>

          <select className="w-full mt-1 border rounded px-3 py-2">
            <option>Select</option>
            <option>Foundation</option>
            <option>Roofing</option>
            <option>Finishing</option>
          </select>
        </div>

        {/* SQ FT */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-500 uppercase">
            Sq Ft
          </label>

          <input
            type="number"
            placeholder="123"
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num}>
            <div className="mb-4">
              <label className="text-xs font-semibold text-gray-500 uppercase">
                Alternate Name {num}
              </label>

              <input
                type="text"
                placeholder="Text field value"
                className="w-full mt-1 border rounded px-3 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="text-xs font-semibold text-gray-500 uppercase">
                Alternate Number {num}
              </label>

              <input
                type="text"
                placeholder="Enter Phone Number"
                className="w-full mt-1 border rounded px-3 py-2"
              />
            </div>
          </div>
        ))}

        {/* REVISIT */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-500 uppercase">
            Revisit
          </label>

          <input
            type="datetime-local"
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        {/* WEDDING DAY */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-500 uppercase">
            Wedding Day
          </label>

          <input
            type="datetime-local"
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        {/* BIRTHDAY */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-500 uppercase">
            Birthday
          </label>

          <input
            type="datetime-local"
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        {/* REMARK */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-500 uppercase">
            Remark
          </label>

          <input
            type="text"
            placeholder="Text field value"
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        {/* REMARK 2 */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-500 uppercase">
            Remark 2
          </label>

          <input
            type="text"
            placeholder="Text field value"
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        {/* SALESMAN */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-500 uppercase">
            Salesman
          </label>

          <input
            type="text"
            placeholder="Text field value"
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        {/* TILES PREFERENCE */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-500 uppercase">
            Tiles Preference
          </label>

          <select className="w-full mt-1 border rounded px-3 py-2">
            <option>Select</option>
            <option>Vitrified</option>
            <option>Parking</option>
            <option>Elevation</option>
          </select>
        </div>

        {/* BILL DATE */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-500 uppercase">
            Bill Date
          </label>

          <input
            type="datetime-local"
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        {/* TAKEN */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-500 uppercase">
            Taken
          </label>

          <input
            type="number"
            placeholder="123"
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        {/* VISIT */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-500 uppercase">
            Visit
          </label>

          <input
            type="text"
            placeholder="Text field value"
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        {/* QUOTATION */}
        <div className="mb-6">
          <label className="text-xs font-semibold text-gray-500 uppercase">
            Quotation
          </label>

          <input
            type="text"
            placeholder="Text field value"
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        <div className="flex justify-center">
          <button className="bg-[#5B3FD6] text-white px-8 py-3 rounded">
            ADD LEAD
          </button>
        </div>

      </div>
    </div>
  );
}