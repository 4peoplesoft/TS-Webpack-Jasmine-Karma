import {Tester} from "./Tester";

export default function greet(name: string)
{
    return 'Hello ' + name;
}
export class Greeter
{
    private _name: string;

    public get Name(): string
    {
        return this._name;
    }
    public constructor(name: string)
    {
        this._name = name;
    }
}