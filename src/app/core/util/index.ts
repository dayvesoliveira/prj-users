export const value2String = (field: any): string => {
    return (field !== null && typeof field !== "undefined") ? field.toString() : "";
}

export const null2Empty = (obj: any, obj2: any = {}): any => {
    for(const key in obj) obj2[key] = value2String(obj[key]);
    return obj2;
}