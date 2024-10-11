export class RequestParams {
    private _pageNumber: number = 0;  // Zero-based page index
    private _pageSize: number = 10;  // Number of items per page
    private _sortBy: string = "Id";  // Default sort field
    private _sortDirection: string = "asc";  // Sort direction: "asc" or "desc"
    private _filter: string | null = null;  // Optional filter text

    get pageNumber(): number {
        return this._pageNumber;
    }
    set pageNumber(value: number) {
        this._pageNumber = value;
    }

    get pageSize(): number {
        return this._pageSize;
    }
    set pageSize(value: number) {
        this._pageSize = value;
    }

    get sortBy(): string {
        return this._sortBy;
    }
    set sortBy(value: string) {
        this._sortBy = value;
    }

    get sortDirection(): string {
        return this._sortDirection;
    }
    set sortDirection(value: string) {
        this._sortDirection = value;
    }

    get filter(): string | null {
        return this._filter;
    }
    set filter(value: string | null) {
        this._filter = value;
    }
}