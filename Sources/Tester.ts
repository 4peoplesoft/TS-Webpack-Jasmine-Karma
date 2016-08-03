export class Tester
{
    public constructor() { }

    public async AsyncMethod(): Promise<boolean>
    {
        for (var index = 0; index < 200; index++)
        {
            let data = await this.GetPage("https://www.youtube.com");
        }
        return true;
    }
    private GetPage(url: string): Promise<string>
    {
        return new Promise<string>((resolve, reject) =>
        {
            let request = new XMLHttpRequest();
            request.open("GET", "./index.html", true);
            request.send();

            request.onreadystatechange = function ()
            {
                if (request.readyState == 4 && request.status == 200)
                {
                    resolve(request.responseType);
                } 
            };
        });
    }
}

