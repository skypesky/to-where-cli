import { PointMeta } from "../meta";
import { WorkerProtocol } from "../protocol/worker.protocol";

export class SimpleWorker implements WorkerProtocol {

    cd(point: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    create(point: string, path: string, force: boolean): Promise<PointMeta> {
        throw new Error("Method not implemented.");
    }
    delete(point: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    list(): Promise<PointMeta[]> {
        throw new Error("Method not implemented.");
    }
    clean(): Promise<void> {
        throw new Error("Method not implemented.");
    }

}