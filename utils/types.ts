// Used to extract element type from array: T[] --> T
// useful for pulling out node type from generated graphql types
export type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType[number]
