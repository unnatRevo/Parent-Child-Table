import { ParentModel } from "./parent.model";

export class ParentEditModel {
    private id: number = 0;
    private title: string = '';
    private account: string = '';
    private dataType: string = '';
    private sendType: string = '';
    private system: string = '';
    private adm: string = '';
    private dm: string = '';

    get Id(): number {
        return this.id;
    }
    set Id(value: number) {
        this.id = value;
    }

    get Title(): string {
        return this.title;
    }
    set Title(value: string) {
        this.title = value;
    }

    get Account(): string {
        return this.account;
    }
    set Account(value: string) {
        this.account = value;
    }

    get DataType(): string {
        return this.dataType;
    }
    set DataType(value: string) {
        this.dataType = value;
    }

    get SendType(): string {
        return this.sendType;
    }
    set SendType(value: string) {
        this.sendType = value;
    }

    get System(): string {
        return this.system;
    }
    set System(value: string) {
        this.system = value;
    }

    get ADM(): string {
        return this.adm;
    }
    set ADM(value: string) {
        this.adm = value;
    }

    get DM(): string {
        return this.dm;
    }
    set DM(value: string) {
        this.dm = value;
    }

    public ToParentEditModel(parent: ParentModel): ParentEditModel {
        let p = new ParentEditModel();

        p.Id = parent.id;
        p.Title = parent.title;
        p.Account = parent.account;
        p.DataType = '';
        p.SendType = '';
        p.System = parent.system;
        p.ADM = parent.adm;
        p.DM = parent.dm;

        return p;
    }
}