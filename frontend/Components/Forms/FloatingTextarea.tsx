import React, { ChangeEvent } from 'react'

interface props {
	labelId: string;
	onChange: (e:ChangeEvent<HTMLTextAreaElement>) => void;
	value: string;
	label: string
	required?: boolean;
    errors?: []
}

const FloatingTextarea = ({labelId,
	onChange,
	value,
	label,
	required = false,
    errors
}: props) => {
  return (
    <>
    <label
        htmlFor={labelId}
        className="relative block rounded-md border border-primary/80 shadow-sm"
    >
        <textarea
            name={labelId}
            rows={4}
            id={labelId}
            required={required}
            className="p-4 resize-none peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
            placeholder={label}
            defaultValue={value}
            onChange={onChange}
        >
        </textarea>
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

export default FloatingTextarea
