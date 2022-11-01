import { PointMeta } from "../meta";
import { ConfigMeta } from './../meta/config.meta';

export interface ConfigProtocol {

    set(configMeta: ConfigMeta): Promise<void>;
    get(): Promise<ConfigMeta>;

    add(pointMeta: PointMeta): Promise<void>;
    delete(point: string): Promise<void>;
    update(pointMeta: PointMeta): Promise<void>;

    exists(point: string): Promise<boolean>;
    findOne(point: string): Promise<PointMeta | undefined>;
    findAll(): Promise<PointMeta[]>;
}