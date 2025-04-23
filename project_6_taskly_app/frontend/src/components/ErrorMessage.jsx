function ErrorMessage({ message }) {
    if (!message) return null

    return (
        <div className="max-w-full">
            <div className="flex justify-between rounded-md border border-red-300 bg-red-50 p-4">
                <div className="flex gap-3 sm:items-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className="text-red-600 sm:text-sm">{message}</p>
                </div>
            </div>
        </div>
    )
}

export default ErrorMessage
