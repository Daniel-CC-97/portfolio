export interface VideoType {
    title: string;
    video: VideoClass;
    order: number;
  }
  
  export interface VideoClass {
    metadata: Metadata;
    sys: VideoSys;
    fields: Fields;
  }
  
  export interface Fields {
    title: string;
    file: File;
  }
  
  export interface File {
    url: string;
    details: Details;
    fileName: string;
    contentType: string;
  }
  
  export interface Details {
    size: number;
  }
  
  export interface Metadata {
    tags: any[];
  }
  
  export interface VideoSys {
    space: Environment;
    id: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    environment: Environment;
    revision: number;
    locale: string;
  }
  
  export interface Environment {
    sys: EnvironmentSys;
  }
  
  export interface EnvironmentSys {
    id: string;
    type: string;
    linkType: string;
  }
  