import { HttpClient } from 'aurelia-fetch-client';
import { autoinject } from 'aurelia-framework';

@autoinject
export class WebApi {

    constructor(public httpClient: HttpClient){
        this.configureHttpClient();
    }

    private configureHttpClient() {
        this.httpClient = new HttpClient().configure(x => {
            x.withBaseUrl("https://creative-days-family-game-api.azurewebsites.net/api")
          });
    }

    public async getAsync<T>(input: string): Promise<T> {
        return this.httpClient.fetch(input, { method: 'GET' })
            .then((response) => this.handleFailedRequest(response))
            .then((response) => this.resolveResult<T>(response))
            .catch((error) => {
                return this.handleError(error);
            });
    }

    private async handleFailedRequest(response: Response) {
        if (!response.ok) {
            let serverError = await response.json();
            throw new Error(serverError);
        }
        return response;
    }

    private resolveResult<T>(response: Response): Promise<T> {
        let result = response.json();
        console.log(result);
        return result;
    }

    private handleError(error) {
        if (error.errorMessage == null) {
            error = new Error('server_error');
        }
        return Promise.reject(error);
    }
}