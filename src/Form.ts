import {Space} from "./Space";
import {Pt, IPt} from "./Pt";

export class Font {
  public size:number;
  public face:string;
  public style:string;

  constructor( size=11, face="sans-serif", style="") {
    this.size = size;
    this.face = face;
    this.style = style;
  }

  get data():string { return `${this.style} ${this.size}px ${this.face}` };
}


export abstract class Form {

  protected _filled = true;
  public get filled():boolean { return this._filled; }
  public set filled( b:boolean ) { this._filled = b; }
  
  protected _stroked = true;
  public get stroked():boolean { return this._stroked; }
  public set stroked( b:boolean ) { this._stroked = b; }

  protected _font:Font;
  public get font():Font { return this._font; }
  public set font( b:Font ) { this._font = b; }

  abstract get space():Space;

  public abstract fill( c:string|boolean ):this;

  public abstract stroke( c:string|boolean, width?:number, linejoin?:string, linecap?:string ):this;

  public abstract point( p:IPt, radius:number, shape?:string ): this;

  public abstract draw( ps:Pt[], shape?:string ): this;

}