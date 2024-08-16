import React, { useCallback } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface props{
    page:number;
    totalPages: number
}
const Paginition = ({page, totalPages}:props) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    const createQueryString = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
    
          return params.toString()
        },
        [searchParams]
      )

  return (
    <div className="inline-flex items-center justify-center gap-3">
        {
            page >= 2?
                <button
                    onClick={()=>{
                        router.push(pathname + '?' + createQueryString('page', (page-1).toString()))
                    }}
                    className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                    <span className="sr-only">Next Page</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    />
                    </svg>
                </button>
            : null
        }

        <p className="text-xs text-gray-900">
            {page}
            <span className="mx-0.25">/</span>
            {totalPages}
        </p>

        {
            page < totalPages?
                <button
                    onClick={()=>{
                        router.push(pathname + '?' + createQueryString('page', (page+1).toString()))
                    }}
                    className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                    <span className="sr-only">Next Page</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                    />
                    </svg>
                </button>
            :null
        }
    </div>
  )
}

export default Paginition
