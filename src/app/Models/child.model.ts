export interface ChildModel {
    id: number;
    status: string;
    dueDate: Date;
    taskType: string;
    dataManager: string;
    adm: string;
    pm: string;
    parentId: number;
}
