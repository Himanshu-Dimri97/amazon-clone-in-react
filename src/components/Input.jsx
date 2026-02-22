export default function Input({ className = "", ...props }) {
    return (
        <input
            {...props}
            className={`w-full mb-3 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm placeholder-gray-400
                        outline-none
                        transition-all duration-200
                      focus:border-yellow-500
                        focus:ring-2 focus:ring-yellow-400/40
                   ${className}
  `}
        />

    )
}
