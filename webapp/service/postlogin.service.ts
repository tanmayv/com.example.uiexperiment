import { PostLoginResponse, PostLoginState } from "../types";
import Constant from "../constant";

function mergePostLoginLocalAndRemote(local: PostLoginResponse[], remote: PostLoginResponse[]): PostLoginState {
    // Make sure that every entry in remote exists in local
    if (remote.every(r => !!local.find(l => r.key == l.key))) {
        return {
            pages: local,
            currentPage: remote?.[0].key
        }
    }
    // Remote is not subset of local. Discard local
    return {
        pages: remote,
        currentPage: remote?.[0].key
    }
}

async function initializePostLoginState(): Promise<PostLoginState> {
    const localPostLoginPages: PostLoginResponse[] = JSON.parse(localStorage.getItem('postLoginState') || '[]');
    const response = await fetch(Constant.ApiPath('echo'), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Specify the content type
        },
        body: Constant.postLoginRes, // Convert the data to a JSON string
    });

    const remotePostLoginPages: PostLoginResponse[] = await response.json();
    console.log("local", localPostLoginPages);
    console.log("remote", remotePostLoginPages);
    const mergedState: PostLoginState = mergePostLoginLocalAndRemote(localPostLoginPages, remotePostLoginPages);
    localStorage.setItem('postLoginState', JSON.stringify(mergedState.pages));
    return mergedState;
}


/**
 * @namespace com.example.uiexperiment.service.postlogin
 */
export default class PostLoginService {
    private static instance: PostLoginService | null = null;
    private postLoginState: PostLoginState | null;

    // Singleton Shenanigans
    static GetInstance() {
        if (!PostLoginService.instance) PostLoginService.instance = new PostLoginService();
        return PostLoginService.instance;
    }

    async getPostLoginState(): Promise<PostLoginState> {
        if (this.postLoginState == null) {
            this.postLoginState = await initializePostLoginState();
        }
        return this.postLoginState;
    }


}