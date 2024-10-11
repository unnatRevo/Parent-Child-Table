import { RequestParams } from "./request-params.model";

export class ChildEventModel {

    private _parentId: number;
    private _request: RequestParams;

    constructor(parentId: number = 1, req: RequestParams = new RequestParams()) {
        this._parentId = parentId;
        this._request = req;
    }

    public get ParentId(): number {
        return this._parentId;
    }
    public set ParentId(v: number) {
        this._parentId = v;
    }

    public get Request(): RequestParams {
        return this._request;
    }
    public set Request(v: RequestParams) {
        this._request = v;
    }

}