"use client";

import { useState } from "react";
import { Icon } from "./Icon";

interface Props {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export function SelectRow({ label, value, options, onChange }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`selrow ${open ? "open" : ""}`}>
      <button type="button" className="selrow-head" onClick={() => setOpen((o) => !o)}>
        <span className={value ? "selrow-val" : "selrow-ph"}>{value || label}</span>
        <Icon name={open ? "chevU" : "chevD"} size={20} />
      </button>
      {open && (
        <div className="selrow-opts">
          {options.map((o) => (
            <button
              key={o}
              type="button"
              className={`selrow-opt ${o === value ? "sel" : ""}`}
              onClick={() => {
                onChange(o);
                setOpen(false);
              }}
            >
              {o}
              {o === value && <Icon name="check" size={18} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
