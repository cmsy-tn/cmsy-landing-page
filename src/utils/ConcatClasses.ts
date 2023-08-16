/* eslint-disable @typescript-eslint/no-explicit-any */
export default function concatClassNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}