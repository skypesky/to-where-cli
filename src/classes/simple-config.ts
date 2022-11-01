
import { fstat } from 'fs';
import { ConfigMeta, PointMeta } from '../meta';
import { ConfigProtocol } from './../protocol/config.protocol';
import yaml from 'js-yaml';
import { outputFile, readFile } from 'fs-extra';
import { isUndefined } from 'lodash';


export interface SimpleConfigOptions {
    filename: string;
}

export class SimpleConfig implements ConfigProtocol {

    private readonly options: SimpleConfigOptions = {} as SimpleConfigOptions;

    private readonly filename = '.config.yml';

    constructor(options: SimpleConfigOptions = {} as SimpleConfigOptions) {
        this.options.filename = options.filename ?? '.config.yml';
    }

    async set(configMeta: ConfigMeta): Promise<void> {
        await outputFile(this.options.filename, yaml.dump(configMeta));
    }


    async get(): Promise<ConfigMeta> {
        const configMeta: ConfigMeta = await yaml.load(
            await readFile(this.options.filename, 'utf-8')
        ) as ConfigMeta;

        return configMeta;
    }


    add(pointMeta: PointMeta): Promise<void> {
        throw new Error('Method not implemented.');
    }
    delete(point: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    update(pointMeta: PointMeta): Promise<void> {
        throw new Error('Method not implemented.');
    }


    async exists(point: string): Promise<boolean> {
        const pointMeta = await this.findOne(point);
        return !isUndefined(pointMeta);
    }

    async findOne(point: string): Promise<PointMeta | undefined> {
        const pointMetas: PointMeta[] = await this.findAll();

        return pointMetas.find(p => p.point === 'point');
    }

    async findAll(): Promise<PointMeta[]> {
        const configMeta: ConfigMeta = await this.get();
        return configMeta.pointMetas;
    }


}