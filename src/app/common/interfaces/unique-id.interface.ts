export interface IUniqueId {
    id: string;
    generateId?(): string;
}