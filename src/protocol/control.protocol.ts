export interface ControlProtocol {
  cd(point: string): Promise<void>;

  create(point: string, path: string, force: boolean): Promise<void>;
  
  delete(point: string): Promise<void>;

  show(point: string): Promise<string>;

  list(): Promise<string>;

  clean(): Promise<void>;
}