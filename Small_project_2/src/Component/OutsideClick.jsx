import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const OutsideClick = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e) => {
      console.log(e.target, dropdownRef);
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
      <h1>Close DropDown On Outside Click</h1>
      <div className="relative" ref={dropdownRef}>
        <button className="w-full justify-between" onClick={toggleDropdown}>
          Select an option{" "}
          <ChevronDown
            className={`ml-2 h-4 w-4 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        {isOpen && (
          //
          <div className="absolute mt-2 w-full rounded-md border bg-background z-10 shadow-lg">
            <div className="py-1">
              {["Option 1", "Option 2", "Option 3", "Option 4"].map(
                (option, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {option}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OutsideClick;
