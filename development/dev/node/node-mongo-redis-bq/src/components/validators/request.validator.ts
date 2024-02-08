import { validate as isValidUUID } from 'uuid';
export function isValidUuid(uuid: string): boolean {
    return isValidUUID(uuid);
}

export function isInValidUuId(uuid: string): boolean {
    if (uuid === null) {
        return false;
    }
    return !isValidUuid(uuid);
}