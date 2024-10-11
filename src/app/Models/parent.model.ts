import { ChildModel } from "./child.model";

export interface ParentModel {
    id: number;
    title: string;
    account: string;
    datatype: string,
    sendtype: string;
    system: string;
    childrenCount: number;
    adm: string;
    dm: string;

    children: Array<ChildModel>;
}