/// <refrence path="../typings/tsd.d.ts" />

import {Greeter} from '../Sources/Greeter';

describe("A suite for Greeter", () =>
{
    let instance: Greeter;
    beforeEach(() =>
    {
        instance = new Greeter("John");
    });

    it("Success", () =>
    {
        expect(instance.Name).toBe("John");
    });

    it("Fail", () =>
    {
        expect(instance.Name).toBe("Sam");
    });
});