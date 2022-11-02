export const requiredFiled = (value: string) => {
    if (value) return undefined
    return 'Field is required'
}


export const maxLength = (max: number) => (value: string) => {
    return value && value.length > max ? `Must be ${max} characters or less` : undefined
}

export const maxLength10 = maxLength(10)