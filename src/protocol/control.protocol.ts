export interface ControlProtocol {
    add(point: string, path: string, force: boolean): Promise<void>;
    cd(point: string): Promise<void>;
    delete(): Promise<void>;

}