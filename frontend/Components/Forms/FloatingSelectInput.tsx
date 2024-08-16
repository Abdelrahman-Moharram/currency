import React, { ChangeEvent } from 'react'

interface props {
	labelId: string;
	children: React.ReactNode;
	onChange: (e:ChangeEvent<HTMLSelectElement>) => void;
	value: string;
	label: string
	required?: boolean;
    emptyoption?:boolean;
    errors?: []
}

const FloatingSelectInput = ({
    labelId,
	children,
	onChange,
	value,
    label,
	required = false,
    emptyoption = true,
    errors
}: props) => {
  return (
    <>
    <label
        htmlFor={labelId}
        className="relative block rounded-md border border-primary/80 shadow-sm"
    >
        <select
            name={labelId}
            id={labelId}
            onChange={onChange}
            value={value}
            required={required}
            className="p-2 peer w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"        
        >
            {
                emptyoption?
                    <option value=""></option>
                :null
            }
            {children}
        </select>

        <span
            className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-primary transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
        >
            {label}
        </span>
    </label>
    {
        errors?.map(error=>
            <span className='text-red-500 block'>{error}</span>
        )
    }
    </>
  )
}

export default FloatingSelectInput
