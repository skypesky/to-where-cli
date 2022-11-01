import { PointMeta } from "../meta";

export interface ConfigProtocol {

    add(pointMeta: PointMeta): Promise<void>;
    delete(point: string): Promise<void>;
    update(pointMeta: PointMeta): Promise<void>;

    exists(point: string): Promise<boolean>;
    findOne(point: string): Promise<PointMeta>;
    find(): Promise<PointMeta[]>;
}